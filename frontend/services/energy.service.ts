import { EnergyResultDataT } from "@/types/energy.types";
import { PatientFormDataT } from "@/types/patient.types";

export async function calculateEnergy(
    data: PatientFormDataT
): Promise<EnergyResultDataT> {
    const res = await fetch("http://localhost:8000/energy/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            weight: parseFloat(data.weight),
            category: data.ageCategory,
        }),
    });

    if (!res.ok) {
        throw new Error("Failed to calculate BMI");
    }

    return res.json();
}
