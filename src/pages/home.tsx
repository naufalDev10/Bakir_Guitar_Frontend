import Navbar from "@/components/Layouts/Navbar";
import Hero from "@/components/Organisms/Hero";
import ProductCarousel from "@/components/Organisms/ProductCarousel";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsStarFill } from "react-icons/bs";

const costumerReviews = [
  {
    id: 1,
    costumerName: "John Doe",
    review:
      "This guitar is amazing! The sound is clear and comfortable to play, especially for a beginner like me. The build quality is also solid, it doesn't feel cheap. Fast delivery and well packaged. Very satisfied with this purchase!",
    rating: 5,
  },
  {
    id: 2,
    costumerName: "Michael Smith",
    review:
      "This guitar has good sound quality for the price. It's comfortable to play, especially for fingerstyle. However, the default strings are a bit loud, so I had to replace them with softer ones. Overall, still recommended for beginners!!",
    rating: 5,
  },
  {
    id: 3,
    costumerName: "David Johnson",
    review:
      "This guitar really lives up to my expectations. The sound quality is great, the body feels premium for this price. The only downside was that the initial setup was less than optimal, so I had to retune the strings a bit. But overall, still satisfied!!",
    rating: 5,
  },
  {
    id: 4,
    costumerName: "Emily Carter",
    review:
      "Very satisfied with this guitar! The sound is clear, the body is sturdy, and comfortable to play. Suitable for beginners and those who are experienced. The delivery is also fast and safe. Will definitely recommend to friends!",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col justify-center items-center w-full mt-40 md:mt-60"
      >
        <h2 className="font-bold text-2xl md:text-3xl">About Us</h2>
        <div className="w-full text-center px-2 mt-10 md:max-w-2xl">
          <p className="font-medium md:text-lg">
            Welcome to Bakir Guitar Official, a guitar store dedicated to
            providing high-quality musical instruments for musicians of all
            levels. We offer a wide selection of guitars, including acoustic,
            electric, classic and acoustic electric models from top brands.
            Committed to delivering the best service, we not only sell guitars
            but also provide courses for those who want to learn and improve
            their guitar-playing skils. Addicionally, we ensure that every
            product we sell undergoes a thorough quality check, so our customers
            get the best playing experience. We belive that music is a part of
            life, and Bakir Guitar Official is here to accompany every step of
            your musical journey with high-quality products, affordable prices,
            and profesional service.
          </p>
        </div>
      </motion.div>
      <ProductCarousel />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: false, margin: "0px 0px -100px 0px" }}
        className="flex flex-col justify-center items-center mt-32 md:mt-60"
      >
        <h3 className="font-bold text-2xl md:text-3xl">Costumer Reviews</h3>
        <Swiper
          breakpoints={{
            340: { slidesPerView: 1, spaceBetween: 4 },
            700: { slidesPerView: 3, spaceBetween: 4 },
            1024: { slidesPerView: 3, spaceBetween: 4 },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          autoplay={{ delay: 4000 }}
          className="max-w-[90%] lg:max-w-[80%] mt-10"
        >
          {costumerReviews.map((review) => (
            <SwiperSlide key={review.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex gap-3">
                    <img
                      src=""
                      alt=""
                      className="w-10 h-10 rounded-full bg-zinc-400"
                    />
                    <div className="flex flex-col gap-2">
                      <span className="">{review.costumerName}</span>
                      <div className="flex">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>{review.review.substring(0, 50)}...</CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
}
