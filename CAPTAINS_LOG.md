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
