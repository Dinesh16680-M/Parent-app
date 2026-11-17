from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from app.routers import auth, calm, chat, learning, milestones, mood, tips

app = FastAPI(title="Parent App API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"]
    + [u.strip().rstrip("/") for u in os.getenv("FRONTEND_URL", "").split(",") if u.strip()],
    allow_origin_regex=r"https://[a-z0-9-]+\.onrender\.com",
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
def health():
    return {"status": "ok"}


app.include_router(auth.router)
app.include_router(chat.router)
app.include_router(mood.router)
app.include_router(milestones.router)
app.include_router(tips.router)
app.include_router(calm.router)
app.include_router(learning.router)
