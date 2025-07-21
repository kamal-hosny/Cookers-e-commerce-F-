import { Helmet } from "react-helmet-async";
import TimelineSwiper from "../components/AboutBulm/TimelineSwiper";
import BlocksGap from "../components/common/BlocksGap";
import HeadCollection from "../components/common/HeadCollection";
import MainTitleCollections from "../components/common/MainTitleCollections";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

const sections = [
  {
    id: 1,
    title: "about.section1Title",
    description: "about.section1Desc",
    image:
      "https://cms.bulm.it/wp-content/uploads/2025/07/dd.jpg",
  },
  {
    id: 2,
    title: "about.section2Title",
    description: "about.section2Desc",
    image:
      "https://cms.bulm.it/wp-content/uploads/2025/07/dfsd.jpg",
  },
  {
    id: 3,
    title: "about.section3Title",
    description: "about.section3Desc",
    image:
      "https://cms.bulm.it/wp-content/uploads/2025/07/dsfg.jpg",
  },
];

const AboutBulm = () => {
  const { t } = useTranslation();

  return (
    <main>
            <Helmet>
   
        <title>About | BULM</title>
    
      </Helmet>
      <HeadCollection image="https://cms.bulm.it/wp-content/uploads/2025/07/Bulm.jpeg" />

      <div className="container relative z-5 pt-[380px] pb-20 space-y-8"></div>

      <div className="mx-auto max-w-10/12 px-4">
        <MainTitleCollections title={t("about.mainTitle")}>
          <p dangerouslySetInnerHTML={{ __html: t("about.mainDescription") }} />
        </MainTitleCollections>
      </div>

      <TimelineSwiper />

      <div className="image container mt-20 relative w-full h-[700px] before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-1/2 before:w-full before:bg-[#1d1d1b] before:z-[-2] ">
        <img
          src="https://cms.bulm.it/wp-content/uploads/2025/07/company.jpeg"
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Black Section */}
      <div className="!bg-[#1d1d1b] text-white py-20">
        <div className="container relative z-5 space-y-12">
          <div className="mx-auto max-w-10/12 px-4">
            <p className="text-4xl font-bold mb-8">
              {t("about.blackSectionTitle")}
            </p>
            <p>{t("about.blackSectionDesc")}</p>
          </div>

          <BlocksGap
            sections={sections.map((s) => ({
              ...s,
              title: t(s.title),
              description: t(s.description),
            }))}
          />
        </div>
      </div>

      <div className="container py-20 space-y-20 ">
        <div className="about-main-title space-y-20 text-center mx-auto max-w-10/12 px-4">
          <p className="text-4xl font-bold">{t("about.heartTitle")}</p>
          <p>{t("about.heartDesc")}</p>
        </div>

        <div className="about-swiper-section">
  <Swiper
    spaceBetween={10}
    pagination={{ clickable: true }}
    breakpoints={{
      320: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
      1280: { slidesPerView: 5 },
    }}
    className="mySwiper"
  >
    {[
      "https://cms.bulm.it/wp-content/uploads/2025/07/istockphoto-517161718-612x612-1.jpg",
      "https://cms.bulm.it/wp-content/uploads/2025/07/istockphoto-1009279168-612x612-1.jpg",
      "https://cms.bulm.it/wp-content/uploads/2025/07/istockphoto-1803824173-612x612-1.jpg",
      "https://cms.bulm.it/wp-content/uploads/2025/07/pizza-basil-leaf-detail.jpg.webp",
      "https://cms.bulm.it/wp-content/uploads/2025/07/istockphoto-939935006-612x612-1.jpg",
    ].map((img, index) => (
      <SwiperSlide key={index}>
        <div className="w-full aspect-[4/5] overflow-hidden rounded-xl">
          <img
            src={img}
            alt={`slide-${index}`}
            className="w-full h-full object-cover transition duration-300 hover:scale-105"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>


        <div className="about-last-title space-y-6 text-start mx-auto max-w-10/12 px-4">
          <p className="text-3xl font-bold">{t("about.lastTitle")}</p>
          <p>{t("about.lastDesc")}</p>
        </div>
      </div>
    </main>
  );
};

export default AboutBulm;
