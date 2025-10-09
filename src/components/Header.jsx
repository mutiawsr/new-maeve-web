import Logo from "./Logo";
import Navbar from './Navbar';
import DownloadCV from "./DownloadCV";

function Header() {
    return (
        <>
            <header className="flex flex-wrap justify-between p-3 items-center">
                <Logo />
                <Navbar />
                <DownloadCV />
            </header>
        </>
    )
}

export default Header;