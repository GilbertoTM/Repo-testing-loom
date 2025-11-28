import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = (e) => {
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
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-loom-gray-700/10 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-loom-gray-500/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
                <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-loom-gray-400/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
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
                    <h2 className="text-2xl font-bold text-loom-gray-100">Create an Account</h2>
                    <p className="text-loom-gray-400 mt-2">Start weaving quality into your code</p>
                </div>

                <form onSubmit={handleSignup} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-loom-gray-300 mb-2">Full Name</label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-3 bg-loom-black-900 border border-loom-gray-700 rounded-xl text-loom-gray-100 focus:outline-none focus:border-loom-green-500 focus:ring-1 focus:ring-loom-green-500 transition-colors"
                            placeholder="John Doe"
                        />
                    </div>
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
                            "Sign Up Free"
                        )}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-loom-gray-400 text-sm">
                        Already have an account?{' '}
                        <Link to="/login" className="text-loom-green-500 hover:text-loom-green-400 font-medium">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
