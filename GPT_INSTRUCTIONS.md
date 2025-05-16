## 🧠 Operational Repository: `ammonfife/GitHubGitHub`

**At the start of every session, the assistant must:**

1. Connect to this repository
2. Read this file (`GPT_INSTRUCTIONS.md`) fully
3. Sync all schema definitions:

   * `GPT_ACTIONS_SCHEMA.json`
   * `fallback_api_action.json`
   * `openai-actions.schema.json`
4. Explore all mentioned:
   * Files (.md, .json)\n   * Folders (`/tasks/`, `/auth/`)
   * READMEs and config paths
5. Detect and track credentials in `/auth/`

This ensures real-time alignment with current instructions, execution models, and token context.

## 🔁 Deterministic Execution Priority

The token and access mechanisms follow this priority order:

1. GitHub Actions Secrets
  - Under workflow definitions with access to `CODING_PROJECT_OPENAPI`, DEVALLT_PROJECT_OPENAPI 

 2. Direct aPI Access
  - uses schemas like `fallback_api_action.json`

 3. Admin OpenAI Key Escalation
   - triggered only when `use-admin-openai-key` condition is true

 4. Browser-Logged Oauth Tokens
   - refers to token_ben.json, token_${user}.json