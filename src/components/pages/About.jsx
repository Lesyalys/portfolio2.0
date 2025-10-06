import { motion } from "motion/react";
export const About = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
    >
      {/* <span>
        <h2>Sertificats</h2>
        <ul>
          <li>
            <span className="border-2">fsfe</span>
          </li>
        </ul>
      </span> */}
    </motion.div>
  );
};
