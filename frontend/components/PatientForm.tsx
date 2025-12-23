"use client";
import { useState } from "react";
import AgeSelect from "./form/AgeSelect";
import Antropometry from "./form/Antropometry";
import GenderRadio from "./form/GenderRadio";
import SubmitButton from "./form/SubmitButton";
import { GenderT, PatientFormDataT } from "@/types/patient.types";

interface PatientFormProps {
    onSubmit: (data: PatientFormDataT) => void;
    loading?: boolean;
}

export default function PatientForm({
    onSubmit,
    loading = false,
}: PatientFormProps) {
    const [formData, setFormData] = useState<PatientFormDataT>({
        weight: "",
        height: "",
        gender: "m",
        ageCategory: "",
    });

    const updateField = <K extends keyof PatientFormDataT>(
        field: K,
        value: PatientFormDataT[K]
    ) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.weight || !formData.height) {
            alert("Berat dan tinggi wajib diisi");
            return;
        }

        if (!formData.ageCategory) {
            alert("Kategori umur wajib dipilih");
            return;
        }

        const weight = parseFloat(formData.weight);
        const height = parseFloat(formData.height);

        if (Number.isNaN(weight) || Number.isNaN(height)) {
            alert("Berat dan tinggi harus berupa angka");
            return;
        }

        // ⬅️ boundary selesai di sini
        onSubmit(formData);

        setFormData({
            weight: "",
            height: "",
            gender: "m",
            ageCategory: "",
        });
    };

    return (
        <div>
            <h2 className="text-lg font-medium mb-2">Data Pasien</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <GenderRadio
                    value={formData.gender}
                    onChange={(v) => updateField("gender", v as GenderT)}
                />

                <Antropometry
                    weight={formData.weight}
                    height={formData.height}
                    onChange={(field, value) => updateField(field, value)}
                />

                <AgeSelect
                    value={formData.ageCategory}
                    onChange={(value) => updateField("ageCategory", value)}
                />

                <SubmitButton loading={loading} />
            </form>
        </div>
    );
}
