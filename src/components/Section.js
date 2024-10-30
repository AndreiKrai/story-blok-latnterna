import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Section = ({ blok }) => {
  return (
    <section
      {...storyblokEditable(blok)}
      class="text-center px-5 py-20 md:px-10 md:py-[150px]"
      style={{backgroundColor: blok.backgroundColor}}
    >
         {blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
     </section>
  );
};

export default Section;
