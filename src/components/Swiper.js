import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const SwiperComponent = ({ blok }) => {
  const images = [
    {
      src: "https://a.storyblok.com/f/311112/300x300/ea3d3ecc08/nis.webp",
      alt: "First image",
    },
    {
      src: "https://a.storyblok.com/f/311112/1324x255/8bfc11f953/ish.webp",
      alt: "Second image",
    },
    {
      src: "https://a.storyblok.com/f/311112/1024x637/edb07ef565/lg.webp",
      alt: "Third image",
    },
    {
      src: "https://a.storyblok.com/f/311112/1000x275/dbed43ef18/icsz.webp",
      alt: "Third image",
    },
    {
      src: "https://a.storyblok.com/f/311112/1024x436/2a5ae768f8/bis.svg",
      alt: "Third image",
    },
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      style={{
        paddingTop: 30,
        paddingLeft: 60,
        paddingRight: 60,
        paddingBottom: 40,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      {...storyblokEditable(blok)}
    >
      {/* {blok.item.map((blok) => (
        <SwiperSlide key={blok._uid}>
          <div className="flex justify-center">
            <StoryblokComponent blok={blok} />
          </div>
        </SwiperSlide>
      ))} */}

      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className=" h-[56px] md:h-[80px] w-auto row_poster"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
