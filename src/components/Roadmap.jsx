const Roadmap = () => {
    const items = [
        {
            quarter: "Q4 2025",
            title: "IDE Extensions",
            description: "Native plugins for VS Code, JetBrains, and Sublime Text to catch bugs as you type.",
            status: "In Progress",
            color: "text-loom-green-500 border-loom-green-500 bg-loom-green-500/10"
        },
        {
            quarter: "Q1 2026",
            title: "Custom Rule Builder",
            description: "Define your own architectural rules and coding standards with a simple visual editor.",
            status: "Planned",
            color: "text-blue-400 border-blue-400 bg-blue-400/10"
        },
        {
            quarter: "Q2 2026",
            title: "Team Analytics",
            description: "Deep insights into your team's code quality trends, velocity, and technical debt.",
            status: "Planned",
            color: "text-purple-400 border-purple-400 bg-purple-400/10"
        },
        {
            quarter: "Q3 2026",
            title: "Auto-Refactoring",
            description: "One-click application of complex refactoring patterns across your entire codebase.",
            status: "Research",
            color: "text-orange-400 border-orange-400 bg-orange-400/10"
        }
    ];

    return (
        <section className="py-24 bg-loom-black-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-loom-gray-100 mb-4">
                        The Future of <span className="text-loom-green-500">Loomix</span>
                    </h2>
                    <p className="text-loom-gray-400 max-w-2xl mx-auto">
                        We're just getting started. Here's what we're building next to make your code safer and cleaner.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="relative p-6 rounded-2xl bg-loom-black-800 border border-loom-gray-800 hover:border-loom-gray-600 transition-all duration-300 group"
                        >
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 border ${item.color}`}>
                                {item.status}
                            </div>

                            <div className="text-sm font-mono text-loom-gray-500 mb-2">{item.quarter}</div>
                            <h3 className="text-xl font-bold text-loom-gray-100 mb-3 group-hover:text-loom-green-500 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-loom-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>

                            {/* Connector Line (Visual only) */}
                            {index !== items.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-loom-gray-800 z-0"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
