export type GenderT = "m" | "f";

export type PatientFormDataT = {
    weight: string;
    height: string;
    gender: GenderT;
    ageCategory: string;
};

export type PatientFormPropsT = {
    onSubmit: (data: {
        weight: string;
        height: string;
        gender: GenderT;
        ageCategory: string;
    }) => void;
    loading?: boolean;
};
