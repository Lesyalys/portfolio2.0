import { Text } from "../Text/Text";

export const Menu = ({ local }) => {
  return (
    <div className="flex flex-row gap-10 pb-10 items-center">
      <Text local={local} />
    </div>
  );
};
