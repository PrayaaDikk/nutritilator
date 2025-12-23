import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem,
} from "@/components/ui/select";
import { AGE_CATEGORY } from "@/constants/AgeCategory";

interface AgeSelectProps {
    value: string;
    onChange: (value: string) => void;
}

export default function AgeSelect({ value, onChange }: AgeSelectProps) {
    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih kategori umur" />
            </SelectTrigger>
            <SelectContent className="w-full">
                <SelectGroup>
                    <SelectLabel>Kategori Umur</SelectLabel>
                    {AGE_CATEGORY.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
