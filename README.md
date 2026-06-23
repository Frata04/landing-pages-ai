# landing-pages-ai

Landing pages ad alta conversione per ecommerce.

Include un server **MCP** (Model Context Protocol) costruito con
[FastMCP](https://github.com/PrefectHQ/fastmcp), pronto da collegare a **Lovable**
come *chat connector* (custom MCP server).

Espone tool a tema landing page (`list_templates`, `generate_copy`, `suggest_sections`)
che diventano contesto per l'agente di Lovable.

## 1. Installazione

```bash
pip install -r requirements.txt          # oppure: uv pip install -r requirements.txt
cp .env.example .env                      # imposta un MCP_TOKEN lungo e casuale
```

## 2. Avvio locale

```bash
python server.py
```

L'endpoint MCP sarà su `http://localhost:8000/mcp`.

## 3. Esporre il server pubblicamente

Lovable è un servizio cloud: deve poter **raggiungere il server via HTTPS**, quindi
`localhost` non basta. Scegli una delle opzioni:

- **Tunnel rapido (test):** `ngrok http 8000` → usa l'URL `https://...ngrok.../mcp`.
- **Hosting gestito (consigliato):** [Prefect Horizon](https://gofastmcp.com/deployment/prefect-horizon),
  della stessa squadra di FastMCP, con tier gratuito e OAuth integrato.
- **Cloud generico:** Cloud Run / ECS / una VM dietro HTTPS.

## 4. Collegare a Lovable

1. In Lovable apri **Integrations → Chat connectors → Add custom MCP server**.
2. **Server URL:** l'URL pubblico dell'endpoint, es. `https://<tuo-dominio>/mcp`.
3. **Authentication:** scegli *Bearer token / API key* e incolla il valore di `MCP_TOKEN`.
4. Salva: il connector compare tra i chat connectors e i tool diventano contesto per l'agente.

> Lovable supporta OAuth (default), bearer token / API key, oppure nessuna auth.
> Questo server usa un **bearer token statico** (`StaticTokenVerifier`): semplice e
> compatibile con l'opzione "Bearer token" di Lovable.

## Sicurezza

- Usa sempre **HTTPS** in produzione (FastMCP non termina TLS da solo: mettilo dietro
  un reverse proxy o una piattaforma gestita).
- Genera un `MCP_TOKEN` lungo e casuale; non committare mai il file `.env`.
