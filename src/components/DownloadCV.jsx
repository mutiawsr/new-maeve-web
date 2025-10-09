import Button from "./Button";

function DownloadCV() {
    return (
        <>
            <Button
                href="/CV Mutia Wulansari.pdf"
                text="Download CV"
                download
                className="text-black mx-4" />
        </>
    )
}

export default DownloadCV;