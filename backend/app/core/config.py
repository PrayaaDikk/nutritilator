import os
from typing import List

def get_env(key: str, default: str = "") -> str:
    return os.environ.get(key, default)

CORS_ORIGINS: List[str] = [
    o.strip()
    for o in get_env("CORS_ORIGINS").split(",")
    if o.strip()
]

ENVIRONMENT = get_env("ENVIRONMENT", "development")
