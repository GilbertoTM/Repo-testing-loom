import { Link } from 'react-router-dom';

const FreeTier = () => {
    return (
        <section className="py-24 bg-loom-black-900 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-loom-green-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-gradient-to-br from-loom-black-800 to-loom-black-900 border border-loom-gray-800 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden group hover:border-loom-green-500/30 transition-colors duration-500">

                    {/* Decorative Code Snippet */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none font-mono text-sm text-loom-green-500 p-4 overflow-hidden select-none">
                        {Array(20).fill("loomix.scan({ mode: 'free' });").map((line, i) => (
                            <div key={i} className="whitespace-nowrap" style={{ transform: `translateX(${i % 2 === 0 ? '-20px' : '20px'})` }}>{line}</div>
                        ))}
                    </div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-loom-green-900/30 border border-loom-green-500/30 text-loom-green-400 text-sm font-bold mb-8 uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-loom-green-500 animate-pulse"></span>
                            Forever Free Tier
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-loom-gray-100 mb-6">
                            Start coding safer, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-loom-green-400 to-loom-green-600">without spending a dime.</span>
                        </h2>

                        <p className="text-xl text-loom-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Perfect for students, open source maintainers, and hobbyists.
                            Get access to our core AI engine and secure your personal projects today.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                to="/signup"
                                className="w-full sm:w-auto px-10 py-4 bg-loom-green-500 hover:bg-loom-green-400 text-loom-black-900 font-bold text-lg rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,255,148,0.3)] hover:shadow-[0_0_40px_rgba(0,255,148,0.5)] hover:-translate-y-1"
                            >
                                Create Free Account
                            </Link>
                            <Link
                                to="/docs"
                                className="w-full sm:w-auto px-10 py-4 bg-loom-black-900 hover:bg-loom-black-800 text-loom-gray-100 font-semibold text-lg rounded-xl border border-loom-gray-700 hover:border-loom-gray-500 transition-all duration-300"
                            >
                                Read Documentation
                            </Link>
                        </div>

                        <p className="mt-8 text-sm text-loom-gray-500">
                            Includes 500 monthly AI scans • Unlimited public repos • Community support
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FreeTier;
