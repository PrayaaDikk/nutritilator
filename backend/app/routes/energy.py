from fastapi import APIRouter

from app.services.energy_service import calculate_energy_child
from app.models.energy_model import EnergyChildRequest

router = APIRouter(prefix="/energy")

@router.post("/calculate")
def calculate_energy(data: EnergyChildRequest):
    return calculate_energy_child(data.category, data.weight)