import { useState, useEffect } from "react";
import Icon from "./Icon";

function About() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <section
        className="flex flex-col items-center justify-center min-h-screen px-4 py-20"
        id="about"
      >
        <div className="w-full max-w-4xl flex flex-col items-center">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent italic uppercase">
              ABOUT ME
            </h1>
            <div className="h-1 w-16 bg-white mx-auto rounded-full opacity-20"></div>
          </div>

          <div
            className={`mockup-browser border border-neutral-800 bg-neutral-900/50 text-white w-full backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden`}
          >
            <div className="mockup-browser-toolbar flex justify-between items-center px-6 py-4 bg-neutral-900/80 border-b border-neutral-800">
              <div className="flex gap-1.5 ml-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-8 justify-center px-8 py-12 md:px-16 md:py-16">
              <div className="space-y-4 text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-white/90 leading-relaxed">
                  Hello World!
                </h2>
                <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                  My name is Mutia Wulansari. I am a software engineer based in Jakarta, Indonesia.<br /><br />
                  I love building web and mobile apps and working with new technologies.
                  I am passionate about creating innovative and impactful products with great user experiences.
                </p>
                <p className="text-neutral-500 italic">
                  Feel free to connect with me on social media!
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Icon
                  href="https://www.linkedin.com/in/mutiawulansari/"
                  d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                  size="bg-neutral-800 hover:bg-[#0077B5] transition-colors"
                />
                <Icon
                  href="https://github.com/mutiawsr"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  size="bg-neutral-800 hover:bg-[#333] transition-colors"
                />
                <Icon
                  href="https://www.upwork.com/freelancers/~01d38d04e32f05bb31"
                  d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703a2.707 2.707 0 0 1-2.704 2.702m0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.55 2.55 0 0 1-2.547 2.548a2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3-2.439-5.439-5.439-5.439"
                  size="bg-neutral-800 hover:bg-[#14a800] transition-colors"
                />
                <Icon
                  href="https://x.com/himecode"
                  d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                  size="bg-neutral-800 hover:bg-white hover:text-black transition-all"
                />
                <Icon
                  href="mailto:mutiawsr@gmail.com"
                  d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-.67 2L12 10.75L5.67 6ZM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2a1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1-1"
                  size="bg-neutral-800 hover:bg-red-500 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;