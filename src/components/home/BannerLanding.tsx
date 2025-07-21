import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const BannerLanding = () => {
  const { t, i18n } = useTranslation(); 

  const currentLang = i18n.language;
  const experienceImage =
    currentLang === "it"
    ? "/logo/Yearsofexperience-it.png"
    : "/logo/Yearsofexperience-en.png";

  return (
    <div className="w-full container overflow-hidden bg-white font-sans">
      {/* Top Section */}
      <div className="bg-gradient-to-r from-[#30505b] to-[#4c6f7c] px-4 py-10 sm:px-6 sm:py-12 md:px-16 md:py-16">
        <div className="mx-auto max-w-6xl flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Title */}
          <div className="text-center md:text-left max-w-md">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white">
              {t("bannerLanding.title")} <br />
              <span className="text-[#d4e0e4]">{t("bannerLanding.highlight")}</span>
            </h1>
          </div>

          {/* Description */}
          <div className="text-center md:text-left max-w-lg">
            <p className="text-sm sm:text-base leading-relaxed text-[#e3eaec]">
              {t("bannerLanding.description")}
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
                src={experienceImage}
                alt={t("bannerLanding.years")}
              />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-base sm:text-lg font-semibold text-[#203840]">
                {t("bannerLanding.years")}
              </div>
              <div className="text-sm text-[#30505b]">
                {t("bannerLanding.yearsSubtext")}
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="group relative">
            <Link rel="prefetch"
              to="/"
              className="inline-block rounded-lg bg-gradient-to-r from-[#30505b] to-[#4c6f7c] px-6 py-2.5 sm:px-8 sm:py-3 font-semibold text-white shadow-md transition-all hover:shadow-xl hover:brightness-110"
            >
              {t("bannerLanding.discoverMore")}
            </Link>
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#4c6f7c] to-[#6f8f9c] transition-opacity duration-300 group-hover:opacity-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerLanding;
