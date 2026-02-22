import Logo from "./Logo";
import Navbar from "./Navbar";
import DownloadCV from "./DownloadCV";

function Header() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-8 md:px-12 md:py-12">
        <div className="flex-shrink-0 transition-all duration-500 hover:opacity-80">
          <Logo />
        </div>
        <div className="flex items-center gap-8">
          <Navbar />
          <DownloadCV />
        </div>
      </div>
    </header>
  );
}

export default Header;