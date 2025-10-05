import { AboutText } from "./AboutText";
import { PublicText } from "./PublicText";
import { SkillsText } from "./SkillsText";
import { ContactText } from "./ContactText";
import { MyWorkText } from "./MyWorkText";

export const Text = ({ local }) => {
  //   console.log(local);

  const path = local.pathname || local;
  let text;
  switch (path) {
    case "/about":
      text = AboutText();
      break;
    case "/publication":
      text = PublicText();
      break;
    // case "/skills":
    //   text = SkillsText();
    //   break;
    case "/contact":
      text = ContactText();
      break;
    case "/myWork":
      text = SkillsText();
      break;
    default:
      text = AboutText();
      break;
  }
  return <>{text}</>;
};
