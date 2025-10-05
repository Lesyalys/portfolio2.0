import { motion } from "motion/react";
export const ContactText = () => {
  return (
    <motion.h1
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="text-5xl md:text-7xl font-bold mb-6 text-balance"
    >
      You can conect with me
    </motion.h1>
  );
};
