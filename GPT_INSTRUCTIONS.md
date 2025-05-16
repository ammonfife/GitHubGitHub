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

This is the operational order in which tokens and access mechanisms are checked and executed:

 1. `GitHub Actions Secrets`
   - Primary for schedules and webhook workflows
   - Example: `CODING_PROJECT_OPENAPI`, DEVALLT_PROJECT_OPENAPI`

 2. Direct `API Access`
   - Structured execution via json schemas like `fallback_api_action.json`

 3. Admin `API Key Escalation`
   - Special uses opernai-actions.schema.json
   - Invoked only if `use-admin-openai-key` condition is true

 4. Browser-Logged Oauth Tokens from /auth/
   - Executes as a last resort, used for session-specific tasks and mmultiuser activity
