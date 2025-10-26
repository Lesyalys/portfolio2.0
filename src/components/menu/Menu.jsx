import { ContentText } from "../Text/ContentText";

export const Menu = ({ local }) => {
  return (
    <div className="flex flex-row gap-10 pb-10 items-center">
      <ContentText local={local} />
    </div>
  );
};
