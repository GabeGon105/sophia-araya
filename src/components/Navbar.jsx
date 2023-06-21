import { Link } from "react-router-dom";

export default function Navbar({ page }) {
  return (
    <header className="navbar bg-base-100 sticky top-0 z-20">
      <div className="navbar-start">
        <Link
          to="/about"
          className="btn btn-ghost normal-case text-neutral pb-2"
        >
          <h2 className="flex flex-col text-2xl">
            Sophia Araya
            <span className="text-xs">Makeup + Hair</span>
          </h2>
        </Link>
      </div>
      <div className="navbar-end">
        {/* Desktop menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
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
              <ul className="p-2 bg-base-100">
                <li>
                  <Link
                    to="/beauty"
                    className={`${
                      page === "beauty" && "btn-active"
                    } btn-ghost text-neutral font-semibold sm:text-lg`}
                  >
                    Beauty
                  </Link>
                </li>
                <li>
                  <Link
                    to="/fashion"
                    className={`${
                      page === "fashion" && "btn-active"
                    } btn-ghost text-neutral font-semibold sm:text-lg`}
                  >
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hair"
                    className={`${
                      page === "hair" && "btn-active"
                    } btn-ghost text-neutral font-semibold sm:text-lg`}
                  >
                    Hair
                  </Link>
                </li>
                <li>
                  <Link
                    to="/male-grooming"
                    className={`${
                      page === "male-grooming" && "btn-active"
                    } btn-ghost text-neutral font-semibold sm:text-lg`}
                  >
                    Male Grooming
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/about"
                className={`${
                  page === "about" && "btn-active"
                } btn-ghost text-neutral font-semibold sm:text-lg`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${
                  page === "contact" && "btn-active"
                } btn-ghost text-neutral font-semibold sm:text-lg`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Mobile dropdown menu */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
                fill="#000000"
              />
              <path
                d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
                fill="#000000"
              />
              <path
                d="M11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H11Z"
                fill="#000000"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="menu-title">
              <span className="text-neutral font-semibold sm:text-lg">
                Portfolio
              </span>
            </li>
            <li>
              <Link
                to="/beauty"
                className={`${
                  page === "beauty" && "btn-active"
                } btn-ghost text-neutral font-semibold sm:text-lg`}
              >
                Beauty
              </Link>
            </li>
            <li>
              <Link
                to="/fashion"
                className={`${
                  page === "fashion" && "btn-active"
                } btn-ghost text-neutral font-semibold sm:text-lg`}
              >
                Fashion
              </Link>
            </li>
            <li>
              <Link
                to="/hair"
                className={`${
                  page === "hair" && "btn-active"
                } btn-ghost text-neutral font-semibold sm:text-lg`}
              >
                Hair
              </Link>
            </li>
            <li>
              <Link
                to="/male-grooming"
                className={`${
                  page === "male-grooming" && "btn-active"
                } btn-ghost text-neutral font-semibold sm:text-lg`}
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
                className={`${
                  page === "about" && "btn-active"
                } btn-ghost text-neutral font-semibold sm:text-lg`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${
                  page === "contact" && "btn-active"
                } btn-ghost text-neutral font-semibold sm:text-lg`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
