import Navbar from "@/components/Layouts/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const heroImage = [
  {
    image: "/hero-images/hero-image-1.webp",
    title: "Welcome to our Guitar Shop",
    description:
      "Discover a wide selection of high-quality guitars to enhance your playing experience.",
  },
  {
    image: "/hero-images/hero-image-2.webp",
    title: "Explore our Guitar Collections",
    description:
      "Discover a diverse range of hight-quality guitars. Find the perfect sound that matches your style and take your music to the next level",
  },
  {
    image: "/hero-images/hero-image-3.webp",
    title: "Unleash Your Musical Potential",
    description:
      "Discover guitars that inspire your creativity and elevate your performance. Our collection is designed for every musician looking to make their mark",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        autoplay={{ delay: 7000 }}
        pagination={{ clickable: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="relative mt-[3.6rem] md:mt-[4.5rem] md:w-full md:h-screen"
      >
        {heroImage.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={slide.image}
                alt=""
                className="w-full h-[350px] md:w-full md:h-full"
              />
              <div className="text-black w-full px-6 py-6 md:absolute md:top-[35%] md:left-20 md:max-w-md md:text-white md:py-0 md:px-0">
                <h1 className="font-semibold text-2xl md:text-3xl  md:drop-shadow-xl">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-lg md:drop-shadow-lg">
                  {slide.description}
                </p>
                <Button asChild className="mt-3">
                  <Link to="/products">Explore Now</Link>
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
