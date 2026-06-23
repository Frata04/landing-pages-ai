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


mcp = FastMCP("VSL Script AI", auth=build_auth())


# --- Tool VSL -------------------------------------------------------------
# I tool generano gli script chiamando Claude (vedi vsl.py). Richiedono
# ANTHROPIC_API_KEY impostata nell'ambiente del server.
import vsl  # noqa: E402


@mcp.tool
def genera_vsl_script(
    prodotto: str,
    pubblico: str,
    problema: str = "",
    offerta: str = "",
    durata: str = "medio",
    tono: str = "persuasivo",
) -> str:
    """
    Genera uno script VSL (Video Sales Letter) completo per un prodotto ecommerce.

    Args:
        prodotto: cosa stai vendendo (es. "crema viso anti-età").
        pubblico: a chi ti rivolgi (es. "donne 35-55 attente alla pelle").
        problema: il problema/dolore principale da agitare (opzionale).
        offerta: dettagli di offerta, bonus, garanzia, prezzo (opzionale).
        durata: "breve" (~60s), "medio" (~2-3min) o "lungo" (~5min+).
        tono: stile desiderato (es. "persuasivo", "amichevole", "diretto").
    """
    return vsl.genera_vsl_script(prodotto, pubblico, problema, offerta, durata, tono)


@mcp.tool
def genera_hook(prodotto: str, pubblico: str, n: int = 5) -> str:
    """Genera n hook (aperture) alternativi per una VSL."""
    return vsl.genera_hook(prodotto, pubblico, n)


@mcp.tool
def migliora_script(script: str, obiettivo: str = "aumentare le conversioni") -> str:
    """Migliora/riscrive uno script VSL esistente verso un obiettivo."""
    return vsl.migliora_script(script, obiettivo)


if __name__ == "__main__":
    host = os.environ.get("HOST", "0.0.0.0")
    port = int(os.environ.get("PORT", "8000"))
    mcp.run(transport="http", host=host, port=port)
