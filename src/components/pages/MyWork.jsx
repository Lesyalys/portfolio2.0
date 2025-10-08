import { Card } from "../ui/Card";
import { works } from "../datas/dataWork";

export const MyWork = () => {
  return (
    <div className="mt-5">
      <Card project={works} />
    </div>
  );
};
