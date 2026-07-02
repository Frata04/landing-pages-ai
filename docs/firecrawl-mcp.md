# Firecrawl MCP per Claude Code

Questo repo include il server MCP di [Firecrawl](https://github.com/firecrawl/firecrawl)
configurato in [`.mcp.json`](../.mcp.json). Una volta attivo, Claude Code può usare gli
strumenti di scraping e crawling di Firecrawl (`scrape`, `crawl`, `map`, `search`, ecc.)
direttamente durante le sessioni.

## Attivazione

1. **Ottieni una API key** da https://www.firecrawl.dev (piano gratuito disponibile).
   In alternativa puoi usare un'istanza self-hosted (vedi sotto).

2. **Imposta la variabile d'ambiente** prima di avviare Claude Code:

   ```bash
   export FIRECRAWL_API_KEY="fc-la-tua-chiave"
   ```

   Su Claude Code sul web, aggiungi `FIRECRAWL_API_KEY` tra le variabili
   d'ambiente dell'environment.

3. **Riavvia Claude Code** nella cartella del progetto. Alla prima esecuzione
   verrà chiesto di approvare il server MCP di progetto; conferma con `y`.
   Verifica lo stato con il comando `/mcp`.

Il server viene eseguito via `npx -y firecrawl-mcp`, quindi non serve
installare nulla globalmente: npx scarica il pacchetto al primo avvio.

## Self-hosting (opzionale)

Se usi un'istanza Firecrawl self-hosted, aggiungi in `.mcp.json` (dentro `env`):

```json
"FIRECRAWL_API_URL": "https://firecrawl.tuo-dominio.com"
```

Con un endpoint self-hosted la `FIRECRAWL_API_KEY` può non essere richiesta.

## Riferimenti

- Repository: https://github.com/firecrawl/firecrawl
- MCP server: https://github.com/firecrawl/firecrawl-mcp-server
