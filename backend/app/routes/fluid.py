from fastapi import APIRouter
from pydantic import BaseModel
from app.services.fluid_service import Fluid

router = APIRouter(prefix="/fluid")

class FluidRequest(BaseModel):
    weight: float

@router.post("/calculate")
def calculate_fluid(data: FluidRequest):
    fluid = Fluid(data.weight)
    return {
        "message": "success",
        "fluid_intake": fluid.recommended_intake()
    }