# BridgeTech Manufacturing Orchestration Platform v3.0

A single-file React + Node.js platform demonstrating AI-powered manufacturing order orchestration.

## Architecture
- **Universal Bridge API** — single inbound normalisation layer
- **AI Agent Orchestrator** — Vector + RAG + LLM routing to 3 legacy OMS systems
- **Gen AI Catalog** — product groups + per-customer SKU filtering by customer ID
- **AI Schema Bridge** — upload any API schema, agent maps it automatically
- **Order Listener** — webhook/poll service for 4 marketplace portals

## Roles
| Role | Access |
|------|--------|
| Admin | All 11 modules |
| B2B Buyer | Catalog, Orders, Tracking, API Setup |
| Dealer | Catalog, Replenishment, Tracking, API Setup |
| B2P Portal | Catalog Sync, Marketplace Orders, API Setup |

## Setup

```bash
git clone https://github.com/YOUR_USERNAME/bridgetech-agentic-platform.git
cd bridgetech-agentic-platform
npm install
npm start
```

Opens on http://localhost:3000

## PM2 (keep running after logout)

```bash
npm install -g pm2
pm2 start server.js --name bridgetech
pm2 save
pm2 startup
```

## Files
```
public/
  index.html    ← entire platform (single file, ~188KB)
server.js       ← Express static server (12 lines)
package.json    ← 1 dependency: express
.gitignore
README.md
```

## AI Features
Paste your Anthropic API key (sk-ant-...) into the topbar field to activate:
- AI Parts Advisor (catalog)
- AI Schema Bridge agent
- AI Routing decisions
- AI Support Agent + chat

© 2026 Bridge Technology Solutions Inc.
# bridgetechanalytics
