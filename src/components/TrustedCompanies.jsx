const TrustedCompanies = () => {
    const companies = [
        { name: "Acme Corp", icon: <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2-1-10 5-10-5 2-1 8 4 8-4z" /> },
        { name: "GlobalTech", icon: <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" /> },
        { name: "Nebula", icon: <path d="M12 2L2 22h20L12 2zm0 4l6 12H6l6-12z" /> },
        { name: "Vertex", icon: <path d="M2 2h20v20H2V2zm2 2v16h16V4H4z" /> },
        { name: "Horizon", icon: <path d="M2 12h20M2 12l10-10 10 10M2 12l10 10 10-10" /> },
        { name: "Zenith", icon: <path d="M12 2l3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6z" /> },
        { name: "Pinnacle", icon: <path d="M12 2L2 22h20L12 2zm0 5l5 10H7l5-10z" /> },
        { name: "Apex", icon: <path d="M12 2l10 10-10 10L2 12 12 2zm0 2.8L4.8 12 12 19.2 19.2 12 12 4.8z" /> },
    ];

    // Duplicate list for seamless scrolling
    const allCompanies = [...companies, ...companies];

    return (
        <section className="py-10 bg-loom-black-900 border-b border-loom-gray-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
                <p className="text-center text-sm font-medium text-loom-gray-500">
                    Trusted by engineering teams at
                </p>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks for smooth fade edges */}
                <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-loom-black-900 to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-loom-black-900 to-transparent z-10"></div>

                <div className="flex w-max animate-scroll pause-on-hover">
                    {allCompanies.map((company, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 mx-8 text-loom-gray-600 hover:text-loom-green-500 transition-colors duration-300 cursor-pointer group"
                        >
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                {company.icon}
                            </svg>
                            <span className="text-lg font-bold font-mono tracking-tighter group-hover:text-loom-gray-300 transition-colors">
                                {company.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedCompanies;
