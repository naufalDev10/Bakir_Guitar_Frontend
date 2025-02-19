import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";
import CardProduct from "../Molekuls/CardProduct";

const productBestSeller = [
  {
    id: 1,
    brand: "Yamaha",
    type: "F310",
    descriptions:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, ut.",
    price: 1500000,
    image: "/product-images/Yamaha_F310.png",
  },
  {
    id: 2,
    brand: "Yamaha",
    type: "APX 600",
    descriptions:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, ut.",
    price: 2500000,
    image: "/product-images/Yamaha_F310.png",
  },
  {
    id: 3,
    brand: "Cort",
    type: "AD810",
    descriptions:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, ut.",
    price: 1500000,
    image: "/product-images/Yamaha_F310.png",
  },
  {
    id: 4,
    brand: "Yamaha",
    type: "F310",
    descriptions:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, ut.",
    price: 1500000,
    image: "/product-images/Yamaha_F310.png",
  },
  {
    id: 5,
    brand: "Yamaha",
    type: "F310",
    descriptions:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, ut.",
    price: 1500000,
    image: "/product-images/Yamaha_F310.png",
  },
];

const ProductCarousel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      viewport={{ once: false, margin: "0px 0px -100px 0px" }}
      className="flex flex-col justify-center items-center mt-20 md:mt-60"
    >
      <motion.h3
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="font-bold text-2xl md:text-3xl"
      >
        Best Seller
      </motion.h3>
      <Swiper
        breakpoints={{
          340: { slidesPerView: 1, spaceBetween: 0 },
          700: { slidesPerView: 3, spaceBetween: 0 },
          1024: { slidesPerView: 3, spaceBetween: 0 },
          1080: { slidesPerView: 4, spaceBetween: 0 },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        className="max-w-[90%] lg:max-w-[80%] mt-10"
      >
        {productBestSeller.map((product) => (
          <SwiperSlide key={product.id}>
            <CardProduct {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ProductCarousel;
