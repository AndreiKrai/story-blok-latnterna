import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { justifyContent } from "../utils/alignment";

const Block = ({ blok }) => {
const aligment= justifyContent(blok.align)
  return (
    <div
      className={`flex flex-1 flex-col md:flex-row ${blok.marginTop}`}
      style={{justifyContent:aligment}}
      {...storyblokEditable(blok)}
    >
      {blok.item.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};

export default Block;
