import { Link } from "react-router-dom";

const BannerLanding = () => {
  return (
    <div className="w-full container overflow-hidden bg-white font-sans">
      {/* Top Section */}
      <div className=" bg-gradient-to-r from-[#30505b] to-[#4c6f7c] px-4 py-10 sm:px-6 sm:py-12 md:px-16 md:py-16">
        <div className="mx-auto max-w-6xl flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Title */}
          <div className="text-center md:text-left max-w-md">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white">
              Transform Your Culinary Wishes With <br />
              <span className="text-[#d4e0e4]">Premium Cooking Appliances</span>
            </h1>
          </div>

          {/* Description */}
          <div className="text-center md:text-left max-w-lg">
            <p className="text-sm sm:text-base leading-relaxed text-[#e3eaec]">
              Proudly made in Italy since 1950, Elba freestanding cookers, hobs,
              and ovens combine expert craftsmanship with innovative technology,
              sophisticated design, and uncompromising quality.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t-4 border-[#4c6f7c]">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 flex flex-col gap-6 sm:flex-row items-center justify-between">
          {/* Logo + Years */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="p-2 border-4 border-[#4c6f7c] rounded-xl shadow-md">
              <img
                className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-lg object-cover"
                src="/logo/Yearsofexperience-en.jpg"
                alt="Over 45 Years of Excellence"
              />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-base sm:text-lg font-semibold text-[#203840]">
                +45 Years
              </div>
              <div className="text-sm text-[#30505b]">
                of Trusted Italian Craftsmanship
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="group relative">
            <Link
              to="/about-elba/"
              className="inline-block rounded-lg bg-gradient-to-r from-[#30505b] to-[#4c6f7c] px-6 py-2.5 sm:px-8 sm:py-3 font-semibold text-white shadow-md transition-all hover:shadow-xl hover:brightness-110"
            >
              Discover More
            </Link>
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#4c6f7c] to-[#6f8f9c] transition-opacity duration-300 group-hover:opacity-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerLanding;
