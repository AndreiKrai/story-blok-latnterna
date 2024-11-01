import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Block = ({ blok }) => {
  return (
    <div
      className={`flex flex-1 flex-col md:flex-row ${blok.marginTop} ${blok.align}`}
      {...storyblokEditable(blok)}
    >
      {blok.item.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};

export default Block;
