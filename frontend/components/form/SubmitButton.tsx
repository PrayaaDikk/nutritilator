import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
    loading: boolean;
    label?: string;
}

export default function SubmitButton({
    loading,
    label = "Kalkulasi",
}: SubmitButtonProps) {
    return (
        <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Menghitung..." : label}
        </Button>
    );
}
