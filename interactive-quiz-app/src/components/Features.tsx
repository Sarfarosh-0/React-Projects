
import { ListChecks, ChartNoAxesColumnIncreasing, Trophy } from "lucide-react";

const features = [
    {
        icon: ListChecks,
        title: "10 Questions",
        description: "Test your knowledge",
    },
    {
        icon: ChartNoAxesColumnIncreasing,
        title: "Multiple Choice",
        description: "Choose the right answer",
    },
    {
        icon: Trophy,
        title: "Track Results",
        description: "View your performance",
    },
];

export default function Features() {
    return (
        <section className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 px-5 py-4 sm:grid-cols-3">

            {features.map(({ icon: Icon, title, description }) => (
                <div
                    key={title}
                    className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-white py-3 px-3 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <Icon size={23} strokeWidth={2} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <h3 className="text-sm font-bold text-gray-800">
                            {title}
                        </h3>

                        <p className="text-xs text-gray-500">
                            {description}
                        </p>
                    </div>
                </div>
            ))}

        </section>
    );
}
