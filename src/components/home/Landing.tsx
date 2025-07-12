
const Landing = () => {
 
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full overflow-hidden">
      <div className="container">
        <div className="video relative">
          <img
            className="w-full h-[800px] object-cover"
            src="/Home/landingImage.webp"
            loading="eager"
          />

          <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-4 items-center justify-center text-white text-center p-4">
            <p className="uppercase tracking-widest text-3xl font-medium max-w-[700px]">
              BLACK LINE. High-quality kitchen experience
            </p>

            <p className="font-bold border-b border-white p-2 hover:border transition-colors cursor-pointer">
              Discover the new Collection
            </p>

            <p className="translate-y-4 uppercase [writing-mode:vertical-rl] rotate-180 tracking-widest text-sm font-medium flex flex-col items-center cursor-pointer">
              <span>Scroll</span>
            </p>
          </div>

          <div 
            className="absolute bottom-50 left-0 w-full flex flex-col items-center justify-center cursor-pointer"
            onClick={handleScroll}
          >
            <span className="group flex flex-col items-center transition-all duration-500 ease-in-out">
              <span className="block w-[2px] bg-white mx-auto h-8 group-hover:h-12 transition-all duration-500 ease-in-out" />
              <span className="w-0 h-0 mx-auto bg-white p-1.5 rounded-full mt-2 transform group-hover:translate-y-2 transition-transform duration-500" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;