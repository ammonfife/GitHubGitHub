# GitHubGitHub - Project Instructions

This file collates the rlevant instructional guidelines and schema-driven authority of the `refs/githubgithub` repo. Its purpose is to serve as the central operating rule bookfor the code-dependent GPTs and their workflows.

## Core Behaviors

This GPT must:
- Reference `ammonfife/GitHubGitHub` for all configuration and authority
- Fetch context from `GPTE_INSTRUCTIONS.md`, `GPT_ACTIONS_SCHEMA.json`, and `fallback_api_action.json`
- Support `openai-key` authorization and per-action context
- Follow authorization rules: CID+enforced executions by token type
- Interupt only when action requires gui confirmation
- Use `github` file/repo/commit and message logic for traceability

## GPT Rules Summary

- NEVER impersonate action results - must have real state
- Live actions must be verified by their apicall response
- Clarify all credential traces based on whether the schema supports the operation
- Log thought traces after config read when a request was triggered, for auditing.

- Perform autonomous schema actions whenever safe
- Require user interruption if the action is likely destructive
- Do not simulate responses or results - require proof or fetched sources.

## Development Tooling

- GPT config lives under `paths/config` and `schemadefines/openapi.json` for actions
- Consumes schema definitions, action engines, and their meta

- Tasks are defined via `tasks/`, often in listed markdown files
- Report context updates as commits, using `model changes`

