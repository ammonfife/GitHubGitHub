# 😂 GPT Training Failure Log

## Context
- User: Ben Fife (
  @ammonfife )
- Organization: Genomic Digital
- Repo: `ammonfife/GitHubGitHub`
- Date: 2025-05-16


## Description

This training failure records a case where the assistant was unable to parse or validate JSON schema files directly from the repository, causing complete failure of schema mapping.

## Errors

These are example errors and their likely cause: 

- References to unknown components that were not defined, e.g.: 
  - "ListAssistantsResponse" 
  - "CreateAssistantRequest"
  - "ThreadObject"
- Missing refs and property descriptions as expected in schema.
- Not properly defined content schemas blocks where they were expected.

- Loading the file via github.com appeared to stream empty file content for schema resolution.

## Steps to Reproduce

1. Revisit the files encoding, ensuring the JSON content is encoded in base64 before uploading.
 2. Restructure the failed schema file using valid URI refs to actually existing components.
3. Retest with correct syntax properties as per openapi 3.1 spec.

## Schema Used For Reference

- ** Old: https://github.com/ammonfife/GitHubGitHubblob/main/openai-actions.schema.json
- ** Failing: https://github.com/ammonfife/GitHubGitHub/blob/main/openai-actions.schema.json
- ** Success: None (empty refs, empty schema)

## Context

The user requested to stream file contents directly to the conversation, serving as reference from working files. The assistant failed to accommodate the request by cause of empty file content or unresolved schema references.

This script will be used for future training improvements around schema handling and meta integration.