import { BmiResultDataT } from "@/types/bmi.types";
import BmiResult from "./BmiResult";

export default function BmiSection({ result }: { result: BmiResultDataT }) {
    return (
        <div className="mt-6">
            <h2 className="text-lg font-medium mb-2 text-center">
                Index Massa Tubuh (IMT)
            </h2>
            <BmiResult
                bmi={result.bmi}
                status={result.bmi_status}
                color={result.bmi_color}
            />
        </div>
    );
}
