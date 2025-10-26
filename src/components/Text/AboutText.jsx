import { motion } from "motion/react";
import { Link } from "react-router";
export const AboutText = ({ local }) => {
  return (
    <>
      <motion.span
        key={local}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="text-start"
      >
        <h1 className="font-bold py-5 pb-5 pt-3 pl-3 text-2xl">
          Lesya Valentuychevich
        </h1>
        <ul className="[&>li]:pb-2 [&>li]:last:pb-0">
          <li>
            <p className="flex items-center gap-1">
              <span className=" ph--student text-[#1976d2]  p-1 rounded-lg"></span>
              I am a 3rd year student at
              <a
                target="_blank"
                href="https://nvsu.ru/"
                className="hover:text-[#1976d2] transition-colors border-2 border-[#1976d2] rounded-2xl p-1  flex justify-center gap-2"
              >
                Nizhnevartovsk State University
                <span className="line-md--external-link"></span>
              </a>
              majoring in Information Technologies
            </p>
          </li>
          <li>
            <p className="flex items-center gap-1">
              <span className="text-[#00db00] flowbite--school-outline "></span>
              I am a student at
              <a
                target="_blank"
                href="https://21-school.ru/"
                className="hover:text-[#00db00] transition-colors border-2 border-[#00db00] rounded-2xl p-1  flex justify-center gap-2"
              >
                Sberbank 21.
                <span className="line-md--external-link"></span>
              </a>
            </p>
          </li>
          <li>
            <p className="flex items-center gap-1">
              <span className="text-purple-400 ic--round-people"></span>I
              participate in
              <Link
                to="/conferences"
                className="
                hover:text-purple-400 transition-colors border-2 border-purple-400 rounded-2xl p-1 flex justify-end gap-2"
              >
                conferences
                <span className="majesticons--more-menu"></span>
              </Link>
              meetings
            </p>
          </li>
        </ul>
      </motion.span>
    </>
  );
};
