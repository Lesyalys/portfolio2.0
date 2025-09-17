import { AboutText } from "./AboutText";
import { PublicText } from "./PublicText";
import { SkillsText } from "./SkillsText";
import { ContactText } from "./ContactText";

export const Text = ({ local }) => {
    // console.log(local.pathname)
    const path = local.pathname;
    let text;
    switch (path) {
        case "/about":
            text = AboutText();
            break;
        case "/publication":
            text = PublicText();
            break;
        case "/skills":
            text = SkillsText();
            break;
        case "/contact":
            text = ContactText();
            break;
        default:
            text = AboutText();
            break;
    }
    return (
        <>{text}</>
    )
}