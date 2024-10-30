import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Block = ({ blok }) => {
  return (
    <div className={`d-flex ${blok.marginTop}`} {...storyblokEditable(blok)}>
      {blok.item.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};

export default Block;
