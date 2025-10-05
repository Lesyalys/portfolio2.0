import { Card } from "../ui/Card";

export const MyWork = () => {
  const works = [
    {
      title: "Shadulle plane fro aeropor",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management and secure payment processing.",
      tags: ["React", "Next.js", "TypeScript", "Stripe"],
      link: "https://tablo.nv-aero.ru/",
    },
    {
      title: "Shadulle plane fro aeropor",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management and secure payment processing.",
      tags: ["React", "Next.js", "TypeScript", "Stripe"],
      link: "https://tablo.nv-aero.ru/",
    },
  ];
  return (
    <div className="mt-5">
      <Card project={works} />
    </div>
  );
};
