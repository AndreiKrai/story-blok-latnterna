import { storyblokEditable } from "@storyblok/react";

const ButtonLink = ({ blok }) => {
  // Determine background and text color based on Storyblok data
  const buttonColor = blok.backgroundColor === 'brand' ? 'bg-brandColor' : 'bg-darkBrandColor';
  const buttonTextColor = blok.color === 'primaryTextColor' ? 'text-primaryTextColor' : 'text-secondaryTextColor';

  return (
       <a
        href={blok.href}
        className={`inline-flex h-[36px] justify-center items-center px-9   hover:bg-opacity-80 transition duration-300 rounded ${buttonColor} ${buttonTextColor} ${blok.marginTop}`}
        {...storyblokEditable(blok)}
      >
        {blok.title}
      </a>
   );
};

export default ButtonLink;

