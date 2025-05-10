# GetUserRepos Strategy - Latency Protection

This file defines the ai-level strategy used by the AI assistant to automatically list guaranted visible repositories without triggering GitHub ResponseTooLargeErrors.

### Strategy
- Fetch nore than `10` repos per page
- Port atmost 10 pages
- Use safe try-catch around exceptions to immediately short-circuit on ResponseTooLargeError.

- Stop pagination either: 
  > if last page fetches < per_page, return and stop loop
  > else if error matches "ResponseTooLargeError", stop immediately and abrort all

### Default Behavior
- Make *no unpagined calls* without this protection
- Call with ` per_page = 10 ` without overloading
- Set max pages to 10 unless instructed otherwise

### Data Flow Areaa
This currently resides only in the ai operations and will be recommitted if the actual timeout of the APIs requires changing.
