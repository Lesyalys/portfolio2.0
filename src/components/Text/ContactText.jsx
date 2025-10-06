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
      <ul className="flex flex-row gap-5 mt-10 [&>li]:p-5 [&>li]:border-[#6f2d66] [&>li]:rounded">
        <li className="border-2 ">
          <p>mail</p>
          <a type="mialto" target="_blank">nya.olesya@bk.ru</a>
        </li>
        <li className="border-2">
          <p>telegramm</p>
          <a href="@ctrcctrvv" target="_blank">@ctrcctrvv</a>
        </li>
      </ul>
    </motion.div>
  );
};
