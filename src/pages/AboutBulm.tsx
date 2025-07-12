import TimelineSwiper from "../components/AboutBulm/TimelineSwiper";
import BlocksGap from "../components/common/BlocksGap";
import HeadCollection from "../components/common/HeadCollection";
import MainTitleCollections from "../components/common/MainTitleCollections";

import { Swiper, SwiperSlide } from "swiper/react";

const sections = [
  {
    id: 1,
    title: "Style, Design and Technology — Made in Italy",
    description:
      "All our production remains in Italy, combining advanced manufacturing techniques with local expertise, creativity, and craftsmanship. This is the true essence of Italian quality.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2023/06/elba-produzione-1.jpg.webp",
  },
  {
    id: 2,
    title: "54,000 m² Production Site in Northern Italy",
    description:
      "Having our operations centralized in the northeast of Italy allows for tight quality control, innovation, and dedication to excellence at every stage of production.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2023/06/elba-produzione-2.jpg.webp",
  },
  {
    id: 3,
    title: "Commitment to High-Quality Standards",
    description:
      "At BULM, 'Made in Italy' means more than assembly — it reflects a full ecosystem of quality-driven component sourcing, certified partners, and adherence to the strictest European standards.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2023/06/elba-produzione-3.jpg.webp",
  },
];

const AboutBulm = () => {
  return (
    <main>
      <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/01/primopiano-elba-fornelli.jpg.webp" />

      <div className="container relative z-5 pt-[380px] pb-20 space-y-8"></div>

      <div className="mx-auto max-w-10/12 px-4">
        <MainTitleCollections title="Since 1950 we are sharing our history, achievements, strengths and know-how all over the world">
        <p>
            Our deep experience and production flexibility in{" "}
            <strong>cooking appliances</strong> have empowered us to grow across more than 60 global markets.
          </p>
        </MainTitleCollections>
      </div>

      <TimelineSwiper />


      <div className="image container mt-20 relative w-full h-[700px] before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-1/2 before:w-full  before:bg-[#1d1d1b] before:z-[-2] ">
        <img
          src="https://www.elba-cookers.com/wp-content/uploads/2024/03/Elba-company.jpg.webp"
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* القسم الأسود بالمحتوى والـ Blocks */}
      <div className="!bg-[#1d1d1b] text-white py-20">
        <div className="container relative z-5 space-y-12">
          <div className="mx-auto max-w-10/12 px-4">
            <p className="text-4xl font-bold mb-8">Entirely made in Italy</p>
            <p>
            What's the secret behind our success? It's the Italian style — admired worldwide — that we infuse into every product we make.
              This style goes beyond aesthetics; it's deeply embedded in our technology, design, and manufacturing values.
            </p>
          </div>

          {/* البلوكات الثلاثة */}
          <BlocksGap sections={sections} />
        </div>
      </div>

      <div className="container py-20 space-y-20 ">
        <div className="about-main-title space-y-20 text-center mx-auto max-w-10/12 px-4">
          <p className="text-4xl font-bold">In the heart of your kitchen</p>
          <p>
          More than a cooking space, the kitchen is a place of warmth, creativity, and togetherness.
            For over four decades, BULM has brought life into homes. We believe in the power of good food, family, and design —
            which is why every BULM appliance is designed to meet your unique culinary needs.
          </p>
        </div>

        <div className="about-swiper-section ">
          <Swiper
            spaceBetween={10}
            pagination={{ clickable: true }}
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
            className="mySwiper"
          >
            {[
              "https://www.elba-cookers.com/wp-content/uploads/2022/01/bicchieri.jpg.webp",
              "https://www.elba-cookers.com/wp-content/uploads/2022/01/verdure.jpg.webp",
              "https://www.elba-cookers.com/wp-content/uploads/2022/01/pane.jpg.webp",
              "https://www.elba-cookers.com/wp-content/uploads/2022/01/impiattamento.jpg.webp",
              "https://www.elba-cookers.com/wp-content/uploads/2022/01/salmone.jpg.webp",
            ].map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`slide-${index}`}
                  className="w-full h-[300px] object-cover "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="about-last-title space-y-6 text-start mx-auto max-w-10/12 px-4">
          <p className="text-3xl font-bold">Quality guaranteed</p>
          <p>
          Since 1979, BULM has prioritized excellence in every step of its production. Every process is guided by strict testing,
            quality controls, and documentation. We proudly earned ISO 9001 certification in 1998, having already met CE mark
            standards since 1995. Our quality system evolved with ISO 9001:2008 and ISO 9001:2015 updates — a testament to our legacy
            of trust and performance.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutBulm;
