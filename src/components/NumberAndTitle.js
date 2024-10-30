import { storyblokEditable } from "@storyblok/react";
import { tailwindTextColorClass } from "../utils/chooseColor";

const NumberAndTitle = ({ blok }) => {
  const textColor = tailwindTextColorClass(blok?.color);
  return (
    <div className="inline-flex flex-col ">
      <p
        className={`md:text-7xl text-8xl ${textColor}`}
        {...storyblokEditable(blok)}
      >
        {blok.title}
      </p>
      <p
        className={`md:text-2xl text-3xl  `}
        style={{ color: "rgb(20, 48, 25)",opacity:"0.5" }}
        {...storyblokEditable(blok)}
      >
        {blok.subtitle}
      </p>
    </div>
  );
};

export default NumberAndTitle;
