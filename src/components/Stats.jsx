import { useEffect, useState } from 'react';

const statsData = [
    { label: 'Revisiones al día', value: 1245 },
    { label: 'Usuarios activos', value: 876 },
    { label: 'Integraciones', value: 32 },
];

const Stats = () => {
    const [counters, setCounters] = useState(statsData.map(() => 0));

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const steps = 60; // frames
        const increment = statsData.map((s) => s.value / steps);
        let currentStep = 0;
        const interval = setInterval(() => {
            currentStep++;
            setCounters((prev) =>
                prev.map((c, i) => Math.min(c + increment[i], statsData[i].value))
            );
            if (currentStep >= steps) clearInterval(interval);
        }, duration / steps);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="max-w-6xl mx-auto py-20 px-4" id="stats">
            <h2 className="text-4xl font-extrabold text-center text-loom-gray-100 mb-12">
                Estadísticas de Loomix
            </h2>
            <div className="grid gap-8 md:grid-cols-3 text-center">
                {statsData.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-loom-black-800/60 backdrop-blur-md rounded-xl border border-loom-gray-700 p-6 transition-transform hover:scale-105 duration-300"
                    >
                        <p className="text-loom-green-500 text-3xl font-bold mb-2">
                            {Math.floor(counters[idx])}
                        </p>
                        <p className="text-loom-gray-300 text-lg">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
