export const SkillsText = () => {
  const skillsDisigner = [
    {
      name: "Disigner",
      tools: ["Figma", "AdobePhotoshop", "Rive"],
    },
  ];
  const skillsTools = [
    {
      name: "Tools",
      tools: ["Git", "GitHub", "Tailwindcss", "Express"],
    },
  ];
  const skillsDeveloper = [
    {
      name: "Developer",
      tools: ["HTML", "CSS", "JavaScript", "NodeJS", "React"],
    },
  ];
  return (
    <div className="flex flex-col">
      {skillsDeveloper.map((items, index) => {
        return (
          <span key={index} className="flex flex-row gap-2 items-center">
            <h1>{items.name} :</h1>
            <ul className="flex flex-row gap-2">
              {items.tools.map((itemT, indexT) => {
                return <li key={indexT}>{itemT}</li>;
              })}
            </ul>
          </span>
        );
      })}
      {skillsDisigner.map((items, index) => {
        return (
          <span key={index} className="flex flex-row gap-2 items-center">
            <h1>{items.name} :</h1>
            <ul className="flex flex-row gap-2">
              {items.tools.map((itemT, indexT) => {
                return <li key={indexT}>{itemT}</li>;
              })}
            </ul>
          </span>
        );
      })}

      {skillsTools.map((items, index) => {
        return (
          <span key={index} className="flex flex-row gap-2 items-center">
            <h1>{items.name} :</h1>
            <ul className="flex flex-row gap-2">
              {items.tools.map((itemT, indexT) => {
                return <li key={indexT}>{itemT}</li>;
              })}
            </ul>
          </span>
        );
      })}
    </div>
  );
};
