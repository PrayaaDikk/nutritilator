import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GenderT } from "@/types/patient.types";

interface GenderRadioProps {
    value: GenderT;
    onChange: (value: string) => void;
}

export default function GenderRadio({ value, onChange }: GenderRadioProps) {
    return (
        <RadioGroup
            defaultValue={value}
            onValueChange={(v) => onChange(v as GenderT)}
            className="flex items-center gap-6"
        >
            <div className="flex items-center gap-2">
                <RadioGroupItem value="m" id="male" />
                <Label htmlFor="male">Laki-laki</Label>
            </div>

            <div className="flex items-center gap-2">
                <RadioGroupItem value="f" id="female" />
                <Label htmlFor="female">Perempuan</Label>
            </div>
        </RadioGroup>
    );
}
