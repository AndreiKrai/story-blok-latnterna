import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Section = ({ blok }) => {
  return (
    <section
      {...storyblokEditable(blok)}
      class="flex items-center justify-center px-5 py-20 md:px-10 md:py-37"
    >
         {blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
     </section>
  );
};

export default Section;
