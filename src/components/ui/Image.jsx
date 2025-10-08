import { motion } from "motion/react";
export const Image = ({ local, colors }) => {
    // console.log(local?);
    // let return "";
    const getImageProps = () => {
        switch (local?.pathname) {
            case "/about":
                return {
                    src: "./3dAi.png",
                    alt: "About Profile"
                };
            case "/contact":
                return {
                    src: "./3dAi.png",
                    alt: "Contact Profile"
                };
            case "/myWork":
                return {
                    src: "./3dAi.png",
                    alt: "My Work Profile"
                };
            case "/conferences":
                return {
                    src: "./3dAi.png",
                    alt: "My Work Profile"
                };
            case "/":
                return {
                    src: "./3dAi.png",
                    alt: "My Work Profile"
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
            <span className="py-3">
                <ul>
                    <li>
                        <a href="https://2gis.ru/nizhnevartovsk" target="_blank" className={`${colors?.link} transition-colors`}>
                            Nisnevartovsk
                        </a>
                    </li>
                    <li>MSK +2</li>
                </ul>
            </span>
        </div>
    )
}