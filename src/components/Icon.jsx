function Icon({ href, d, square = true, text, size }) {
  var btnSquare = "btn-square";

  if (!square) {
    btnSquare = "";
  }

  return (
    <a href={href} target="_blank">
      <button class={`btn ${btnSquare} [--btn-color:#000] text-white ${size}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d={d} />
        </svg>
        {text}
      </button>
    </a>
  );
}

export default Icon;
