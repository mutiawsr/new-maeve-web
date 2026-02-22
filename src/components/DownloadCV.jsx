function DownloadCV() {
  return (
    <div className="hidden sm:block">
      <a href="/CV Mutia Wulansari.pdf" download>
        <button className="px-6 py-2.5 bg-neutral-900/50 text-white border border-neutral-800 rounded-full font-bold hover:bg-white hover:text-black transition-all transform hover:scale-105 active:scale-95 shadow-lg backdrop-blur-sm">
          Download CV
        </button>
      </a>
    </div>
  );
}

export default DownloadCV;