import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const SectionWithVideo = ({ blok }) => {
  return (
    <section
      {...storyblokEditable(blok)}
      class="h-[500px] xl-h-[609px] flex items-center justify-center relative"
    >
      <div class="absolute w-full h-[500px] xl-h-[609px] overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          class="absolute inset-0 w-full h-full object-cover"
          //   className="video-background"
        >
          <source src={blok.sourse} type="video/mp4" />
          {/* Ensure blok has videoSrc */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center">
        {blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </section>
  );
};

export default SectionWithVideo;
