import { Text } from "../Text/Text";
import { motion } from "motion/react";

export const Block = ({ local }) => {
  return (
    <div className="w-full flex flex-col">
      <div className=" h-70 p-2 rounded-2xl border-2  overflow-auto">
        <Text local={local} />
      </div>
      <ul className="flex flex-row gap-4  mt-1">
        <motion.li
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="li-styles border-2 border-[#2E2D6F]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <button className="li-button hover:text-[#2E2D6F] transition-colors">
            <span className="line-md--github-loop"></span>
            <a href="https://github.com/Lesyalys" target="_blank">
              GitHub
            </a>
          </button>
        </motion.li>
        <motion.li
          className="li-styles border-2 border-[#024954]"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <button className="li-button hover:text-[#024954] transition-colors">
            <span className="mdi--artstation"></span>
            <a href="https://www.artstation.com/lesssya4" target="_blank">
              Artstation
            </a>
          </button>
        </motion.li>
      </ul>
    </div>
  );
};
