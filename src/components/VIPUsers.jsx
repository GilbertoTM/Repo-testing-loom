const VIPUsers = () => {
    const vips = [
        { name: "TechCorp", color: "hover:text-blue-400" },
        { name: "InnovateLabs", color: "hover:text-purple-400" },
        { name: "FutureScale", color: "hover:text-green-400" },
        { name: "DevDynamics", color: "hover:text-orange-400" },
        { name: "CodeStream", color: "hover:text-red-400" },
        { name: "NextGen", color: "hover:text-cyan-400" }
    ];

    return (
        <section className="py-12 bg-loom-black-900 border-b border-loom-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-loom-gray-500 uppercase tracking-widest mb-8">
                    Powering the world's most innovative <span className="text-loom-green-500">VIP Teams</span>
                </p>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity duration-500">
                    {vips.map((vip, index) => (
                        <div
                            key={index}
                            className={`text-2xl md:text-3xl font-bold text-loom-gray-600 transition-colors duration-300 cursor-default ${vip.color}`}
                        >
                            {vip.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VIPUsers;
