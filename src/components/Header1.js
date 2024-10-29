import { storyblokEditable } from "@storyblok/react";

const Header1 = ({ blok }) => {
  return (
    <h2 class="text-white  lg:text-6xl text-5xl" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
    
  );
};

export default Header1;
