import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // Fake auth success
            localStorage.setItem('loomix_token', 'fake_jwt_token_123456');
            navigate('/dashboard');
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-loom-black-900 relative overflow-hidden px-4">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-loom-green-900/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-loom-green-500/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="w-full max-w-md bg-loom-black-800 border border-loom-gray-800 rounded-2xl p-8 shadow-2xl relative z-10 backdrop-blur-sm">
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
                        <div className="w-10 h-10 bg-loom-green-500 rounded-lg flex items-center justify-center text-loom-black-900 font-bold text-2xl shadow-[0_0_15px_rgba(0,255,148,0.4)]">
                            T
                        </div>
                        <span className="text-2xl font-bold text-loom-gray-100 tracking-tight">
                            Loom<span className="text-loom-green-500">ix</span>
                        </span>
                    </Link>
                    <h2 className="text-2xl font-bold text-loom-gray-100">Welcome back</h2>
                    <p className="text-loom-gray-400 mt-2">Sign in to your account to continue</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-loom-gray-300 mb-2">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-3 bg-loom-black-900 border border-loom-gray-700 rounded-xl text-loom-gray-100 focus:outline-none focus:border-loom-green-500 focus:ring-1 focus:ring-loom-green-500 transition-colors"
                            placeholder="you@company.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-loom-gray-300 mb-2">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-3 bg-loom-black-900 border border-loom-gray-700 rounded-xl text-loom-gray-100 focus:outline-none focus:border-loom-green-500 focus:ring-1 focus:ring-loom-green-500 transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 px-4 bg-loom-green-500 hover:bg-loom-green-400 text-loom-black-900 font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,255,148,0.2)] hover:shadow-[0_0_30px_rgba(0,255,148,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                        {isLoading ? (
                            <svg className="animate-spin h-5 w-5 text-loom-black-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                            "Sign In"
                        )}
                    </button>
                </form>

                <div className="mt-8 pt-8 border-t border-loom-gray-800">
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-loom-black-900 border border-loom-gray-700 rounded-lg text-loom-gray-300 hover:text-loom-gray-100 hover:border-loom-gray-500 transition-colors">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            GitHub
                        </button>
                        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-loom-black-900 border border-loom-gray-700 rounded-lg text-loom-gray-300 hover:text-loom-gray-100 hover:border-loom-gray-500 transition-colors">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.333.533 12S5.867 24 12.48 24c3.44 0 6.013-1.133 8.053-3.24 2.08-2.08 2.72-5.2 2.72-7.707 0-.507-.053-1.04-.147-1.493h-10.627z" /></svg>
                            Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
