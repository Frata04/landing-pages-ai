"""
FastMCP server per landing-pages-ai.

Espone alcuni tool via Streamable HTTP, protetti da un bearer token statico,
pronti per essere collegati a Lovable come "custom chat connector" (MCP server).

Avvio locale:
    python server.py

Endpoint MCP:  http://<host>:<port>/mcp
"""

import os

from fastmcp import FastMCP
from fastmcp.server.auth.providers.jwt import StaticTokenVerifier

# --- Autenticazione -------------------------------------------------------
# Lovable richiede (consigliato) un'autenticazione per i server MCP remoti.
# Usiamo un bearer token statico: lo stesso valore va inserito in Lovable.
# Imposta MCP_TOKEN come variabile d'ambiente in produzione.
MCP_TOKEN = os.environ.get("MCP_TOKEN", "dev-change-me-please")

verifier = StaticTokenVerifier(
    tokens={
        MCP_TOKEN: {
            "client_id": "lovable",
            "scopes": ["landing:read", "landing:write"],
        }
    },
    required_scopes=["landing:read"],
)

mcp = FastMCP("Landing Pages AI", auth=verifier)


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
