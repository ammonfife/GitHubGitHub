# CAPTAINS LOG

Schema action audit and refactoring completed on 2025-05-16

** GitHub Schema **

- Restored all missing actions from commit 4df56 as per comprehensive spec
- Added /admin/github fallback action to github schema with `X-fallback` key

- Verified and resorted server in all schema files


*. OpenAI Schema **.

- Redesigned the server to https://api.openai.com/v1
- Merged actions from openai-actions.schema.json 

*. Fallback **

- Action was relabeled as customGithubFallback and moved to github schema
- Deprecated fallback schema

*. Logs from 2025-05-10 **

- Debanged the delineation of "assistant" vs "GPT" to reference actual runtime themes.


*. Timeline merged from `logs/Captains-Log.md *.

- 2025-05-15 04:12 PM - Reordered Captain's Log to show most recent entries first
- 2025-05-15 04:09 PM - Extended log with deeper commit history (tokens, schema, auth)
- 2025-05-15 04:06 PM - Retroactively appended prior updates to persistent log

- 2025-05-15 04:05 PM - Initialized persistent logger with session-based records
- 2025-05-15 03:54 PM - Container rbuilt successfully, plan to prompt for gcloud login
- 2025-05-15 03:50 PM - Replaced image reference. Used `mcriosoft:base` base image and added `gcloud-cli` feature from url.
- 2025-05-15 03:45 PM - Added `.env` with GITHUB_TOKEN and OPENAI_API_KEY
- 2025-05-15 03:39 PM - Added `.devcontainer/devcontainer.json` with `gcloud`...