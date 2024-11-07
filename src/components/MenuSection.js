import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { justifyContent } from "../utils/alignment";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Button } from "@material-tailwind/react";
const MenuSection = ({ blok }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY>95 && currentScrollY > lastScrollY) {
        setShowHeader(false); // Hide header on scroll down
      } else {
        setShowHeader(true); // Show header on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const aligment = justifyContent(blok.align);

  return (
    <div
      className={`flex flex-1 flex-col md:flex-row ${blok.marginTop} h-[95px]`}
      style={{ justifyContent: aligment }}
      {...storyblokEditable(blok)}
    >
      <div className={`fixed top-0 left-0 w-full z-50 transform transition-transform duration-300 h-[95px] bc-brandColor px-5 py-3 md:py-4 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}>
                <Logo></Logo>
                <div></div>
                <div></div>
                <Button>Hello</Button>
        <hi>Hello</hi>
        {/* {blok.item.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))} */}
      </div>
    </div>
  );
};

export default MenuSection;
