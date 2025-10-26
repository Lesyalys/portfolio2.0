import { motion } from "motion/react";
export const Image = ({ local, colors }) => {
  // console.log(local?);
  // let return "";
  const getImageProps = () => {
    switch (local?.pathname) {
      case "/about":
        return {
          src: "./me1.jpg",
          alt: "About Profile",
        };
      case "/contact":
        return {
          src: "./me1.jpg",
          alt: "Contact Profile",
        };
      case "/myWork":
        return {
          src: "./me1.jpg",
          alt: "My Work Profile",
        };
      case "/conferences":
        return {
          src: "./me1.jpg",
          alt: "My Work Profile",
        };
      case "/":
        return {
          src: "./me1.jpg",
          alt: "My Work Profile",
        };
    }
  };

  const imageProps = getImageProps();
  return (
    <div className="flex flex-col px-5 md:items-start items-center">
      <motion.img
        key={local?.key}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        src={imageProps?.src}
        alt={imageProps?.alt}
        className="rounded-full border-3 self-center md:self-start object-cover w-25 h-25 md:w-45 md:h-40"
      />

      <div className="w-full flex flex-col items-center justify-center pt-1">
        <h2>Lesya</h2>

        <div className="w-full flex items-center justify-center rounded-xl p-1">
          <ul className="">
            <li className="hover:text-pink-300 transition-all flex gap-1 items-center cursor-pointer">
              <a href="https://2gis.ru/nizhnevartovsk" target="_blank">
                <span className="akar-icons--location"></span>
                <span>Nizhnevartovsk, Russia</span>
              </a>
            </li>
            <li className="flex gap-1 items-center ">
              <span className="ion--time-outline "></span>
              <span>MSK+2 (UTC+5)</span>
            </li>
            <li className=" flex gap-1">
              <span className="flowbite--code-outline"></span>
              <span>Frontend | UX/UI</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
