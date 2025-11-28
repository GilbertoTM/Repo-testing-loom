const UpcomingFeatures = () => {
    const features = [
        {
            title: "Integración con IDEs",
            eta: "Q4 2025",
            desc: "Extensiones para VS Code y JetBrains que muestran advertencias y sugerencias en tiempo real.",
            status: "En desarrollo",
            color: "text-loom-green-500 bg-loom-green-500/10 border-loom-green-500"
        },
        {
            title: "Exportes a formatos populares",
            eta: "Q1 2026",
            desc: "Genera reportes en PDF, Markdown y JSON para compartir hallazgos con el equipo.",
            status: "Planificado",
            color: "text-blue-400 bg-blue-400/10 border-blue-400"
        },
        {
            title: "Auto-refactorizado",
            eta: "Q2 2026",
            desc: "Aplicación automática de patrones de refactorización seguros en todo el repositorio.",
            status: "Investigación",
            color: "text-orange-400 bg-orange-400/10 border-orange-400"
        },
        {
            title: "Panel de métricas por equipo",
            eta: "Q2 2026",
            desc: "Dashboards con métricas de calidad, deuda técnica y progreso por equipo y proyecto.",
            status: "Planificado",
            color: "text-purple-400 bg-purple-400/10 border-purple-400"
        }
    ];

    return (
        <section className="py-20 bg-loom-black-900 border-t border-loom-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-loom-gray-100 mb-3">Próximas funcionalidades</h2>
                    <p className="text-loom-gray-400 max-w-2xl mx-auto">
                        Características que estamos preparando para mejorar tu flujo de trabajo.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-loom-black-800 border border-loom-gray-800 hover:border-loom-gray-600 transition-all duration-300">
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 border ${f.color}`}>
                                {f.status}
                            </div>

                            <div className="text-sm font-mono text-loom-gray-500 mb-2">{f.eta}</div>
                            <h3 className="text-xl font-bold text-loom-gray-100 mb-2">{f.title}</h3>
                            <p className="text-loom-gray-400 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingFeatures;
