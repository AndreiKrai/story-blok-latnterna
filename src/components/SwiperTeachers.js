import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { storyblokEditable } from "@storyblok/react";
import TeacherCard from "./TeacherCard";

const SwiperTeachers = ({ blok }) => {
  const teachers = [
    {
      src: "https://a.storyblok.com/f/311112/1714x2560/aed4752fc5/justyna_przychodzen-justyna-pr-scaled-1.webp",
      alt: "First image",
      title: "Justyna P",
      text: "Justyna has been teaching for over 15 years and has a wealth of experience, but has always had a passion for travel – she teaches Lanterna students so she can connect with students all around the world, making her own teaching style more diverse in the process!",
      year: "16",
      subject: " Business and Economics",
      together: "3",
      favorite: " Achieving that ‘aha’ moment!",
    },
    {
      src: "https://a.storyblok.com/f/311112/419x395/cebc0d62eb/zainab-zainab-unwala.webp",
      alt: "First image",
      title: "Justyna P",
      text: "Justyna has been teaching for over 15 years and has a wealth of experience, but has always had a passion for travel – she teaches Lanterna students so she can connect with students all around the world, making her own teaching style more diverse in the process!",
      year: "16",
      subject: " Business and Economics",
      together: "3",
      favorite: " Achieving that ‘aha’ moment!",
    },

    {
      src: "https://a.storyblok.com/f/311112/1904x2347/b8d40b1ef5/turgay-turgay-uzuncakmak-1.webp",
      alt: "First image",
      title: "Justyna P",
      text: "Justyna has been teaching for over 15 years and has a wealth of experience, but has always had a passion for travel – she teaches Lanterna students so she can connect with students all around the world, making her own teaching style more diverse in the process!",
      year: "16",
      subject: " Business and Economics",
      together: "3",
      favorite: " Achieving that ‘aha’ moment!",
    },

    {
      src: "https://a.storyblok.com/f/311112/1714x2560/aed4752fc5/justyna_przychodzen-justyna-pr-scaled-1.webp",
      alt: "First image",
      title: "Justyna P",
      text: "Justyna has been teaching for over 15 years and has a wealth of experience, but has always had a passion for travel – she teaches Lanterna students so she can connect with students all around the world, making her own teaching style more diverse in the process!",
      year: "16",
      subject: " Business and Economics",
      together: "3",
      favorite: " Achieving that ‘aha’ moment!",
    },

    {
      src: "https://a.storyblok.com/f/311112/543x817/ceb3364b62/snimka-zaslona-2021-11-04-155810-marija-lovric.webp",
      alt: "First image",
      title: "Justyna P",
      text: "Justyna has been teaching for over 15 years and has a wealth of experience, but has always had a passion for travel – she teaches Lanterna students so she can connect with students all around the world, making her own teaching style more diverse in the process!",
      year: "16",
      subject: " Business and Economics",
      together: "3",
      favorite: " Achieving that ‘aha’ moment!",
    },
    {
      src: "https://a.storyblok.com/f/311112/468x435/25fde31d5a/me-peter-round.webp",
      alt: "First image",
      title: "Justyna P",
      text: "Justyna has been teaching for over 15 years and has a wealth of experience, but has always had a passion for travel – she teaches Lanterna students so she can connect with students all around the world, making her own teaching style more diverse in the process!",
      year: "16",
      subject: " Business and Economics",
      together: "3",
      favorite: " Achieving that ‘aha’ moment!",
    },
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      className="custom-swiper  "
      style={{
        paddingTop: 30,
        paddingBottom: 40,
        position:"relative"
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      {...storyblokEditable(blok)}
    >
      {teachers.map((blok, index) => (
        <SwiperSlide key={index}>
          <TeacherCard blok={blok} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperTeachers;
