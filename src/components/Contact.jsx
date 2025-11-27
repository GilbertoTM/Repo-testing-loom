import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder: In a real app you would send this data to an API.
        console.log('Contact form submitted:', formData);
        alert('¡Gracias! Tu mensaje ha sido enviado.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="max-w-2xl mx-auto py-16 px-4" id="contact">
            <h2 className="text-3xl font-bold text-center text-loom-gray-100 mb-8">
                Contáctanos
            </h2>
            <form
                onSubmit={handleSubmit}
                className="bg-loom-black-800/60 backdrop-blur-md rounded-lg border border-loom-gray-700 p-8 space-y-6"
            >
                <div>
                    <label className="block text-loom-gray-300 mb-2" htmlFor="name">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-loom-black-900 text-loom-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-loom-green-500"
                    />
                </div>
                <div>
                    <label className="block text-loom-gray-300 mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-loom-black-900 text-loom-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-loom-green-500"
                    />
                </div>
                <div>
                    <label className="block text-loom-gray-300 mb-2" htmlFor="message">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-loom-black-900 text-loom-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-loom-green-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-loom-green-500 hover:bg-loom-green-400 text-loom-black-900 font-semibold py-2 px-4 rounded transition-all duration-300 shadow-[0_0_10px_rgba(0,255,148,0.2)] hover:shadow-[0_0_20px_rgba(0,255,148,0.4)]"
                >
                    Enviar Mensaje
                </button>
            </form>
        </section>
    );
};

export default Contact;
