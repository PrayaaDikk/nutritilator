class BMI:
    def __init__(self, weight: float, height: float, gender: str):
        self.weight = weight
        self.height = height
        self.gender = gender
        self.bmi = self._calculate_bmi()
        self.bmi_status = self._bmi_status()
    
    def _calculate_bmi(self) -> float:
        height_in_meters = self.height / 100
        result = self.weight / (height_in_meters ** 2)
        return round(result, 2)
    
    def _bmi_status(self) -> str:
        if self.bmi < 17:
            return ["Sangat Kurus", "red"]
        elif 17 <= self.bmi < 18.5:
            return ["Kurus", "yello"]
        elif 18.5 <= self.bmi <= 25:
            return ["Normal", "green"]
        elif 25 < self.bmi <= 27:
            return ["Gemuk (Overweight)", "yellow"]
        else:
            return ["Obesitas", "red"]