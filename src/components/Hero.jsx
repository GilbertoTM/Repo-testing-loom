import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-loom-green-500/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-loom-green-900/30 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-loom-green-900/30 border border-loom-green-500/30 text-loom-green-400 text-sm font-medium mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-loom-green-500 animate-pulse"></span>
                        v1.0 is now live
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                        Weave Quality into <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-loom-green-400 to-loom-green-600 drop-shadow-[0_0_25px_rgba(0,255,148,0.3)]">
                            Every Line of Code
                        </span>
                    </h1>

                    <p className="text-lg text-loom-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Automate your testing workflow with the precision of a loom.
                        Catch bugs before they exist and deploy with absolute confidence.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <Link
                            to="/signup"
                            className="w-full sm:w-auto px-8 py-4 bg-loom-green-500 hover:bg-loom-green-400 text-loom-black-900 font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,255,148,0.3)] hover:shadow-[0_0_30px_rgba(0,255,148,0.5)] hover:-translate-y-1"
                        >
                            Start Testing Free
                        </Link>
                        <Link
                            to="/demo"
                            className="w-full sm:w-auto px-8 py-4 bg-loom-black-800 hover:bg-loom-black-700 text-loom-gray-100 font-semibold rounded-xl border border-loom-gray-700 hover:border-loom-gray-500 transition-all duration-300"
                        >
                            View Live Demo
                        </Link>
                    </div>

                    <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-loom-gray-500 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-loom-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            No credit card required
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-loom-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            14-day free trial
                        </div>
                    </div>
                </div>

                {/* Visual Content (Code Window Mockup) */}
                <div className="flex-1 w-full max-w-xl lg:max-w-none perspective-1000">
                    <div className="relative rounded-2xl bg-loom-black-800 border border-loom-gray-800 shadow-2xl overflow-hidden transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700 ease-out group">
                        {/* Window Header */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-loom-black-900 border-b border-loom-gray-800">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="ml-4 text-xs text-loom-gray-500 font-mono">test_suite.spec.ts</div>
                        </div>

                        {/* Code Content */}
                        <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-loom-black-800/90 z-10"></div>

                            <div className="space-y-1">
                                <div className="flex">
                                    <span className="text-loom-gray-600 w-8 select-none">1</span>
                                    <span className="text-purple-400">import</span> <span className="text-loom-gray-100">{`{ test, expect }`}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@loom/core'</span>;
                                </div>
                                <div className="flex">
                                    <span className="text-loom-gray-600 w-8 select-none">2</span>
                                </div>
                                <div className="flex">
                                    <span className="text-loom-gray-600 w-8 select-none">3</span>
                                    <span className="text-blue-400">test</span><span className="text-loom-gray-100">('should validate critical flow', </span><span className="text-purple-400">async</span> <span className="text-loom-gray-100">() ={'>'} {`{`}</span>
                                </div>
                                <div className="flex">
                                    <span className="text-loom-gray-600 w-8 select-none">4</span>
                                    <span className="pl-4 text-purple-400">const</span> <span className="text-loom-gray-100">result = </span><span className="text-purple-400">await</span> <span className="text-yellow-300">loom</span>.<span className="text-blue-400">weave</span><span className="text-loom-gray-100">({`{`}</span>
                                </div>
                                <div className="flex">
                                    <span className="text-loom-gray-600 w-8 select-none">5</span>
                                    <span className="pl-8 text-loom-gray-100">target: </span><span className="text-green-400">'production'</span>,
                                </div>
                                <div className="flex">
                                    <span className="text-loom-gray-600 w-8 select-none">6</span>
                                    <span className="pl-8 text-loom-gray-100">threads: </span><span className="text-orange-400">128</span>,
                                </div>
                                <div className="flex">
                                    <span className="text-loom-gray-600 w-8 select-none">7</span>
                                    <span className="pl-4 text-loom-gray-100">{`});`}</span>
                                </div>
                                <div className="flex">
                                    <span className="text-loom-gray-600 w-8 select-none">8</span>
                                </div>
                                <div className="flex bg-loom-green-900/20 -mx-6 px-6 border-l-2 border-loom-green-500">
                                    <span className="text-loom-gray-600 w-8 select-none">9</span>
                                    <span className="pl-4 text-purple-400">expect</span><span className="text-loom-gray-100">(result.status).</span><span className="text-blue-400">toBe</span><span className="text-loom-gray-100">(</span><span className="text-green-400">'flawless'</span><span className="text-loom-gray-100">);</span>
                                    <span className="ml-4 text-loom-green-500 text-xs flex items-center">
                                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Passed (12ms)
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="text-loom-gray-600 w-8 select-none">10</span>
                                    <span className="text-loom-gray-100">{`});`}</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-4 -right-4 bg-loom-black-900 border border-loom-gray-700 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce">
                            <div className="w-3 h-3 bg-loom-green-500 rounded-full animate-ping"></div>
                            <div className="text-sm font-bold text-loom-gray-100">
                                Tests Passing
                                <div className="text-xs text-loom-gray-500 font-normal">100% Coverage</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
