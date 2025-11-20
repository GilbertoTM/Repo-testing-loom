import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-loom-black-900/80 backdrop-blur-md border-b border-loom-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 bg-loom-green-500 rounded-lg flex items-center justify-center text-loom-black-900 font-bold text-xl shadow-[0_0_10px_rgba(0,255,148,0.3)] group-hover:shadow-[0_0_15px_rgba(0,255,148,0.6)] transition-all duration-300">
                                T
                            </div>
                            <span className="text-xl font-bold text-loom-gray-100 tracking-tight">
                                Loom<span className="text-loom-green-500">ix</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/features">Features</NavLink>
                            <NavLink to="/docs">Docs</NavLink>
                            <NavLink to="/pricing">Pricing</NavLink>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link to="/login" className="bg-loom-green-500 hover:bg-loom-green-400 text-loom-black-900 font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-[0_0_10px_rgba(0,255,148,0.2)] hover:shadow-[0_0_20px_rgba(0,255,148,0.4)]">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ to, children }) => (
    <Link
        to={to}
        className="text-loom-gray-400 hover:text-loom-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
    >
        {children}
    </Link>
);

export default Navbar;
