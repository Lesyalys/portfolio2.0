export const Card = ({ project }) => {
  console.log(project);
  return (
    <ul className="md:grid grid-cols-2 gap-5">
      {project.map((item, index) => (
        <li key={index} className="rounded border-2 border-amber-100 p-4">
          <div>
            <h1 className="flex justify-between items-center">
              {item.title} | {item.role}
              <a
                href={item.link}
                className="mage--preview-circle-fill"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗
              </a>
            </h1>
            <p className="my-2">{item.description}</p>
            <ul className="flex flex-row gap-2 flex-wrap">
              {item.tags.map((tag, tagIndex) => (
                <li
                  key={tagIndex}
                  className="border-2 border-amber-200 px-2 py-1 rounded text-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};
