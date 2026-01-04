import os
from typing import List

def get_env(key: str, default: str = "") -> str:
    return os.getenv(key, default)

ENVIRONMENT: str = get_env("ENVIRONMENT", "development")

CORS_ORIGINS: List[str] = [
    origin.strip()
    for origin in get_env("CORS_ORIGINS").split(",")
    if origin.strip()
]
