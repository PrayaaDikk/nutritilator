interface ResultProps {
    bmi: number;
    status: string;
    color: string;
}

const colorMap: Record<string, string> = {
    green: "bg-green-800",
    yellow: "bg-yellow-500",
    red: "bg-red-800",
};

export default function BmiResult({ bmi, status, color }: ResultProps) {
    return (
        <div
            className={`rounded-full p-8 text-center mt-6 border-2 mx-auto size-[300px]
            flex flex-col items-center justify-center gap-2 text-white
            ${colorMap[color] || "bg-gray-300"}`}
        >
            <h3 className="text-xl font-bold">Index Massa Tubuh</h3>
            <h2 className="text-5xl font-bold">{bmi}</h2>
            <div className="h-px bg-white/20 w-full"></div>
            <p className="text-sm">{status}</p>
        </div>
    );
}
