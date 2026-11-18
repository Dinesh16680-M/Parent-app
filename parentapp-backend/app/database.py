import certifi
from motor.motor_asyncio import AsyncIOMotorClient
from .config import MONGODB_URI

# Atlas (mongodb+srv) needs TLS with a trusted CA bundle; a local/Docker MongoDB does not.
_tls_kwargs = {"tlsCAFile": certifi.where()} if MONGODB_URI.startswith("mongodb+srv") or "tls=true" in MONGODB_URI else {}

mongo_client = AsyncIOMotorClient(MONGODB_URI, **_tls_kwargs)
db = mongo_client.parentapp
