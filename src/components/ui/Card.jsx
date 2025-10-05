import { motion } from "motion/react";

export const Card = ({ project }) => {
  return (
    <ul className="md:grid grid-cols-2 gap-5">
      {project.map((item, index) => (
        <motion.li
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover={{
            y: -4,
          }}
          key={index}
          className={`${item.colorBg} hover:shadow-[0_0_20px_rgba(46,45,111,0.3)]  border-transparent cursor-pointer rounded-2xl border-2 ${item.colorBorderHover} transition-colors p-4 md:mb-0 mb-5 last:mb-0`}
        >
          <div>
            <h1 className="flex justify-between items-center">
              {item.title} | {item.role}
              <motion.a
                href={item.link}
                className="mage--preview-circle-fill"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                🔗
              </motion.a>
            </h1>
            <p className="my-2">{item.description}</p>
            <ul className="flex flex-row gap-2 flex-wrap">
              {item.tags.map((tag, tagIndex) => (
                <motion.li
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  key={tagIndex}
                  className={`border-2 ${item.colorBorder} px-2 py-1 rounded-2xl text-sm`}
                >
                  {tag}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};
