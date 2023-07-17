import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomePageBG from "../assets/images/homepage.jpg";
import images from "../assets/images";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main
      className={`bg-cover bg-center w-full mx-auto flex-auto transition-opacity duration-1000 ease-in delay-500 min-h-screen ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `url(${HomePageBG})`,
      }}
    >
      <div className="pt-2 pl-1">
        <Link to="/" className="btn btn-ghost normal-case text-neutral pb-2">
          <h2 className="flex flex-col text-2xl">
            Sophia Araya
            <span className="text-xs">Makeup + Hair</span>
          </h2>
        </Link>
        {/* Menu */}
        <div className="flex flex-col place-items-center container mx-auto">
          <ul className="menu menu-horizontal px-1 grid grid-cols-2 lg:flex place-items-center lg:place-items-end w-full">
            <li className="lg:w-1/4 h-fit">
              <Link
                to="/beauty"
                className="btn btn-ghost normal-case w-full h-fit flex-col p-2 lg:p-3"
              >
                <img
                  src={images.beauty[0]}
                  alt="Woman with dark curly hair in white dress"
                  className="rounded-lg"
                />
                <h2 className="text-neutral font-semibold sm:text-2xl">
                  Beauty
                </h2>
              </Link>
            </li>
            <li className="lg:w-1/4 h-fit">
              <Link
                to="/fashion"
                className="btn btn-ghost normal-case w-full h-fit flex-col p-2 lg:p-3"
              >
                <img
                  src={images.fashion[0]}
                  alt="Woman in dress and boots, upside-down"
                  className="rounded-lg"
                />
                <h2 className="text-neutral font-semibold sm:text-2xl">
                  Fashion
                </h2>
              </Link>
            </li>
            <li className="lg:w-1/4 h-fit">
              <Link
                to="/hair"
                className="btn btn-ghost normal-case w-full h-fit flex-col p-2 lg:p-3"
              >
                <img
                  src={images.hair[0]}
                  alt="Woman with red and white striped tubes in fashion show"
                  className="rounded-lg"
                />
                <h2 className="text-neutral font-semibold sm:text-2xl">Hair</h2>
              </Link>
            </li>
            <li className="lg:w-1/4 h-fit">
              <Link
                to="/male-grooming"
                className="btn btn-ghost normal-case w-full h-fit flex-col p-2 lg:p-3"
              >
                <img
                  src={images.mg[0]}
                  alt="Man with black tanktop and short hair"
                  className="rounded-lg"
                />
                <h2 className="text-neutral font-semibold sm:text-2xl">
                  Male Grooming
                </h2>
              </Link>
            </li>
          </ul>
          <ul className="menu menu-horizontal">
            <li>
              <Link
                to="/about"
                className={`btn-ghost text-neutral font-semibold sm:text-2xl rounded-lg`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`btn-ghost text-neutral font-semibold sm:text-2xl rounded-lg`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <footer className="footer footer-center xl:m-0 lg:mt-12 p-6 text-base-content rounded">
        <div>
          <div className="grid grid-flow-col gap-4">
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/sophia_araya_mua/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#000"
                alt="Instagram logo"
              >
                <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
              </svg>
            </a>
          </div>
          <p className="text-neutral text-xs">
            Web Design by{" "}
            <a
              className="link link-neutral"
              href="https://www.gabegon.com/"
              target="_blank"
            >
              Gabe Gonzalez
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
