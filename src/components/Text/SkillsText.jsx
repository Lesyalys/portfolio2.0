import { motion } from "motion/react";
import { skills } from "../datas/dataSkulls";

export const SkillsText = () => {
  return (
    <div className="flex flex-col">
      {skills.map((items, index) => {
        return (
          <span
            key={index}
            className={`flex flex-row gap-2 items-center ${items.disign} m-1`}
          >
            <h1>
              <span className={`${items.icon}`}></span>
              {items.name} :
            </h1>
            <ul className="flex flex-row gap-2">
              {items.tools.map((itemT, indexT) => {
                return (
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    className={`text-white bg-${items.disign} border-2 p-1 rounded-xl `}
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
