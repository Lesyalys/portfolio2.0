import { useState } from "react";
import { Link } from "react-router";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="container mx-auto px-6 py-4 pb-10">
      <div className="flex items-center justify-between backdrop-opacity-10 border-2  p-2 rounded">
        <span className="text-2xl font-bold gradient-text">Lesya</span>
        <button
          className="block md:!hidden line-md--menu"
          onClick={toggleMenu}
        ></button>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:block absolute md:static top-full left-0 right-0 mt-2 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row gap-4 p-4 md:p-0 bg-black md:bg-transparent border-2 md:border-0 rounded">
            <li>
              <Link
                to="/myWork"
                className="flex justify-center md:justify-start gap-2 hover:text-amber-200 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                My works
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex justify-center md:justify-start gap-2 hover:text-amber-200 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex justify-center md:justify-start gap-2 hover:text-amber-200 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
