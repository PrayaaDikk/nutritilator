from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response

from app.routes import bmi, fluid, energy

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://nutritilator.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🔥 INI KRUSIAL UNTUK VERCEL
@app.options("/{path:path}")
async def options_handler(path: str, request: Request):
    return Response(
        status_code=200,
        headers={
            "Access-Control-Allow-Origin": "https://nutritilator.vercel.app",
            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "*",
        },
    )

app.include_router(bmi.router)
app.include_router(fluid.router)
app.include_router(energy.router)
