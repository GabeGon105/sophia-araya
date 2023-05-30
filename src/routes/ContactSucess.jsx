import SophiaContact from "../assets/images/sophia-araya-contact.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
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
                <span>Email: sophiadaraya@gmail.com</span>
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
              <h3 className="text-center text-neutral text-semibold py-16 sm:text-lg">
                Thank you, your message has been sent!{" "}
              </h3>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
