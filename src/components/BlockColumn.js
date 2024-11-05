import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { justifyContent } from "../utils/alignment";

const BlockColumn = ({ blok }) => {
  const aligment= justifyContent(blok.aItems)
  
  return (
    <div className={`flex flex-1 ${blok.fDirection} ${blok.marginTop} ${blok.xAlignment} ${blok.aItems} ${blok.padingLeft} ${blok.padingRight} `} 
    style={{alignItems:aligment}}
    {...storyblokEditable(blok)}>
      {blok.item.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};

export default BlockColumn;
