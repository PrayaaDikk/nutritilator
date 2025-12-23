from fastapi import APIRouter
from pydantic import BaseModel
from app.services.bmi_services import BMI

router = APIRouter(prefix="/bmi")

class BMIRequest(BaseModel):
    weight: float
    height: float
    gender: str

@router.post("/calculate")
def calculate_bmi(data: BMIRequest):
    bmi = BMI(data.weight, data.height, data.gender)
    return {
        "message": "success",
        "bmi": bmi.bmi,
        "bmi_status": bmi.bmi_status[0],
        "bmi_color": bmi.bmi_status[1]
    }
