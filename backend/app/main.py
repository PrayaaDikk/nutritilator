from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import bmi
from app.routes import fluid
from app.routes import energy

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://nutritilator.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(bmi.router)
app.include_router(fluid.router)
app.include_router(energy.router)