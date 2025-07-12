import { Link, useLocation } from "react-router-dom";

interface LogoProps {
  isScrolled: boolean;
}

const Logo = ({ isScrolled }: LogoProps) => {
  const { pathname } = useLocation();

  let footerClasses = "transition-all duration-300";

  const whitePaths = [
    "/catalogues",
    "/collections",
    "/collections/collections-cookers/",
    "/collections/collections-ovens/",
    "/collections/collections-hobs/",
    "/collections/collections-cookers/vintage/",
    "/collections/collections-cookers/excellence/",
    "/collections/collections-cookers/fusion/",
    "/collections/collections-cookers/classic/",
    "/collections/collections-hobs/country-hobs/",
    "/collections/collections-ovens/elio-ovens/",
    "/collections/collections-ovens/elio-giant-ovens/",
    "/collections/collections-ovens/alterum-ovens/",
    "/collections/collections-ovens/professional-ovens/",
    "/collections/collections-ovens/country-ovens/",
    "/collections/black-line-collection/",
    "/about-bulm",
  ];

  if (isScrolled) {
    footerClasses += " text-[#30505b]";
  } else if (whitePaths.includes(pathname)) {
    footerClasses += " text-white";
  } else {
    footerClasses += " text-[#30505b]";
  }

  return (
    <Link
      to="/"
      className={`flex items-center gap-1 md:gap-8 ${footerClasses}`}
    >
      <div className="flex flex-col items-center transition-all duration-300 ease-in-out">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 459.000000 119.000000"
          preserveAspectRatio="xMidYMid meet"
          className={`transition-all duration-300 h-auto ${
            isScrolled ? "w-24 md:w-36" : "w-28 md:w-44"
          }`}
        >
          <g
            transform="translate(0.000000,119.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
            stroke="none"
          >
            <path d="M80 665 l0 -375 465 0 c438 0 468 1 503 19 43 22 73 52 98 101 25 49 26 185 2 222 -17 25 -17 29 2 70 49 107 10 245 -84 303 l-49 30 -469 3 -468 3 0 -376z m898 173 c21 -21 14 -66 -11 -83 -21 -13 -72 -15 -363 -13 l-339 3 -3 53 -3 52 353 0 c262 0 357 -3 366 -12z m-15 -277 c36 -14 44 -47 19 -80 l-19 -26 -349 0 -349 0 -3 52 c-2 43 0 52 15 56 35 9 662 7 686 -2z" />
            <path d="M1210 803 c1 -337 17 -396 126 -455 80 -43 192 -58 435 -58 319 0 446 32 514 128 l30 44 3 289 3 289 -90 0 -91 0 0 -236 0 -237 -35 -32 c-52 -49 -150 -69 -345 -68 -203 1 -292 19 -337 68 l-33 35 0 235 0 235 -90 0 -90 0 0 -237z" />
            <path d="M2410 665 l0 -375 505 0 505 0 0 80 0 80 -415 0 -415 0 0 295 0 295 -90 0 -90 0 0 -375z" />
            <path d="M3480 665 l0 -375 85 0 c47 0 86 3 86 8 1 4 4 125 8 269 l6 262 74 -92 c146 -180 246 -296 256 -296 6 -1 62 61 125 136 63 76 139 162 167 193 l53 55 0 -267 0 -268 85 0 85 0 0 375 0 375 -113 0 -113 0 -94 -112 c-150 -177 -184 -216 -192 -217 -7 -1 -65 67 -216 252 l-62 77 -120 0 -120 0 0 -375z" />
          </g>
        </svg>

        <p
          className={`text-[10px] md:text-xs capitalize mt-1 font-medium transition-all duration-300 ${
            isScrolled ? "scale-90" : "scale-100"
          }`}
          style={{ letterSpacing: "0.29em" }}
        >
          SKILL FOR COOKING
        </p>
      </div>

      <span className="line block w-0.5 h-16 bg-[#d8dee0]"></span>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isScrolled ? "w-10 md:w-16" : "w-12 md:w-20"
        }`}
      >
        <img
          className="h-full w-full object-contain scale-150"
          src="/logo/Yearsofexperience-en.jpg"
          alt="Years-of-experience"
        />
      </div>
    </Link>
  );
};

export default Logo;
