from pydantic import BaseModel

class EnergyChildRequest(BaseModel):
    category: str
    weight: float