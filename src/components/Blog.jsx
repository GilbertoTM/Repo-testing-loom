import { useState } from 'react';

const posts = [
    {
        title: 'Loomix 1.0 Launch – AI Code Review Revolution',
        date: '2025-11-01',
        excerpt: 'Descubre cómo Loomix está transformando la revisión de código con IA en tiempo real, ofreciendo sugerencias inteligentes y detección de bugs.',
        img: '/blog/launch.jpg',
    },
    {
        title: 'Integrando Loomix con CI/CD',
        date: '2025-10-20',
        excerpt: 'Una guía paso a paso para conectar Loomix con GitHub Actions y GitLab CI, automatizando revisiones en cada push.',
        img: '/blog/ci-cd.jpg',
    },
    {
        title: 'Mejores prácticas de seguridad con IA',
        date: '2025-09-15',
        excerpt: 'Aprende a usar la IA de Loomix para detectar vulnerabilidades comunes y reforzar la seguridad de tu código.',
        img: '/blog/security.jpg',
    },
];

const Blog = () => {
    return (
        <section className="max-w-6xl mx-auto py-20 px-4" id="blog">
            <h2 className="text-4xl font-extrabold text-center text-loom-gray-100 mb-12">
                Últimas Noticias
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
                {posts.map((post, idx) => (
                    <article
                        key={idx}
                        className="bg-loom-black-800/60 backdrop-blur-md rounded-xl border border-loom-gray-700 p-4 transition-transform hover:scale-105 duration-300"
                    >
                        <img
                            src={post.img}
                            alt={post.title}
                            className="w-full h-40 object-cover rounded-t-xl mb-4 shadow-[0_0_10px_rgba(0,255,148,0.2)]"
                        />
                        <h3 className="text-xl font-semibold text-loom-gray-100 mb-2">
                            {post.title}
                        </h3>
                        <p className="text-loom-green-500 text-sm mb-2">{post.date}</p>
                        <p className="text-loom-gray-300 text-sm mb-4">{post.excerpt}</p>
                        <a
                            href="#"
                            className="inline-block text-loom-green-400 hover:text-loom-green-300 font-medium"
                        >
                            Leer más →
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Blog;
