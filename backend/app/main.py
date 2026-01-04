from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
from app.core.cors import setup_cors
from app.core.config import ENVIRONMENT
from app.routes import bmi, fluid, energy

app = FastAPI()

setup_cors(app)

app.include_router(bmi.router)
app.include_router(fluid.router)
app.include_router(energy.router)

@app.get("/", tags=["Health"])
async def health():
    return {
        "status": "ok",
        "environment": ENVIRONMENT,
    }