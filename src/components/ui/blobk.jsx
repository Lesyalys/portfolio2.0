import { Text } from "../Text/Text";

export const Block = ({ local }) => {
  return (
    <div className="w-full flex flex-col">
      <div className=" h-60 p-2 rounded border-2 border-white overflow-auto">
        <Text local={local} />
      </div>
      <ul className="flex flex-row gap-4  mt-auto">
        <li className="li-styles">
          <button className="li-button ">
            <span className="line-md--github-loop"></span>
            <a href="https://github.com/Lesyalys" target="_blank">
              GitHub
            </a>
          </button>
        </li>
        <li className="li-styles">
          <button className="li-button ">
            <span className="mdi--artstation"></span>
            <a href="https://www.artstation.com/lesssya4" target="_blank">
              Artstation
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
};
