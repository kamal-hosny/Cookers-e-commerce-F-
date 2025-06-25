import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const TimelineSwiper: React.FC = () => {
  const timelineData = [
    {
      year: "1950",
      title: "Foundation",
      content: "The Company was founded in 1950 by Elio Baggio, as a family business, in the village of Marostica (Vicenza province). Elio was the son of an entrepreneur, Plo Baggio, who owned various activities, such as building materials (bricks), pottery and quarrying. The initial main business was the operation of an enameling plant, as a subcontractor, along with a small production of wood/coal stoves for cooking/heating purposes."
    },
    {
      year: "1959",
      title: "Specialization",
      content: "The plant gradually specialized in enameling body components of stoves and cookers as well as bathtubs, sinks, etc. required by major manufacturers of Northern Italy, such as Zanussi, Zoppas, Fargas. By the end of the fifties, the post-second world war reconstruction was over and the following years were characterized by a huge demand for basic household appliances, like cookers and refrigerators."
    },
    {
      year: "1960",
      title: "Expansion",
      content: "This situation led Elio Baggio to build a new factory in 1960, in the town of Bassano del Grappa (Vicenza province), and to concentrate his activity in the manufacturing of freestanding cookers for the domestic market. The factory brand became ELBA, which is the acronym of the founder Elio Baggio."
    },
    {
      year: "1970",
      title: "Growth Era",
      content: "The 1970s marked a period of significant growth for ELBA. The company expanded its product line to include modern kitchen appliances and began exporting to international markets. This decade saw the establishment of ELBA as a recognized brand in household appliances across Europe."
    }
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1b] mb-4 relative inline-block">
            An Italian Success Story
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#1d1d1b] rounded-full"></span>
          </h1>
        </div>

        <div className="relative">
          {/* Timeline line - visible on desktop */}
          <div className="absolute left-0 right-0 top-8 h-1 bg-[#1d1d1b] mx-16 hidden md:block"></div>
          
          <Swiper
          modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
                delay: 3000, 
                disableOnInteraction: false,
              }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            className="h-full"
          >
            {timelineData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-full flex  flex-col items-center relative pb-12">
                  {/* Year marker on timeline */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-16 rounded-full bg-[#1d1d1b] flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 border-4 border-white">
                    {item.year}
                  </div>
                  
                  {/* Content card */}
                  <div className="bg-white rounded-xl shadow-lg border border-[#e0e0e0] mt-20 h-full w-full p-6 flex flex-col transition-all duration-300 hover:shadow-xl hover:border-[#1d1d1b]">
                    <div className="mb-4">
                      <div className="text-[#1d1d1b] font-bold text-xl mb-2">
                        {item.title}
                      </div>
                      <div className="h-1 w-12 bg-[#1d1d1b] rounded-full mb-4"></div>
                    </div>
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {item.content}
                    </p>
                    <div className="mt-6 flex justify-end">
                      <div className="text-[#1d1d1b] text-3xl opacity-30">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile timeline connector */}
                  <div className="md:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-[#1d1d1b]"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Timeline arrow for mobile */}
          <div className="md:hidden flex justify-center mt-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1d1d1b] animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18m0 0l-4-4m4 4l4-4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSwiper;