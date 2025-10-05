import { Card } from "../ui/Card";

export const MyWork = () => {
  const works = [
    {
      colorBorder: "border-[#2E2D6F] hover:bg-[#2E2D6F] transition-colors ",
      colorBorderHover: "hover:border-[#2E2D6F] hover:shadow-[#2E2D6F]-200",
      colorBg: "bg-linear-to-r from-[#03060C] to-[#2E2D6F]",
      title: "Shadulle plane fro aeropor",
      role: "Developer",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management and secure payment processing.",
      tags: ["JavaScript", "React", "NodeJS", "Tailwindcss"],
      link: "https://tablo.nv-aero.ru/",
    },
    {
      colorBorder: "border-[#00aab5] hover:bg-[#00aab5] transition-colors",
      colorBorderHover: "hover:border-[#00aab5] hover:shadow-[#00aab5]-200",
      colorBg: "bg-linear-to-r from-[#03060C] to-[#00aab5]",
      title: "Visual novella",
      role: "Disigner",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management and secure payment processing.",
      tags: ["Figma", "Rive", "Adobe photoshop"],
      link: "https://web.telegram.org/k/#@gigabidzeBot",
    },
  ];
  return (
    <div className="mt-5">
      <Card project={works} />
    </div>
  );
};
