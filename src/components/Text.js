import {  storyblokEditable } from "@storyblok/react";


const Text = ({ blok }) => {
  return (
    <p
      className={`${blok.color} ${blok.textSize} ${blok.marginTop}`}
      {...storyblokEditable(blok)}
    >
      {blok.text}
    </p>
  );
};

export default Text;
