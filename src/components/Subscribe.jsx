import { useState } from 'react';

const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app you'd send this to an API
        alert(`Gracias por suscribirte, ${email}!`);
        setEmail('');
    };

    return (
        <section className="max-w-4xl mx-auto py-20 px-4 text-center" id="subscribe">
            <div className="bg-loom-black-800/70 backdrop-blur-lg rounded-2xl border border-loom-gray-700 p-10 shadow-[0_0_30px_rgba(0,255,148,0.2)]">
                <h2 className="text-4xl font-extrabold text-loom-gray-100 mb-6">
                    Mantente al día
                </h2>
                <p className="text-loom-gray-300 text-lg mb-8">
                    Suscríbete a nuestro boletín para recibir novedades y tips de IA.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <input
                        type="email"
                        placeholder="tu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full sm:w-auto flex-1 px-4 py-2 bg-loom-black-900 text-loom-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-loom-green-500"
                    />
                    <button
                        type="submit"
                        className="bg-loom-green-500 hover:bg-loom-green-400 text-loom-black-900 font-semibold py-2 px-6 rounded transition-all duration-300 shadow-[0_0_10px_rgba(0,255,148,0.2)] hover:shadow-[0_0_20px_rgba(0,255,148,0.4)]"
                    >
                        Suscribirme
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Subscribe;
