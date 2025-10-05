import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 px-2 z-50 backdrop-blur-md">
      <div className="flex items-center justify-between backdrop-opacity-10   p-2 rounded">
        <span className="text-2xl font-bold gradient-text">Lesya</span>

        <motion.button
          className="block md:!hidden line-md--menu"
          onClick={toggleMenu}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        ></motion.button>
        <div className="hidden md:block">
          <ul className="flex flex-row gap-6">
            <li>
              <Link
                to="/myWork"
                className="hover:text-[#2E2D6F] transition-colors"
              >
                My works
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#2E2D6F] transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#2E2D6F] transition-colors"
              >
                About me
              </Link>
            </li>
          </ul>
        </div>
        <motion.div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:block absolute  top-full left-0 right-0 mt-2 md:mt-0`}
        >
          <motion.ul
            className=" flex flex-col md:flex-row  gap-4 p-4 md:p-0 bg-[#03060cec] md:bg-transparent  rounded"
            variants={containerVariants}
            initial="closed"
            animate={menuOpen ? "open" : "closed"}
          >
            <motion.li variants={itemVariants}>
              <Link
                to="/myWork"
                className="flex justify-center md:justify-start gap-2 hover:text-[#2E2D6F] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                My works
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link
                to="/contact"
                className="flex justify-center md:justify-start gap-2 hover:text-[#2E2D6F] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link
                to="/about"
                className="flex justify-center md:justify-start gap-2 hover:text-[#2E2D6F] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About me
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  );
};
