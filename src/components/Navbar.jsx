import { useState } from "react";
import DownloadCV from "./DownloadCV";

const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Secret', href: 'https://about-maeve.netlify.app/', target: '_blank' },
]

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black text-white px-6 py-4 relative">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Hamburger button (mobile only) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-300 focus:outline-none relative z-50"
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>

                {/* Desktop nav */}
                <div className="hidden md:flex gap-8 font-bold text-lg">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            target={item.target}
                            className="effect-shine"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile menu (expands left) */}
            <div
                className={`absolute top-full ${window.innerWidth < 324 ? "left-6 origin-top-left" : "right-6 origin-top-right"} transform transition-all duration-300 
                ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"} md:hidden bg-neutral-900 border border-neutral-700 rounded-lg shadow-lg`}
            >
                <div className="flex flex-col items-end space-y-3 px-6 py-4 font-semibold">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                        >
                            {item.name}
                        </a>
                    ))}
                    {window.innerWidth < 640 ? <a href="/CV Mutia Wulansari.pdf" download>CV</a> : null}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;