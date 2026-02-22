import { useState, useRef } from "react";

function Contact() {
  const [hasFile, setHasFile] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setHasFile(!!e.target.files.length);
  };

  const removeFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
      setHasFile(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <section
        className="flex flex-col items-center justify-center min-h-screen px-4 py-20"
        id="contact"
      >
        <div className="w-full max-w-xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent italic">
              CONTACT ME
            </h1>
            <p className="text-neutral-400 text-lg">
              Have a question or want to work together?
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-800 p-8 md:p-10 rounded-3xl backdrop-blur-sm shadow-2xl">
            <form
              action="https://formspree.io/f/mjgeapre"
              method="POST"
              encType="multipart/form-data"
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300 ml-1">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="input input-bordered w-full bg-neutral-950 border-neutral-800 focus:border-white transition-all rounded-xl h-12 px-4 outline-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="What's on your mind?"
                  rows="4"
                  className="textarea textarea-bordered w-full bg-neutral-950 border-neutral-800 focus:border-white transition-all rounded-xl p-4 outline-none resize-none"
                  required
                ></textarea>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-medium text-neutral-300">
                    Attachment
                  </label>
                  {hasFile && (
                    <button
                      type="button"
                      onClick={removeFile}
                      className="text-xs font-bold text-white-500 hover:text-white-400 transition-colors uppercase tracking-wider"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <input
                  type="file"
                  name="upload"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="file-input file-input-bordered w-full bg-neutral-950 border-neutral-800 focus:border-white transition-all rounded-xl h-12 text-sm text-neutral-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-neutral-800 file:text-white hover:file:bg-neutral-700 cursor-pointer"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="btn w-full bg-white text-black hover:bg-neutral-200 border-none rounded-xl text-lg font-bold transition-all h-14"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
