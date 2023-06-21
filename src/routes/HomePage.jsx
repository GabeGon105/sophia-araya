import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomePageBG from "../assets/images/homepage.jpg";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const overlayStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "rgba(225, 225, 225, 0.6)",
    zIndex: 0,
  };
  const contentStyle = {
    position: "relative",
    zIndex: 1,
  };
  return (
    <main
      className={`bg-cover bg-center w-full mx-auto flex-auto transition-opacity duration-1000 ease-in delay-500 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `url(${HomePageBG})`,
      }}
    >
      <div style={overlayStyle}></div>
      <div style={contentStyle} className="min-h-screen pt-2 pl-1">
        <Link to="/" className="btn btn-ghost normal-case text-neutral pb-2">
          <h2 className="flex flex-col text-2xl">
            Sophia Araya
            <span className="text-xs">Makeup + Hair</span>
          </h2>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:place-content-center lg:container lg:mx-auto">
          <ul className="menu menu-vertical px-1 my-48">
            <li tabIndex={0}>
              <span className="btn-ghost text-neutral font-semibold sm:text-lg">
                Portfolio
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </span>
              <ul
                className="p-2 rounded-box shadow"
                style={{ backgroundColor: "rgba(225, 225, 225, 0.4)" }}
              >
                <li>
                  <Link
                    to="/beauty"
                    className={`btn-ghost text-neutral font-semibold sm:text-lg`}
                  >
                    Beauty
                  </Link>
                </li>
                <li>
                  <Link
                    to="/fashion"
                    className={`btn-ghost text-neutral font-semibold sm:text-lg`}
                  >
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hair"
                    className={`btn-ghost text-neutral font-semibold sm:text-lg`}
                  >
                    Hair
                  </Link>
                </li>
                <li>
                  <Link
                    to="/male-grooming"
                    className={`btn-ghost text-neutral font-semibold sm:text-lg`}
                  >
                    Male Grooming
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/about"
                className={`btn-ghost text-neutral font-semibold sm:text-lg`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`btn-ghost text-neutral font-semibold sm:text-lg`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Mobile Menu */}
        <div className="flex lg:hidden place-content-center container mx-auto">
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content p-2 w-40 mt-28"
          >
            <li className="menu-title">
              <span className="text-neutral font-semibold sm:text-lg">
                Portfolio
              </span>
            </li>
            <li>
              <Link
                to="/beauty"
                className={`btn-ghost text-neutral font-semibold sm:text-lg`}
              >
                Beauty
              </Link>
            </li>
            <li>
              <Link
                to="/fashion"
                className={`btn-ghost text-neutral font-semibold sm:text-lg`}
              >
                Fashion
              </Link>
            </li>
            <li>
              <Link
                to="/hair"
                className={`btn-ghost text-neutral font-semibold sm:text-lg`}
              >
                Hair
              </Link>
            </li>
            <li>
              <Link
                to="/male-grooming"
                className={`btn-ghost text-neutral font-semibold sm:text-lg`}
              >
                Male Grooming
              </Link>
            </li>
            <li className="menu-title pt-4 text-neutral">
              <span className="font-semibold">Me</span>
            </li>
            <li>
              <Link
                to="/about"
                className={`btn-ghost text-neutral font-semibold sm:text-lg`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`btn-ghost text-neutral font-semibold sm:text-lg`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
