import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const GreyCard = ({ blok }) => (
  <div
    className="text-center flex flex-col items-center m-2"
    style={{
      backgroundColor: "#f3f4f5",
      paddingTop: 40,
      paddingRight: 32,
      paddingBottom: 80,
      paddingLeft: 32,
    }}
    {...storyblokEditable(blok)}
  >
    <img src={blok.imgSourse} alt={blok.imgAlt} width={"80"}></img>
    <h3 className={`lg:text-4xl text-3xl text-primaryTextColor mt-6`}>
      {blok.title}
    </h3>
    <div className="text-start mt-4">
      {blok.item.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  </div>
);

export default GreyCard;
