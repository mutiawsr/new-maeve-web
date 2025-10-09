function Button({ href, text, className = "", download = false, newTab = false }) {
    return (
        <a
            href={href}
            download={download ? true : false}
            target={newTab ? "_blank" : "_self"} >
            <button className={`btn btn-gradient font-bold ${className}`}>{text}</button>
        </a>
    )
}

export default Button;