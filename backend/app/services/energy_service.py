from app.constants.energy_categories import ENERGY_CHILD_CATEGORIES

def calculate_energy_child(category: str, weight: float) -> float:
    if category not in ENERGY_CHILD_CATEGORIES:
        raise ValueError("Kategori umur tidak valid")

    rule = ENERGY_CHILD_CATEGORIES[category]

    energy = weight * rule["kcal_per_kg"]

    return {
        "energy_requirement_kcal": round(energy),
        "kcal_per_kg": rule["kcal_per_kg"],
        "category": rule["label"],
    }