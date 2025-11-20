import { Link } from 'react-router-dom';

const Pricing = () => {
    const plans = [
        {
            name: "Hobby",
            price: "Free",
            description: "Perfect for side projects and open source.",
            features: [
                "Unlimited public repositories",
                "Basic static analysis",
                "Community support",
                "1 user"
            ],
            cta: "Start for Free",
            popular: false
        },
        {
            name: "Pro",
            price: "$29",
            period: "/month",
            description: "For professional developers shipping daily.",
            features: [
                "Unlimited private repositories",
                "Advanced AI logic detection",
                "Auto-fix suggestions",
                "Priority email support",
                "Up to 5 users"
            ],
            cta: "Start Free Trial",
            popular: true
        },
        {
            name: "Team",
            price: "$99",
            period: "/month",
            description: "Scale your engineering team with confidence.",
            features: [
                "Everything in Pro",
                "SSO & SAML",
                "Custom rule engine",
                "Dedicated success manager",
                "Unlimited users"
            ],
            cta: "Contact Sales",
            popular: false
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-loom-black-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-loom-gray-100 mb-4">
                        Simple, Transparent <span className="text-loom-green-500">Pricing</span>
                    </h2>
                    <p className="text-loom-gray-400 max-w-2xl mx-auto text-lg">
                        Choose the plan that fits your needs. No hidden fees, cancel anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-2xl border flex flex-col ${plan.popular
                                    ? 'bg-loom-black-800 border-loom-green-500 shadow-[0_0_30px_rgba(0,255,148,0.15)] scale-105 z-10'
                                    : 'bg-loom-black-900 border-loom-gray-800 hover:border-loom-gray-700'
                                } transition-all duration-300`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-loom-green-500 text-loom-black-900 text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-loom-gray-100 mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-loom-gray-100">{plan.price}</span>
                                    {plan.period && <span className="text-loom-gray-500">{plan.period}</span>}
                                </div>
                                <p className="text-loom-gray-400 text-sm mt-4">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-loom-gray-300">
                                        <svg className="w-5 h-5 text-loom-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/signup"
                                className={`w-full py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300 ${plan.popular
                                        ? 'bg-loom-green-500 hover:bg-loom-green-400 text-loom-black-900 shadow-[0_0_15px_rgba(0,255,148,0.3)]'
                                        : 'bg-loom-black-800 hover:bg-loom-black-700 text-loom-gray-100 border border-loom-gray-700'
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
