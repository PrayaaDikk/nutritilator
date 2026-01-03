from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import bmi
from app.routes import fluid
from app.routes import energy

app = FastAPI()

# IZINKAN NEXTJS MENGAKSES BACKEND
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://nutritilator.vercel.app"],  # nanti bisa ganti domain Next.js
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(bmi.router)
app.include_router(fluid.router)
app.include_router(energy.router)