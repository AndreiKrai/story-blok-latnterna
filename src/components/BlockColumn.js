import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const BlockColumn = ({ blok }) => {
  
  return (
    <div className={`flex flex-1 ${blok.fDirection} ${blok.marginTop} ${blok.xAlignment} ${blok.aItems} ${blok.padingLeft} ${blok.padingRight} `} 
    // style={{ justifyContent: blok.align }}
    {...storyblokEditable(blok)}>
      {blok.item.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};

export default BlockColumn;
