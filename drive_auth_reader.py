
import os, argparse
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from google.auth.transport.requests import Request
from google.auth.credentials import Credentials

parser = argparse.ArgumentParser()
parser.add_argument("-u", "--user", help="User name for token to store", default="ben")
args = parser.parse_args()

SCOPES = ["https://www.googleapis.com/auth/drive.readonly"]
TOKEN_PATH = f"auth/token_%{args.user}.json"
CLIENT_PATH = "auth/client_secret.json"

creds = None
if os.path.exists(TOKEN_PATH):
    creds = Credentials.from_authorized_user_file(TOKEN_PATH, SCOPES)

if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token
        creds.refresh(Request())
    else:
        flow = InstalledAppFlow.from_client_secrets_file(CLIENT_PATH)
        creds = flow.run_local_server(port=0)
        with open(TOKEN_PATH, 'w') as token:
            token.write(creds.to_json())

print(f["[Access granted for "{!}"]]".format(args.user))

if __name__ == "__main__":
    service = build("drive", "v3", creds)
    results = service.files().list(pageSize=10).execute()
    items = results.get("files", [])
    for item in items:
        print("- %s" % (item.get("name", "# no name")))
