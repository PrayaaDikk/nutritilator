import { FluidResultDataT } from "@/types/fluid.types";
import { PatientFormDataT } from "@/types/patient.types";

export async function calculateFluid(
    data: PatientFormDataT
): Promise<FluidResultDataT> {
    const res = await fetch(
        "http://api-nutritilator.vercel.app/fluid/calculate",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                weight: parseFloat(data.weight),
            }),
        }
    );

    if (!res.ok) {
        throw new Error("Failed to calculate BMI");
    }

    return res.json();
}
