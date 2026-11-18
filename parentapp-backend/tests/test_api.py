def test_health(client):
    r = client.get("/api/health")
    assert r.status_code == 200
    assert r.json() == {"status": "ok"}


def test_register_login_and_me(client):
    creds = {"email": "Parent@Example.com", "password": "s3cret-pass"}

    r = client.post("/api/auth/register", json=creds)
    assert r.status_code == 200
    assert r.json()["token"]

    # Same email (different case) cannot register twice
    assert client.post("/api/auth/register", json=creds).status_code == 400

    r = client.post("/api/auth/login", json=creds)
    assert r.status_code == 200
    token = r.json()["token"]

    r = client.get("/api/auth/me", headers={"Authorization": f"Bearer {token}"})
    assert r.status_code == 200
    assert r.json()["email"] == "parent@example.com"


def test_wrong_password_is_rejected(client):
    client.post("/api/auth/register", json={"email": "a@b.com", "password": "right"})
    r = client.post("/api/auth/login", json={"email": "a@b.com", "password": "wrong"})
    assert r.status_code == 401


def test_protected_routes_need_login(client):
    assert client.get("/api/auth/me").status_code == 401
    assert client.get("/api/chats").status_code == 401


def test_chat_history_is_saved_per_user(client):
    token = client.post("/api/auth/register", json={"email": "c@d.com", "password": "pw"}).json()["token"]
    headers = {"Authorization": f"Bearer {token}"}
    chat = {"id": "chat-1", "title": "Sleep", "topic": None, "messages": [], "updatedAt": 1, "createdAt": 1}

    assert client.post("/api/chats", json=chat, headers=headers).status_code == 200
    saved = client.get("/api/chats", headers=headers).json()
    assert [c["id"] for c in saved] == ["chat-1"]

    other = client.post("/api/auth/register", json={"email": "e@f.com", "password": "pw"}).json()["token"]
    assert client.get("/api/chats", headers={"Authorization": f"Bearer {other}"}).json() == []
