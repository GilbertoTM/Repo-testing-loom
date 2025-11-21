import { useState } from 'react';

const DemoSection = () => {
    const [activeTab, setActiveTab] = useState('vulnerable');

    const codeSnippets = {
        vulnerable: `function processPayment(user, amount) {
  // TODO: Add validation
  const query = "UPDATE accounts SET balance = balance - " + amount + " WHERE user_id = " + user.id;
  database.execute(query);
}`,
        analysis: `> Initiating Loomix Scan...
> Analyzing control flow...
> [CRITICAL] SQL Injection detected in processPayment
>   Line 3: Direct concatenation of user input 'amount'
>   Risk: High
>   CWE-89: Improper Neutralization of Special Elements used in an SQL Command
> Suggestion: Use parameterized queries.`,
        secure: `function processPayment(user, amount) {
  if (amount <= 0) throw new Error("Invalid amount");
  
  // Fixed: Using parameterized query
  const query = "UPDATE accounts SET balance = balance - ? WHERE user_id = ?";
  database.execute(query, [amount, user.id]);
}`
    };

    return (
        <section className="py-24 bg-loom-black-800 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Content */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-loom-gray-100 mb-6">
                            See Loomix in <span className="text-loom-green-500">Action</span>
                        </h2>
                        <p className="text-lg text-loom-gray-400 mb-8 leading-relaxed">
                            Watch how Loomix transforms vulnerable code into production-ready secure software in seconds. Our AI engine understands context, not just syntax.
                        </p>

                        <div className="space-y-4">
                            <div
                                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${activeTab === 'vulnerable' ? 'bg-loom-black-900 border-loom-green-500 shadow-[0_0_20px_rgba(0,255,148,0.1)]' : 'bg-loom-black-900/50 border-loom-gray-800 hover:border-loom-gray-600'}`}
                                onClick={() => setActiveTab('vulnerable')}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${activeTab === 'vulnerable' ? 'bg-red-500/20 text-red-500' : 'bg-loom-gray-800 text-loom-gray-500'}`}>1</div>
                                    <h3 className={`font-semibold ${activeTab === 'vulnerable' ? 'text-loom-gray-100' : 'text-loom-gray-400'}`}>Input Vulnerable Code</h3>
                                </div>
                            </div>

                            <div
                                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${activeTab === 'analysis' ? 'bg-loom-black-900 border-loom-green-500 shadow-[0_0_20px_rgba(0,255,148,0.1)]' : 'bg-loom-black-900/50 border-loom-gray-800 hover:border-loom-gray-600'}`}
                                onClick={() => setActiveTab('analysis')}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${activeTab === 'analysis' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-loom-gray-800 text-loom-gray-500'}`}>2</div>
                                    <h3 className={`font-semibold ${activeTab === 'analysis' ? 'text-loom-gray-100' : 'text-loom-gray-400'}`}>AI Analysis</h3>
                                </div>
                            </div>

                            <div
                                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${activeTab === 'secure' ? 'bg-loom-black-900 border-loom-green-500 shadow-[0_0_20px_rgba(0,255,148,0.1)]' : 'bg-loom-black-900/50 border-loom-gray-800 hover:border-loom-gray-600'}`}
                                onClick={() => setActiveTab('secure')}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${activeTab === 'secure' ? 'bg-loom-green-500/20 text-loom-green-500' : 'bg-loom-gray-800 text-loom-gray-500'}`}>3</div>
                                    <h3 className={`font-semibold ${activeTab === 'secure' ? 'text-loom-gray-100' : 'text-loom-gray-400'}`}>Auto-Fix Applied</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Interactive Window */}
                    <div className="lg:w-1/2 w-full">
                        <div className="rounded-xl overflow-hidden bg-[#0a0a0a] border border-loom-gray-800 shadow-2xl relative min-h-[400px]">
                            {/* Window Header */}
                            <div className="flex items-center px-4 py-3 bg-loom-black-900 border-b border-loom-gray-800">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="ml-4 text-xs text-loom-gray-500 font-mono">
                                    {activeTab === 'vulnerable' ? 'payment_logic.js' : activeTab === 'analysis' ? 'loomix_terminal' : 'payment_logic_secure.js'}
                                </div>
                            </div>

                            {/* Code Area */}
                            <div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
                                <pre className={`transition-opacity duration-300 ${activeTab === 'vulnerable' ? 'text-red-300' : activeTab === 'analysis' ? 'text-loom-green-400' : 'text-loom-green-300'}`}>
                                    <code>{codeSnippets[activeTab]}</code>
                                </pre>

                                {activeTab === 'analysis' && (
                                    <div className="mt-4 animate-pulse">_</div>
                                )}
                            </div>

                            {/* Overlay for transitions */}
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-loom-black-900/20"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DemoSection;
