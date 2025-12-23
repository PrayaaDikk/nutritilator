class Fluid:
    def __init__(self, weight: float):
        self.weight = weight

    def recommended_intake(self) -> float:
        if self.weight <= 0:
            raise ValueError("Weight must be a positive number.")
        elif self.weight <= 10:
            return 100 * self.weight
        elif 10 < self.weight <= 20:
            return 1000 + (50 + self.weight)
        else:
            return 1500 + (20 * (self.weight - 20))