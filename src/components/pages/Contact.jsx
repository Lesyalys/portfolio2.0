import { motion } from "motion/react";
export const Contact = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="flex md:flex-row flex-col gap-5"
    >
      <div className="w-[50%] border-2 border-amber-200">
        <p>fsdfs</p>
      </div>
      <ul>
        <li>
          <div className=" border-2 border-amber-200">
            <p>fsdfs</p>
          </div>
        </li>
        <li>
          <div className=" border-2 border-amber-200">
            <p>fsdfs</p>
          </div>
        </li>
      </ul>
    </motion.div>
  );
};
