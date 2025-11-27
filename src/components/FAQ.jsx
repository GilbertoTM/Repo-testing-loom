import { useState } from 'react';

const faqData = [
    {
        question: '¿Cómo funciona Loomix?',
        answer: 'Loomix utiliza IA para revisar tu código en tiempo real, ofreciendo sugerencias de mejora y detección de bugs.',
    },
    {
        question: '¿Qué planes están disponibles?',
        answer: 'Tenemos un plan gratuito con funcionalidades básicas y un plan premium con revisiones ilimitadas y soporte prioritario.',
    },
    {
        question: '¿Puedo integrar Loomix con mi CI/CD?',
        answer: 'Sí, Loomix ofrece una API y plugins para GitHub Actions, GitLab CI y otros pipelines.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-4xl mx-auto py-16 px-4" id="faq">
            <h2 className="text-3xl font-bold text-center text-loom-gray-100 mb-8">Preguntas Frecuentes</h2>
            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-loom-black-800/60 backdrop-blur-md rounded-lg border border-loom-gray-700 p-4 transition-all duration-300 cursor-pointer"
                        onClick={() => toggle(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium text-loom-gray-200">{item.question}</h3>
                            <svg
                                className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        {openIndex === index && (
                            <p className="mt-3 text-loom-gray-400">{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
