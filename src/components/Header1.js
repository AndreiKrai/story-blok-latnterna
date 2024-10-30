import { storyblokEditable } from "@storyblok/react";
import { tailwindTextColorClass } from "../utils/chooseColor";
 
const Header1 = ({ blok }) => {
  console.log('q',blok?.color);
  const textColor = tailwindTextColorClass(blok?.color)
  return (
    <h2 className={`lg:text-6xl text-5xl ${textColor}`} {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
    
  );
};

export default Header1;
