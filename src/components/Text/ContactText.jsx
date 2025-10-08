import { motion } from "motion/react";
export const ContactText = ({ local }) => {
  return (
    <motion.div
      key={local.key}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className=" font-bold mb-6 text-balance"
    >
      <h1>You can conect with me</h1>
      <ul className="flex flex-row gap-5 mt-10 [&>li]:p-5 [&>li]:border-[#6f2d66] [&>li]:rounded-xl">
        <li className="border-2 ">
          <a a href="mailto:nya.olesya@bk.ru" target="_blank">
            <p className="flex flex-row items-center gap-3">
              <span className="material-symbols--mail-outline"></span>
              mail
            </p>
            nya.olesya@bk.ru</a>
        </li>
        <li className="border-2">
          <a href="https://t.me/ctrcctrvv" target="_blank">

            <p className="flex flex-row items-center gap-3">
              <span className="line-md--telegram"></span>
              telegramm
            </p>
            @ctrcctrvv</a>
        </li>
      </ul>
    </motion.div>
  );
};
