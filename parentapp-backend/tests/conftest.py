import os
import sys
from pathlib import Path

import pytest
from fastapi.testclient import TestClient
from mongomock_motor import AsyncMongoMockClient

os.environ.setdefault("MONGODB_URI", "mongodb://localhost:27017")
os.environ.setdefault("JWT_SECRET", "test-secret")
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

import main  # noqa: E402
from app import dependencies  # noqa: E402
from app.routers import auth, chat, milestones, mood  # noqa: E402


@pytest.fixture
def client(monkeypatch):
    """API client backed by an in-memory MongoDB, so tests need no real database."""
    fake_db = AsyncMongoMockClient().parentapp
    for module in (dependencies, auth, chat, milestones, mood):
        monkeypatch.setattr(module, "db", fake_db)
    with TestClient(main.app) as c:
        yield c
