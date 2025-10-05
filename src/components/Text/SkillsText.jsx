import { motion } from "motion/react";
import { skills } from "../datas/dataSkulls";

export const SkillsText = () => {
  return (
    <div className="flex flex-col">
      {skills.map((items, index) => {
        return (
          <span
            key={index}
            className={`flex flex-col gap-2 font-bold items-start ${items.color} m-1`}
          >
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex items-center gap-2 "
            >
              <span className={`${items.icon}`}></span>
              {items.name}
            </motion.h1>
            <ul className="flex flex-row gap-2">
              {items.tools.map((itemT, indexT) => {
                return (
                  <motion.li
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    className={`flex ${itemT.color}  gap-1 items-center cursor-pointer text-white ${items.color} border-2 ${items.borderColor} hover:drop-shadow-2xl hover:${items.shadowColor} p-1 rounded-xl `}
                    key={indexT}
                  >
                    <span className={`${itemT.icon} `}></span>
                    {itemT.name}
                  </motion.li>
                );
              })}
            </ul>
          </span>
        );
      })}
    </div>
  );
};
