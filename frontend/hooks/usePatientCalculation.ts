"use client";
import { calculateBmi } from "@/services/bmi.service";
import { calculateEnergy } from "@/services/energy.service";
import { calculateFluid } from "@/services/fluid.service";
import { BmiResultDataT } from "@/types/bmi.types";
import { EnergyResultDataT } from "@/types/energy.types";
import { FluidResultDataT } from "@/types/fluid.types";
import { PatientFormDataT } from "@/types/patient.types";
import { useState } from "react";

export function usePatientCalculation() {
    const [bmiResult, setBmiResult] = useState<BmiResultDataT | null>(null);
    const [fluidResult, setFluidResult] = useState<FluidResultDataT | null>(
        null
    );
    const [energyResult, setenergyResult] = useState<EnergyResultDataT | null>(
        null
    );
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const calculateAll = async (formData: PatientFormDataT) => {
        try {
            setLoading(true);
            setError(null);

            const [bmi, fluid, energy] = await Promise.all([
                calculateBmi(formData),
                calculateFluid(formData),
                calculateEnergy(formData),
            ]);

            setBmiResult(bmi);
            setFluidResult(fluid);
            setenergyResult(energy);
        } catch (error) {
            console.error(error);
            setError("Terjadi kesalahan saat perhitungan");
        } finally {
            setLoading(false);
        }
    };
    return {
        calculateAll,
        bmiResult,
        fluidResult,
        energyResult,
        loading,
        error,
    };
}
