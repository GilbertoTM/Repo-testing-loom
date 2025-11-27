import { useState } from 'react';

const CTA = () => {
    return (
        <section className="max-w-4xl mx-auto py-20 px-4 text-center" id="cta">
            <div className="bg-loom-black-800/70 backdrop-blur-lg rounded-2xl border border-loom-gray-700 p-10 shadow-[0_0_30px_rgba(0,255,148,0.2)]">
                <h2 className="text-4xl font-extrabold text-loom-gray-100 mb-6">
                    Lleva tu código al siguiente nivel
                </h2>
                <p className="text-loom-gray-300 text-lg mb-8">
                    Únete a cientos de desarrolladores que ya están mejorando su productividad con Loomix.
                </p>
                <a
                    href="/login"
                    className="inline-block bg-loom-green-500 hover:bg-loom-green-400 text-loom-black-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-[0_0_10px_rgba(0,255,148,0.2)] hover:shadow-[0_0_20px_rgba(0,255,148,0.4)]"
                >
                    Prueba Gratis Ahora
                </a>
            </div>
        </section>
    );
};

export default CTA;
