import { Swiper, SwiperSlide } from "swiper/react";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import "swiper/swiper-bundle.css";

const sliders = [
  {
    id: "1",
    name: "Cookers",
    image:
      "/Home/DistinctiveItalianDesign/Cookers.jpeg",
    link: "/collections/collections-cookers/",
  },
  {
    id: "2",
    name: "Ovens",
    image:
      "/Home/DistinctiveItalianDesign/Ovens.jpeg",
    link: "/collections/collections-ovens/",
  },
  {
    id: "3",
    name: "Hobs",
    image:
      "/Home/DistinctiveItalianDesign/Hobs.jpeg",
    link: "/collections/collections-hobs/",
  },
  {
    id: "4",
    name: "Hoods",
    image:
      "/Home/DistinctiveItalianDesign/Hoods.jpeg",
    link: "/product-category/hoods/",
  },
  {
    id: "5",
    name: "Compact products",
    image:
      "/Home/DistinctiveItalianDesign/Compact products.jpeg",
    link: "/product-category/compact-products/",
  },
];

const DistinctiveItalianDesign = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full py-10 container flex flex-col gap-16 items-center justify-center bg-white">
      <div className="titles w-full text-center">
        <p className="text-3xl font-medium">
          <Trans i18nKey="distinctive.title" components={{ 1: <b /> }} />
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
                  <p>{t("distinctive.explore")}</p>
                  <p className="font-bold text-2xl">{slider.name}</p>
                  <Link rel="prefetch" to={slider.link} className="text-sm underline">
                    <IoArrowForward size={23} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* وصف الكاتالوج مترجم */}
      <div className="text-center px-4 max-w-4xl leading-relaxed text-gray-800">
        <Trans
          i18nKey="distinctive.catalogText"
          components={{
            1: <b />,
            3: <b />,
          }}
        />
      </div>
    </div>
  );
};

export default DistinctiveItalianDesign;
