import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

const News = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();

  const newsItems = [
    {
      id: 1,
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/Vintage-1024x576.jpg.webp"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center overflow-hidden">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center h-[600px]">
            <div className="w-full h-[420px] bg-[#72909a] p-14 ps-24 flex flex-col justify-center">
              <div className="flex flex-col gap-y-6">
                <h2 className="font-bold text-2xl">{t("news.title")}</h2>
                <p className="text-4xl font-bold">
                  {t(`news.items.${activeIndex}.title`)}
                </p>
                <button className="font-bold -[#72909a] py-2 px-4 border-b-4 transition-colors duration-300 w-fit">
                  {t("news.button")}
                </button>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex space-x-2 p-8 ps-11">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-[40px] h-[6px] transition-all duration-300 ${
                    index === activeIndex ? "bg-[#30505b]" : "bg-[#f9fbfb]"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Image Swiper */}
          <div className="w-full lg:w-1/2 h-[600px] relative">
            <Swiper
              className="h-full"
              modules={[Autoplay, Navigation, Pagination]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={false}
              pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className}" style="width: 40px; height: 6px; border-radius: 0; background-color: ${
                    index === activeIndex ? "#30505b" : "#f9fbfb"
                  };"></span>`;
                },
                el: ".custom-pagination",
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {newsItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="w-full h-full overflow-hidden cursor-pointer">
                    <img
                      className="w-full h-full hover:scale-105 transition duration-300 object-cover"
                      src={item.image}
                      alt={t(`news.items.${item.id - 1}.title`)}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div
              className="custom-pagination absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2"
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
