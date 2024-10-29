import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="column feature" style={{color:'red'}}>
    {blok.name}
  </div>
);

export default Feature;
