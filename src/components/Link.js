import { storyblokEditable } from "@storyblok/react";

const Link = ({ blok }) => {
  let textSizeClass;

  switch (blok.size) {
    case "big":
      textSizeClass = "lg:text-3xl text-4xl  underline hover:no-underline mt-6 mx-1";
      break;
    case "medium":
      textSizeClass = "text-2xl lg:text-3xl  underline hover:no-underline mt-5 mx-1";
      break;
    case "small":
      textSizeClass = "lg:text-1xl text-2xl underline hover:no-underline mt-4 mx-1";
      break;
    default:
      textSizeClass = "lg:text-2xl text-3xl underline hover:no-underline mt-5 mx-1";
      break;
  }
  return (
    <a
      className={`text-white ${textSizeClass}`}
      href={blok.href}
      {...storyblokEditable(blok)}
    >
      {blok.title}
    </a>
  );
};

export default Link;
