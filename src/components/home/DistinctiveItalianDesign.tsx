import { Swiper, SwiperSlide } from "swiper/react";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import "swiper/css";
const sliders = [
  {
    id: "1",
    name: "Cookers",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-freestanding-cookers.jpg.webp",
    link: "/collections/collections-cookers/",
  },
  {
    id: "2",
    name: "Ovens",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-collections-gas-electric-ovens-1.jpg.webp",
    link: "/collections/collections-ovens/",
  },
  {
    id: "3",
    name: "Hobs",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-gas-electric-gas-on-glass-hobs.jpg.webp",
    link: "/collections/collections-hobs/",
  },
  {
    id: "4",
    name: "Hoods",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-chimney-hoods.jpg.webp",
    link: "/product-category/hoods/",
  },
  {
    id: "5",
    name: "Compact products",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-microwave.jpg.webp",
    link: "/product-category/compact-products/",
  },
];

const DistinctiveItalianDesign = () => {
  return (
    <div className="w-full py-10 container flex flex-col gap-16 items-center justify-center bg-white">
      <div className="titles w-full text-center">
        <p className="text-3xl font-medium">
          Distinctive <b>Italian Design</b>
        </p>
      </div>

      <div className="w-full max-w-7xl px-4">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {sliders.map((slider) => (
            <SwiperSlide key={slider.id}>
              <div className="relative group rounded overflow-hidden shadow-md">
                <div className="image h-80 overflow-hidden">
                  <img
                    src={slider.image}
                    alt={slider.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute flex justify-center flex-col items-center gap-2 transition-all duration-500 group-hover:top-0 -top-48 left-0 right-0 bg-[#30505b] bg-opacity-60 py-8 text-white text-center group-hover:bg-opacity-80">
                  <p>Explore</p>
                  <p className="font-bold text-2xl">{slider.name}</p>
                  <Link to={slider.link} className="text-sm underline">
                    <IoArrowForward size={23} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* وصف الكاتالوج - بصيغة JSX صحيحة */}
      <div className="text-center px-4 max-w-4xl leading-relaxed text-gray-800">
        <span>
          For every type of cooking, for every style of kitchen. Check out our
          complete selection of high-performance <b>cooking appliances</b>{" "}
          catalogue. A vast range of <b>cooking products</b>, all suitable for
          customer personalization.
        </span>
      </div>
    </div>
  );
};

export default DistinctiveItalianDesign;
