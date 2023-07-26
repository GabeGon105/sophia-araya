import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomePageBG from "../assets/images/homepage.jpg";
import images from "../assets/images";
import Footer from "../components/Footer";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    // Div to hold the background photo styles
    <div
      className={`bg-cover bg-center duration-1000 ease-in delay-500 min-h-screen flex flex-col ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `url(${HomePageBG})`,
      }}
    >
      <main
        className={`container w-full mx-auto flex-auto transition-opacity duration-1000 ease-in delay-500`}
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
            <ul className="menu menu-horizontal grid grid-cols-2 lg:flex place-items-center lg:place-items-end w-full justify-around rounded-lg">
              <li className="lg:w-1/4 h-fit xl:w-72">
                <Link
                  to="/beauty"
                  className="btn btn-ghost normal-case w-full h-fit flex-col p-2 lg:p-3 rounded-lg"
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
              <li className="lg:w-1/4 h-fit xl:w-72">
                <Link
                  to="/fashion"
                  className="btn btn-ghost normal-case w-full h-fit flex-col p-2 lg:p-3 rounded-lg"
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
              <li className="lg:w-1/4 h-fit xl:w-72">
                <Link
                  to="/hair"
                  className="btn btn-ghost normal-case w-full h-fit flex-col p-2 lg:p-3 rounded-lg"
                >
                  <img
                    src={images.hair[0]}
                    alt="Woman with red and white striped tubes in fashion show"
                    className="rounded-lg"
                  />
                  <h2 className="text-neutral font-semibold sm:text-2xl">
                    Hair + Wigs
                  </h2>
                </Link>
              </li>
              <li className="lg:w-1/4 h-fit xl:w-72">
                <Link
                  to="/male-grooming"
                  className="btn btn-ghost normal-case w-full h-fit flex-col p-2 lg:p-3 rounded-lg"
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
      </main>
      <Footer />
    </div>
  );
}
