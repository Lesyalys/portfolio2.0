import { Card } from "../ui/Card";

export const MyWork = () => {
  const works = [
    {
      title: "Shadulle plane fro aeropor",
      role: "Developer",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management and secure payment processing.",
      tags: ["JavaScript", "React", "NodeJS", "Tailwindcss"],
      link: "https://tablo.nv-aero.ru/",
    },
    {
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
