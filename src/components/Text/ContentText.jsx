import { AboutText } from "./AboutText";
import { PublicText } from "./PublicText";
import { SkillsText } from "./SkillsText";
import { ContactText } from "./ContactText";
import { MyWorkText } from "./MyWorkText";

export const ContentText = ({ local }) => {
  // console.log(local.pathname);

  const path = local?.pathname || "/";
  let text;
  switch (path) {
    case "/about":
      text = <AboutText local={local} />;
      break;
    case "/publication":
      text = <PublicText local={local} />;
      break;
    case "/contact":
      text = <ContactText local={local} />;
      break;
    case "/myWork":
      text = <SkillsText local={local} />;
      break;
    default:
      text = <AboutText local={local} />;
      break;
  }

  return <>{text}</>;
};
