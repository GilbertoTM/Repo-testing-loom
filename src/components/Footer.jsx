import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-loom-black-900 border-t border-loom-gray-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 bg-loom-green-500 rounded-lg flex items-center justify-center text-loom-black-900 font-bold text-xl shadow-[0_0_10px_rgba(0,255,148,0.3)]">
                                T
                            </div>
                            <span className="text-xl font-bold text-loom-gray-100 tracking-tight">
                                Loom<span className="text-loom-green-500">ix</span>
                            </span>
                        </Link>
                        <p className="text-loom-gray-400 text-sm leading-relaxed">
                            The next generation of automated testing infrastructure.
                            Built for speed, reliability, and developer happiness.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon="twitter" />
                            <SocialIcon icon="github" />
                            <SocialIcon icon="discord" />
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="text-loom-gray-100 font-semibold mb-6">Product</h3>
                        <ul className="space-y-4">
                            <FooterLink to="/features">Features</FooterLink>
                            <FooterLink to="/integrations">Integrations</FooterLink>
                            <FooterLink to="/pricing">Pricing</FooterLink>
                            <FooterLink to="/changelog">Changelog</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-loom-gray-100 font-semibold mb-6">Resources</h3>
                        <ul className="space-y-4">
                            <FooterLink to="/docs">Documentation</FooterLink>
                            <FooterLink to="/api">API Reference</FooterLink>
                            <FooterLink to="/blog">Blog</FooterLink>
                            <FooterLink to="/community">Community</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-loom-gray-100 font-semibold mb-6">Company</h3>
                        <ul className="space-y-4">
                            <FooterLink to="/about">About Us</FooterLink>
                            <FooterLink to="/careers">Careers</FooterLink>
                            <FooterLink to="/legal">Legal</FooterLink>
                            <FooterLink to="/contact">Contact</FooterLink>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-loom-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-loom-gray-500 text-sm">
                        © {new Date().getFullYear()} Testing Loom Inc. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link to="/privacy" className="text-loom-gray-500 hover:text-loom-green-500 text-sm transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="text-loom-gray-500 hover:text-loom-green-500 text-sm transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterLink = ({ to, children }) => (
    <li>
        <Link
            to={to}
            className="text-loom-gray-400 hover:text-loom-green-500 text-sm transition-colors duration-200 flex items-center gap-2 group"
        >
            <span className="w-1 h-1 rounded-full bg-loom-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            {children}
        </Link>
    </li>
);

const SocialIcon = ({ icon }) => {
    // Simple SVG placeholders for social icons
    const icons = {
        twitter: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>,
        github: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>,
        discord: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path> // Simplified bubble shape
    };

    return (
        <a href="#" className="w-10 h-10 rounded-full bg-loom-black-800 border border-loom-gray-800 flex items-center justify-center text-loom-gray-400 hover:text-loom-green-500 hover:border-loom-green-500/50 hover:bg-loom-green-900/20 transition-all duration-300">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {icons[icon]}
            </svg>
        </a>
    );
};

export default Footer;
