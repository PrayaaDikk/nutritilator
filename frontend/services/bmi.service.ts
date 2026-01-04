import { BmiResultDataT } from "@/types/bmi.types";
import { PatientFormDataT } from "@/types/patient.types";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function calculateBmi(
    data: PatientFormDataT
): Promise<BmiResultDataT> {
    const res = await fetch(`${API_URL}/bmi/calculate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            weight: parseFloat(data.weight),
            height: parseFloat(data.height),
            gender: data.gender,
        }),
    });

    if (!res.ok) {
        throw new Error("Failed to calculate BMI");
    }

    return res.json();
}
