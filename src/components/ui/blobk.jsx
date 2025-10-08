import { Text } from "../Text/Text";
import { motion } from "motion/react";

export const Block = ({ local, colors }) => {
    // console.log(colors)
    return (
        <div key={local.key} className="w-full flex flex-col">
            <div className={`h-70 rounded-2xl bg-gradient-to-r ${colors?.gradient} p-0.5 overflow-auto transition-colors`}>
                <div className="h-full rounded-[14px] bg-[#03060C] p-4 overflow-auto">
                    <Text local={local} />
                </div>
            </div>
            <ul className="flex flex-row gap-4  mt-2 ">
                <motion.li
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className={`li-styles border-2 ${colors?.button1} `}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                >
                    <button className={`li-button  ${colors?.button1} transition-colors `}>
                        <a
                            href="https://github.com/Lesyalys"
                            target="_blank"
                            className="flex items-center gap-1"
                        >
                            <span className="line-md--github-loop"></span>
                            GitHub
                        </a>
                    </button>
                </motion.li>
                <motion.li
                    className={`li-styles border-2 ${colors?.button2} `}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                >
                    <button className={`li-button ${colors?.button2}  transition-colors`}>
                        <a
                            href="https://www.artstation.com/lesssya4"
                            target="_blank"
                            className="flex items-center gap-1"
                        >
                            <span className="mdi--artstation "></span>
                            Artstation
                        </a>
                    </button>
                </motion.li>
            </ul>
        </div>
    );
};
