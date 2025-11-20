const Testimonials = () => {
    const testimonials = [
        {
            quote: "Loomix caught a critical race condition in our payment logic that three senior engineers missed. It paid for itself in day one.",
            author: "Sarah Chen",
            role: "CTO at FinTech Flow",
            avatar: "SC"
        },
        {
            quote: "The integration with GitHub is seamless. It feels like having an extra team member who never sleeps and knows every security vulnerability.",
            author: "Marcus Rodriguez",
            role: "Lead Dev at CloudScale",
            avatar: "MR"
        },
        {
            quote: "Finally, a code review tool that understands context. The AI suggestions are actually useful, not just linting noise.",
            author: "Emily Watson",
            role: "VP of Engineering at Nexus",
            avatar: "EW"
        }
    ];

    return (
        <section className="py-24 bg-loom-black-800 border-y border-loom-gray-800 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-loom-gray-100 mb-4">
                        Trusted by <span className="text-loom-green-500">Top Teams</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-loom-black-900 border border-loom-gray-800 relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-8 text-loom-green-900/40">
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
                            </div>

                            <p className="text-loom-gray-300 italic mb-8 relative z-10 leading-relaxed">
                                "{item.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-loom-green-500 flex items-center justify-center text-loom-black-900 font-bold text-sm">
                                    {item.avatar}
                                </div>
                                <div>
                                    <div className="text-loom-gray-100 font-semibold">{item.author}</div>
                                    <div className="text-loom-green-500 text-xs">{item.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
