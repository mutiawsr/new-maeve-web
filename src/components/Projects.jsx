import { useState } from "react";

const projects = [
    {
        title: "NeoLife",
        description: "Online browser-based life simulation game. Experience a virtual life in your browser with deep mechanics and interactive worlds.",
        image: "/neolife.png",
        link: "https://neolife.fun",
        tags: ["Game", "Web", "Simulation"],
    },
    {
        title: "indonesian-names",
        description: "NPM package for generating Indonesian names. Highly customizable and easy to integrate into any JavaScript project.",
        image: "/indonesian-names.png",
        link: "https://www.npmjs.com/package/indonesian-names",
        tags: ["NPM", "Library", "Indonesian"],
    },
];

function Projects() {
    return (
        <section className="py-24 bg-black relative overflow-hidden" id="projects">
            {/* Background glow matching Hero style */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-neutral-800/10 to-transparent blur-3xl -z-10"></div>

            <div className="max-w-3xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tighter bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent italic uppercase">
                        PROJECTS
                    </h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex flex-col bg-neutral-900/30 border border-neutral-800/50 rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.01] hover:border-neutral-700 hover:bg-neutral-900/50 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] active:scale-[0.99]"
                        >
                            {/* Image Container */}
                            <div className="aspect-video overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-60"></div>

                                {/* Tech Tags on top of image */}
                                <div className="absolute bottom-3 left-5 flex flex-wrap gap-1.5 transition-transform duration-700 group-hover:translate-y-[-2px]">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 text-[8px] font-black tracking-[0.2em] uppercase bg-black/60 backdrop-blur-md text-white/80 rounded-full border border-white/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-neutral-200 transition-colors tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-4 group-hover:text-neutral-300 transition-colors">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex items-center text-[9px] font-black tracking-[0.3em] uppercase text-neutral-500 group-hover:text-white transition-all duration-500">
                                    <span className="relative">
                                        EXPLORE PROJECT
                                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/50 transition-all duration-500 group-hover:w-full"></span>
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-2.5 transition-transform duration-500 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Subtle edge highlight */}
                            <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none group-hover:border-white/10 transition-colors"></div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
