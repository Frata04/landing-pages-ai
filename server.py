"""
FastMCP server per landing-pages-ai.

Espone alcuni tool via Streamable HTTP, pronti per essere collegati a Lovable
come "custom chat connector" (MCP server).

Due modalità di autenticazione (scelte tramite variabili d'ambiente):

  • OAuth (GitHub)  -> consigliata, è il default di Lovable.
      Imposta GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET e BASE_URL.
  • Bearer token    -> fallback semplice se le variabili GitHub non ci sono.
      Imposta MCP_TOKEN.

Avvio locale:
    python server.py

Endpoint MCP:  http://<host>:<port>/mcp
"""

import os

from fastmcp import FastMCP


def build_auth():
    """Sceglie il provider di autenticazione in base alle variabili d'ambiente."""
    gh_client_id = os.environ.get("GITHUB_CLIENT_ID")
    gh_client_secret = os.environ.get("GITHUB_CLIENT_SECRET")
    base_url = os.environ.get("BASE_URL")  # es. https://tuo-dominio.com

    # --- OAuth via GitHub (il flusso che Lovable usa di default) ----------
    if gh_client_id and gh_client_secret and base_url:
        from fastmcp.server.auth.providers.github import GitHubProvider

        return GitHubProvider(
            client_id=gh_client_id,
            client_secret=gh_client_secret,
            base_url=base_url,
            # La callback URL da registrare nella GitHub OAuth App è:
            #   {BASE_URL}/auth/callback
        )

    # --- Fallback: bearer token statico -----------------------------------
    from fastmcp.server.auth.providers.jwt import StaticTokenVerifier

    mcp_token = os.environ.get("MCP_TOKEN", "dev-change-me-please")
    return StaticTokenVerifier(
        tokens={
            mcp_token: {
                "client_id": "lovable",
                "scopes": ["landing:read", "landing:write"],
            }
        },
        required_scopes=["landing:read"],
    )


mcp = FastMCP("Landing Pages AI", auth=build_auth())


# --- Tool -----------------------------------------------------------------
@mcp.tool
def list_templates() -> list[dict]:
    """Elenca i template di landing page disponibili."""
    return [
        {"id": "saas-hero", "name": "SaaS Hero", "sections": ["hero", "features", "pricing", "cta"]},
        {"id": "lead-gen", "name": "Lead Generation", "sections": ["hero", "benefits", "form"]},
        {"id": "product-launch", "name": "Product Launch", "sections": ["hero", "video", "faq", "cta"]},
    ]


@mcp.tool
def generate_copy(product: str, audience: str, tone: str = "professional") -> dict:
    """
    Genera bozze di testi (copy) per una landing page.

    Args:
        product: cosa stai promuovendo (es. "app di fitness").
        audience: pubblico target (es. "runner principianti").
        tone: stile del testo (es. "professional", "friendly", "bold").
    """
    return {
        "headline": f"{product.capitalize()} pensato per {audience}",
        "subheadline": f"La soluzione {tone} che {audience} stavano aspettando.",
        "cta": "Inizia gratis",
        "tone": tone,
    }


@mcp.tool
def suggest_sections(goal: str) -> list[str]:
    """Suggerisce le sezioni di una landing page in base all'obiettivo (es. 'vendite', 'iscrizioni')."""
    base = ["hero", "social-proof", "cta"]
    if goal.lower() in ("vendite", "sales"):
        return ["hero", "features", "pricing", "testimonials", "faq", "cta"]
    if goal.lower() in ("iscrizioni", "signup", "lead"):
        return ["hero", "benefits", "form", "social-proof"]
    return base


if __name__ == "__main__":
    host = os.environ.get("HOST", "0.0.0.0")
    port = int(os.environ.get("PORT", "8000"))
    mcp.run(transport="http", host=host, port=port)
