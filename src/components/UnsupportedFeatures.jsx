const UnsupportedFeatures = () => {
    const deprecatedItems = [
        {
            title: "Subversion (SVN)",
            reason: "Replaced by Git-only workflow",
            date: "Sunset: Dec 2024",
            icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        },
        {
            title: "XML Config",
            reason: "Migrated to YAML/JSON",
            date: "Sunset: Jan 2025",
            icon: <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        },
        {
            title: "Legacy API v1",
            reason: "Security improvements in v2",
            date: "Sunset: Mar 2025",
            icon: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
        },
        {
            title: "32-bit Systems",
            reason: "Performance optimization",
            date: "Sunset: Jun 2025",
            icon: <path d="M22 6h-6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H2v15h20V6zm-8 0h-4V4h4v2z" />
        }
    ];

    return (
        <section className="py-16 bg-loom-black-900 border-t border-loom-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-2xl font-bold text-loom-gray-500 mb-2">
                            Deprecated Features
                        </h2>
                        <p className="text-loom-gray-600 text-sm">
                            Technologies we've moved away from to ensure maximum performance and security.
                        </p>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-loom-black-800 border border-loom-gray-800 text-xs font-mono text-loom-gray-500">
                        Legacy Archive
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {deprecatedItems.map((item, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-xl bg-loom-black-900 border border-loom-gray-800/50 hover:border-red-900/30 transition-colors duration-300 opacity-60 hover:opacity-100"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-10 h-10 rounded-lg bg-loom-black-800 flex items-center justify-center text-loom-gray-600 group-hover:text-red-900/50 transition-colors">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        {item.icon}
                                    </svg>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-red-900/40 border border-red-900/20 px-2 py-1 rounded">
                                    Sunset
                                </span>
                            </div>

                            <h3 className="text-lg font-semibold text-loom-gray-400 group-hover:text-loom-gray-300 line-through decoration-red-900/50 decoration-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-loom-gray-600 mt-2 mb-3">
                                {item.reason}
                            </p>
                            <div className="text-xs font-mono text-loom-gray-700">
                                {item.date}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UnsupportedFeatures;
