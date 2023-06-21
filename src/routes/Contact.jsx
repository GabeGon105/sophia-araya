import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SophiaContact from "../assets/images/sophia-araya-contact.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  let navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("sophia-araya-contact");
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/contact-success"))
      .catch((error) => alert(error));
  };

  return (
    <>
      <Navbar page="contact" />
      <main
        className={`container mx-auto transition-opacity duration-1000 ease-in ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <section className="flex flex-col items-center lg:flex-row pb-5 px-5">
          {/* Sophia Araya Photo */}
          <article className="w-full lg:w-1/2 flex justify-center mt-5">
            <img
              src={SophiaContact}
              loading="lazy"
              alt="Sophia Araya Makeup Artist adjusting an artist's hair"
              className="w-11/12 lg:w-96 rounded-lg shadow-lg"
            />
          </article>
          <div className="px-5 lg:w-1/2 mt-5">
            {/* Contact form */}
            <div className="px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-2xl font-bold text-center text-neutral">
                Contact
              </h2>
              <p className="mb-4 lg:mb-8 text-center sm:text-lg text-neutral">
                <span>
                  Email:{" "}
                  <a
                    href="mailto:sophiadaraya@gmail.com"
                    className="link link-neutral"
                  >
                    sophiadaraya@gmail.com
                  </a>
                </span>
                <br />
                <span>
                  IG:{" "}
                  <a
                    href="https://www.instagram.com/sophia_araya_mua/"
                    className="link link-neutral"
                    target="_blank"
                  >
                    @sophia_araya_mua
                  </a>
                </span>
              </p>
              <form
                name="sophia-araya-contact"
                id="sophia-araya-contact"
                action="/contact-success"
                method="POST"
                className="space-y-4"
                netlify
                onSubmit={submitHandler}
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="sophia-araya-contact"
                />
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-neutral"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm bg-base-100 border border-base-300 text-sm rounded-lg block w-full p-2.5 text-neutral"
                    placeholder="name@domain.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-neutral"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="block p-3 w-full text-sm bg-base-100 rounded-lg border border-base-300 shadow-sm text-neutral"
                    placeholder="Let me know how I can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-neutral"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm bg-base-100 rounded-lg shadow-sm border border-base-300 text-neutral"
                    placeholder="Leave a message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline normal-case text-neutral"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
