# BridgeTech Manufacturing Orchestration Platform v3.1

AI-powered manufacturing order orchestration — single file React + Node.js.

## What's in v3.1
- Live schema submission: B2B/B2P/Dealer submit real schemas → Admin sees LIVE SUBMISSION in Schema Bridge
- Token Management (Admin): rotate / revoke API keys per vendor
- My API Token (channel logins): view live key, copy, security checklist
- Real-time sync: channel pages auto-update within 1.5s when admin bridges or rotates token
- AI Auth Analyzer: auto-detects Bearer / API Key / OAuth 2.0 / Basic from any pasted schema

## Roles
| Role | Modules |
|------|---------|
| Admin | Dashboard · Catalog · Customer Registry · API Monitor · Order Listener · AI Routing · OMS Registry · Schema Bridge · Token Management · Churn Signals · Intent Monitor · Support Agent |
| B2B Buyer | Dashboard · Catalog · Orders · Tracking · API Setup · My API Token |
| Dealer | Dashboard · Catalog · Replenishment · Tracking · API Setup · My API Token |
| B2P Portal | Dashboard · Catalog Sync · Marketplace Orders · API Setup · My API Token |

## Setup

```bash
git clone https://github.com/YOUR_USERNAME/bridgetech-agentic-platform.git
cd bridgetech-agentic-platform
npm install
npm start
# Runs on http://localhost:3000
```

## Update existing server

```bash
# If using Git
cd bridgetech-agentic-platform
git pull
pm2 restart bridgetech

# If copying files manually — only index.html changes between versions
cp index.html /path/to/app/public/index.html
pm2 restart bridgetech
```

## PM2 (keep running)

```bash
npm install -g pm2
pm2 start server.js --name bridgetech
pm2 save && pm2 startup
```

## Files
```
public/index.html    ← entire platform (~221KB)
server.js            ← Express static server
package.json         ← express dependency
.gitignore
README.md
```

## AI features
Paste your Anthropic API key (sk-ant-...) in the topbar to activate:
- AI Parts Advisor · AI Schema Bridge Agent · AI Routing · AI Support Agent

© 2026 Bridge Technology Solutions Inc.
