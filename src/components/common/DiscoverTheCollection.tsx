import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

interface IProduct {
  id: number;
  image: string;
  title: string;
  code?: string;
  link?: string;
  type?: "normal" | "special" | string;
  collections?: string;
}

interface IProps {
  products: IProduct[];
}

const DiscoverTheCollection = ({ products }: IProps) => {
  const productCount = products.length;

  const dynamicBreakpoints: {
    [width: number]: { slidesPerView: number; spaceBetween?: number };
  } =
    productCount <= 2
      ? {
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2 },
        }
      : productCount === 3
      ? {
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
          1280: { slidesPerView: 3 },
        }
      : {
          480: { slidesPerView: 1.5, spaceBetween: 12 },
          640: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
        };

  return (
    <div className="bg-white py-10 md:py-20">
      {/* Title */}
      <div className="container mx-auto flex flex-col gap-6 justify-center items-center text-center px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Discover the Collection
        </h2>
      </div>

      {/* Swiper Container with Navigation */}
      <div className="container mx-auto mt-8 relative px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={dynamicBreakpoints}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          className="overflow-hidden"
          role="region"
          aria-roledescription="carousel"
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="h-auto"
              role="group"
              aria-label={product.title}
            >
              {product.type === "special" ? (
                <div className="relative w-full aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-white px-4 text-center gap-36">
                    <p className="text-3xl font-bold">
                      Find out <br /> more
                    </p>
                    {product.link ? (
                      <Link
                        to={product.link}
                        className="text-base font-bold border-b-2 p-2"
                      >
                        {product.collections}
                      </Link>
                    ) : (
                      <span className="text-base font-bold border-b-2 p-2 capitalize">
                        Classic
                      </span>
                    )}
                    {product.link ? (
                      <Link
                        to={product.link}
                        className="absolute bg-[#2e4a56] border-4 border-white z-40 right-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
                      >
                        <FaChevronRight className="text-white w-4 h-4 md:w-5 md:h-5" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center text-center h-full p-4">
                  <div className="w-full aspect-[3/4] flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xs sm:text-sm md:text-base font-semibold leading-snug">
                      {product.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">{product.code}</p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DiscoverTheCollection;
