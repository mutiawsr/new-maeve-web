import Button from "./Button";

function DownloadCV() {
    return (
        <div className="hidden sm:block">
            <Button
                href="/CV Mutia Wulansari.pdf"
                text="Download CV"
                download
                className="text-black mx-4" />
        </div>
    )
}

export default DownloadCV;