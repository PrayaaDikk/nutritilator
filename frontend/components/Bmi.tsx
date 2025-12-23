"use client";
import PatientForm from "@/components/PatientForm";
import { BmiResultDataT } from "@/types/bmi.types";
import { useState } from "react";
import BmiSection from "./bmi/BmiSection";

export default function Bmi() {
    const [bmiResult, setBmiResult] = useState<BmiResultDataT | null>(null);

    return (
        <section className="p-6">
            <PatientForm onResult={setBmiResult} />

            {bmiResult && <BmiSection result={bmiResult} />}
        </section>
    );
}
