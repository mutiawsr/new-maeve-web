import Header from "../components/Header";

function Hero() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-neutral-800/20 to-transparent blur-3xl -z-10"></div>

      <Header />

      <section className="flex flex-col items-center flex-1 w-full px-4 z-10">
        {/* Spacer to clear the absolute header */}
        <div className="h-32 md:h-48 w-full shrink-0"></div>

        {/* Centered content */}
        <div className="flex flex-col items-center justify-center flex-1 w-full gap-10 pb-20">
          <div className="relative group mt-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-neutral-900 border border-neutral-800 p-2 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm">
              <img
                src="/Mono.webp"
                alt="Princess Mononoke wearing mask GIF"
                className="w-64 md:w-96 rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="pt-2 mb-auto">
            <a href="#about" className="group relative block">
              <div className="absolute -inset-0.5 bg-white/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <button className="relative px-6 py-2.5 bg-white text-black font-semibold rounded-full text-sm transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Get To Know Me
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Decorative indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
        <div className="w-px h-12 bg-white mx-auto"></div>
      </div>
    </div>
  );
}

export default Hero;

