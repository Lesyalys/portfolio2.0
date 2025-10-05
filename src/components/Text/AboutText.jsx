import { motion } from "motion/react";
export const AboutText = () => {
  return (
    <>
      <motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="text-start"
      >
        <h1>Lesya Valentuychevich</h1>
        <p>fdfd</p>
      </motion.span>
      <motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <h2>dasdas1</h2>
        <span>
          Passionate developer with expertise in building modern web
          applications. Specialized in React, Next.js, and creating beautiful
          user experiences with cutting-edge technologies.
        </span>
      </motion.span>
    </>
  );
};
