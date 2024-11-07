import { storyblokEditable } from "@storyblok/react";
import { tailwindTextColorClass } from "../utils/chooseColor";

const CheckmarkWithTitle = ({ blok }) => {
  const textColor = tailwindTextColorClass(blok?.textColor);

  return (
    <div
      className={`${textColor} ${blok.marginTop} flex flex-col items-center `}
      style={{maxWidth:150}}
      {...storyblokEditable(blok)}
    >
      <img src={blok.sourse} alt="checkmark" width="20"></img>
      <p className="text-lg font-bold">{blok.text}</p>
    </div>
  );
};

export default CheckmarkWithTitle;
