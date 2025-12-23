import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface AntropometryProps {
    weight: string;
    height: string;
    onChange: (field: "weight" | "height", value: string) => void;
}

export default function Antropometry({
    weight,
    height,
    onChange,
}: AntropometryProps) {
    return (
        <div className="flex gap-4">
            <div className="space-y-1 w-full">
                <Label htmlFor="weight" className="text-xs text-black/50">
                    Berat (kg)
                </Label>
                <Input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => onChange("weight", e.target.value)}
                    placeholder="e.g., 50"
                    className="focus-visible:ring-primary/60 focus-visible:border-primary"
                />
            </div>

            <div className="space-y-1 w-full">
                <Label htmlFor="height" className="text-xs text-black/50">
                    Tinggi (cm)
                </Label>
                <Input
                    id="height"
                    type="number"
                    value={height}
                    onChange={(e) => onChange("height", e.target.value)}
                    placeholder="e.g., 160"
                    className="focus-visible:ring-primary/60 focus-visible:border-primary"
                />
            </div>
        </div>
    );
}
