function Footer() {
    var date = new Date();
    var currentYear = date.getFullYear();

    return (
        <footer className="p-2 text-center text-xs">
            <p>Made with React, Tailwind, and FlyonUI.</p>
            <p>&copy; { currentYear } Mutia Wulansari. All rights reserved.</p>
        </footer>
    )
}

export default Footer;