import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Grid = ({ blok }) => {
  // let justifyContent;

  // switch (blok.align) {
  //   case "space-around":
  //     justifyContent="space-around"
  //     break;
  //     case "center":
  //     justifyContent="center"
  //     break;
  //   default:justifyContent="center"
  //     break;
  // }
  return (
    <div
      style={{ display: "flex", justifyContent: blok.align }}
      {...storyblokEditable(blok)}
      className="grid"
    >
      {blok.columns.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};

export default Grid;
