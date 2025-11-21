const FamousClients = () => {
    const clients = [
        {
            name: "Orbital Aerospace",
            industry: "Space Tech",
            impact: "99.9% Bug Reduction",
            description: "Loomix secures the guidance systems for the next generation of reusable rockets.",
            initials: "OA",
            color: "bg-blue-500"
        },
        {
            name: "Streamline Media",
            industry: "Entertainment",
            impact: "2x Faster Deployments",
            description: "Serving millions of concurrent streams with zero downtime thanks to predictive analysis.",
            initials: "SM",
            color: "bg-red-500"
        },
        {
            name: "Quantum Finance",
            industry: "FinTech",
            impact: "$50M Saved",
            description: "Preventing critical security vulnerabilities in high-frequency trading algorithms.",
            initials: "QF",
            color: "bg-purple-500"
        }
    ];

    return (
        <section className="py-24 bg-loom-black-800 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-loom-gray-100 mb-4">
                        Success Stories from <span className="text-loom-green-500">Industry Leaders</span>
                    </h2>
                    <p className="text-loom-gray-400 max-w-2xl">
                        See how the world's most demanding engineering teams use Loomix to ship faster and safer.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="group relative bg-loom-black-900 rounded-2xl overflow-hidden border border-loom-gray-800 hover:border-loom-gray-600 transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Top Color Bar */}
                            <div className={`h-2 w-full ${client.color}`}></div>

                            <div className="p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <div className={`w-12 h-12 rounded-xl ${client.color} bg-opacity-20 flex items-center justify-center text-lg font-bold text-loom-gray-100`}>
                                        {client.initials}
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-loom-gray-800 text-xs font-medium text-loom-gray-400 border border-loom-gray-700">
                                        {client.industry}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-loom-gray-100 mb-2">{client.name}</h3>
                                <div className="text-loom-green-500 font-mono text-sm font-bold mb-4">{client.impact}</div>

                                <p className="text-loom-gray-400 leading-relaxed">
                                    {client.description}
                                </p>

                                <div className="mt-8 pt-6 border-t border-loom-gray-800 flex items-center gap-2 text-sm font-medium text-loom-gray-300 group-hover:text-loom-green-500 transition-colors cursor-pointer">
                                    Read Case Study
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FamousClients;
