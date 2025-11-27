import { useState } from 'react';

const teamMembers = [
    {
        name: 'Ana García',
        role: 'Fundadora & CEO',
        img: '/team/ana.jpg',
        bio: 'Apasionada por la IA y la calidad del código, lidera la visión de Loomix.',
    },
    {
        name: 'Luis Pérez',
        role: 'CTO',
        img: '/team/luis.jpg',
        bio: 'Arquitecto de sistemas, especializado en React y micro‑servicios.',
    },
    {
        name: 'María Torres',
        role: 'Lead Designer',
        img: '/team/maria.jpg',
        bio: 'Crea experiencias visuales premium con glassmorphism y animaciones sutiles.',
    },
];

const AboutUs = () => {
    return (
        <section className="max-w-6xl mx-auto py-20 px-4" id="about-us">
            <h2 className="text-4xl font-extrabold text-center text-loom-gray-100 mb-12">
                Conoce al Equipo
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
                {teamMembers.map((member, idx) => (
                    <div
                        key={idx}
                        className="bg-loom-black-800/60 backdrop-blur-md rounded-xl border border-loom-gray-700 p-6 text-center transition-transform hover:scale-105 duration-300"
                    >
                        <img
                            src={member.img}
                            alt={member.name}
                            className="w-24 h-24 mx-auto rounded-full mb-4 object-cover shadow-[0_0_15px_rgba(0,255,148,0.3)]"
                        />
                        <h3 className="text-xl font-semibold text-loom-gray-100">
                            {member.name}
                        </h3>
                        <p className="text-loom-green-500 font-medium mb-2">
                            {member.role}
                        </p>
                        <p className="text-loom-gray-300 text-sm">
                            {member.bio}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutUs;
