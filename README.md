# GitHubGitHub 

Repository for GitHub related tools such as utilities, scripts, and integrations.

This repo serves as the hub for tools used with Genomic Digital tooling and automation.

## Repos List

See REPO_LIST.md for the live JSON-based list of all repositories related to github that are useful to Ben.

## Schema & Instructions

- `GPT_INSTRUCTIONS.md`: Contains the custom instructions for Ben's GIT Assistant, including style preferences, action limits and behavior.
  - Useful for any code maintenance or ai-agent-connected tasks by benfife
- Aides in designing clean, readable tools with Tailwind styles in React

- `GPT_ACTIONS_SCHEMA.json`: The complete openapi 3.1 schema used by the assistant to operate via the github.com API. It enables listing repo/org information, getting updates or content, and more.

## Security

The schema implements `TokenAuth authentication`, where the token must be set via the @http header to use the API correctly.
