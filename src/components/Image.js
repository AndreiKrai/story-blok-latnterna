import { storyblokEditable } from "@storyblok/react";

const Image = ({ blok }) => (
  <img
    {...storyblokEditable(blok)}
    className={blok.marginTop}
    src={blok.sourse}
    alt={blok.alt}
    width={blok.width}
  ></img>
);
export default Image;
