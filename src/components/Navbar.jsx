import { useState } from "react";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Hamburger button (mobile only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-300 focus:outline-none relative z-50 p-2"
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
      <div className="hidden md:flex gap-10 font-bold text-sm tracking-[0.2em] uppercase">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-neutral-400 hover:text-white transition-colors effect-shine"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed md:absolute top-full right-0 mt-4 transform transition-all duration-300 origin-top-right 
                ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"} md:hidden bg-neutral-900/95 border border-neutral-800 rounded-2xl shadow-2xl backdrop-blur-xl min-w-[240px] z-50`}
      >
        <div className="flex flex-col items-end space-y-5 px-8 py-8 font-semibold">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-neutral-300 hover:text-white text-lg tracking-widest uppercase"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="w-full h-px bg-neutral-800 my-2"></div>
          <a
            href="/CV Mutia Wulansari.pdf"
            download
            className="text-white text-lg tracking-widest uppercase hover:text-neutral-300"
            onClick={() => setIsOpen(false)}
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;