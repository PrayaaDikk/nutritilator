"use client";
import BmiResult from "@/components/bmi/BmiResult";
import BmiSection from "@/components/bmi/BmiSection";
import PatientForm from "@/components/PatientForm";
import { usePatientCalculation } from "@/hooks/usePatientCalculation";

export default function Home() {
    const {
        calculateAll,
        bmiResult,
        fluidResult,
        energyResult,
        loading,
        error,
    } = usePatientCalculation();

    return (
        <>
            <header className="p-6 bg-primary">
                <h1 className="text-3xl font-bold text-center text-white">
                    Nutritilator
                </h1>
            </header>

            <div className="p-6">
                <PatientForm onSubmit={calculateAll} loading={loading} />

                {bmiResult ? <BmiSection result={bmiResult} /> : ""}
                <div className="space-y-1 mt-6">
                    {energyResult && (
                        <h3 className="">
                            Kebutuhan Energi Pasien:{" "}
                            {energyResult.energy_requirement_kcal} kkal
                        </h3>
                    )}
                    {fluidResult && (
                        <h3 className="">
                            Kebutuhan Cairan Pasien: {fluidResult.fluid_intake}{" "}
                            ml
                        </h3>
                    )}
                </div>
            </div>
        </>
    );
}
