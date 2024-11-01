import { storyblokEditable } from "@storyblok/react";
import { tailwindTextColorClass } from "../utils/chooseColor";

const Header = ({ blok }) => {
  const textColor = tailwindTextColorClass(blok?.color);

  let element;
  switch (blok.size) {
    case "h2":
      element = (
        <h2
          className={`lg:text-6xl text-5xl ${textColor} ${blok.marginTop}`}
          {...storyblokEditable(blok)}
        >
          {blok.headline}
        </h2>
      );
      break;
    case "h3":
      element = (
        <h3
          className={`lg:text-4xl text-3xl ${textColor} ${blok.marginTop}`}
          {...storyblokEditable(blok)}
        >
          {blok.headline}
        </h3>
      );
      break;
    default:
      element = (
        <h1
          className={`lg:text-6xl text-5xl ${textColor} ${blok.marginTop}`}
          {...storyblokEditable(blok)}
        >
          {blok.headline}
        </h1>
      );
      break;
  }

  return element;
};

export default Header;
