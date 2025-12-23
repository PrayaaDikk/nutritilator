import { FluidResultDataT } from "@/types/fluid.types";
import { PatientFormDataT } from "@/types/patient.types";

export async function calculateFluid(
    data: PatientFormDataT
): Promise<FluidResultDataT> {
    const res = await fetch("http://localhost:8000/fluid/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            weight: parseFloat(data.weight),
        }),
    });

    if (!res.ok) {
        throw new Error("Failed to calculate BMI");
    }

    return res.json();
}
