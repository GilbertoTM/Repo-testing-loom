import { useState } from 'react';

const VideoDemo = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => setIsPlaying(true);

    return (
        <section className="max-w-4xl mx-auto py-20 px-4" id="video-demo">
            <h2 className="text-4xl font-extrabold text-center text-loom-gray-100 mb-8">
                Demo en Acción
            </h2>
            <div className="relative pt-[56.25%] bg-loom-black-800/70 backdrop-blur-lg rounded-xl border border-loom-gray-700 overflow-hidden shadow-[0_0_30px_rgba(0,255,148,0.2)]">
                {isPlaying ? (
                    <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                        title="Loomix demo video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                    />
                ) : (
                    <button
                        onClick={handlePlay}
                        className="absolute inset-0 flex items-center justify-center text-loom-green-500 hover:text-loom-green-400 transition-colors"
                    >
                        <svg
                            className="w-20 h-20 opacity-80"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                )}
            </div>
        </section>
    );
};

export default VideoDemo;
