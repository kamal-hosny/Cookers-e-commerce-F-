import TimelineSwiper from "../components/AboutBulm/TimelineSwiper";
import BlocksGap from "../components/common/BlocksGap";
import HeadCollection from "../components/common/HeadCollection";
import MainTitleCollections from "../components/common/MainTitleCollections";

import { Swiper, SwiperSlide } from "swiper/react";

const sections = [
  {
    id: 1,
    title: "Style, design and technology: all is made in Italy",
    description:
      "We have chosen to maintain all manufacturing stages in our country in order to benefit from the added value arising from a combination of working procedures, creative processes, know-how and expertise.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2023/06/elba-produzione-1.jpg.webp",
  },
  {
    id: 2,
    title: "54.000 mq production plant in the heart of Veneto",
    description:
      "Production totally concentrated in the Veneto region, in north-east of Italy, guarantees care in the details, quality of materials and technologies more and more innovative.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2023/06/elba-produzione-2.jpg.webp",
  },
  {
    id: 3,
    title: "In every stage, high-quality standards",
    description:
      "According to our philosophy, “Made in Italy” does not mean only assembly within the Italian territory. It is also the selection of components, both functional and aesthetical, deriving from certified partner companies, as we are, following the high-quality standards required by the certification UNI ISO 9001-2008.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2023/06/elba-produzione-3.jpg.webp",
  },
];

const AboutBulm = () => {
  return (
    <div>
      <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/01/primopiano-elba-fornelli.jpg.webp" />

      <div className="container relative z-5 pt-[380px] pb-20 space-y-8"></div>

      <div className="mx-auto max-w-10/12 px-4">
        <MainTitleCollections title="Since 1950 we are sharing our history, achievements, strengths and know-how all over the world">
          <p>
            Our expertise and flexibility in the manufacturing process in{" "}
            <strong>cooking appliances</strong> have contributed to our
            expansion to over 60 different markets worldwide.
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
            <p className="text-4xl font-bold mb-8">Totally made in Italy</p>
            <p>
              What is the secret of our success? The Italian style that the
              world envies us and that we do we have been giving our products
              for seventy years. The Italian style is not only transpired in the
              design but it comes also declined in technologies.
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
            Warmth and hospitality, entertainment: this is even more than
            kitchen. It is a place of conviviality and alchemical
            experimentation, a space to give and a space to receive hospitality.
            For more than seventy years, Elba has been bringing life to the
            home. We understand the importance of home, family, friendship and
            good food. This is why we've created an Elba cooking appliance for
            every need of yours.
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
            Since 1979, Bulm has been committed to excellence in every stage of
            its manufacturing process. Each step is guided by a strict system of
            procedures, testing, and documentation to ensure consistent quality
            across all operations. Our dedication to quality was officially
            recognized in September 1998 with the achievement of the ISO 9001
            certification. Even before that, our internal system had complied
            with CE mark requirements since 1995. To stay ahead, we updated our
            quality management to meet ISO 9001:2008 standards in 2009 and then
            ISO 9001:2015 in 2018. For over four decades, quality has been more
            than a standard at Bulm — it's our legacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBulm;
