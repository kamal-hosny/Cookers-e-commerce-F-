import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";
import { useTranslation } from "react-i18next";
import itFlag from "/flags/it.png";
import enFlag from "/flags/gb.png";

interface LogoProps {
  isScrolled: boolean;
}

const NavBar = ({ isScrolled }: LogoProps) => {
  const [showCollectionsMenu, setShowCollectionsMenu] = useState(false);
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [productPreviewImage, setProductPreviewImage] = useState("https://cms.bulm.it/wp-content/uploads/2025/07/Mixture-1.jpeg");


  const location = useLocation();
  const { t, i18n } = useTranslation();


  const productImages: Record<string, string> = {
    cookers: "https://cms.bulm.it/wp-content/uploads/2025/07/Mixture-1.jpeg",
    ovens: "https://cms.bulm.it/wp-content/uploads/2025/07/enzo-ovens-2.jpeg",
    hobs: "https://cms.bulm.it/wp-content/uploads/2025/07/Vitroceramic-Enzo-hobs.jpeg",
    hoods: "https://cms.bulm.it/wp-content/uploads/2025/07/hoods.jpeg",
    compact: "https://cms.bulm.it/wp-content/uploads/2025/07/compact-products.jpeg",
  };
  
  

  useEffect(() => {
    setShowCollectionsMenu(false);
    setShowProductsMenu(false);
    setShowLangMenu(false);
  }, [location]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = "ltr";
    setShowLangMenu(false);
  };

  const languages = [
    { code: "en", label: "EN", flag: enFlag },
    { code: "it", label: "IT", flag: itFlag },
  ];

  return (
    <div className="relative">
      <div className="flex justify-between items-center md:gap-x-4 gap-x-2  px-2 py-4">
        {/* ✅ Language Dropdown Menu */}
        <div
          className={`relative z-10  ${
            showCollectionsMenu || showProductsMenu
              ? "text-white"
              : isScrolled
              ? "text-black"
              : ""
          }`}
        >
  <button
  onClick={() => setShowLangMenu((prev) => !prev)}
  className="flex items-center gap-2 cursor-pointer"
>
<img
  src={i18n.language === "en" ? enFlag : itFlag}
  alt={i18n.language.toUpperCase()}
  className="w-[28px] h-[20px] rounded-sm shadow-sm block flex-none"
/>

</button>

{showLangMenu && (
  <div className="absolute right-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-md w-[75px] z-50">
    {languages.map((lang) => (
      <button
        key={lang.code}
        onClick={() => changeLanguage(lang.code)}
        className={`flex items-center gap-2 w-full px-3 cursor-pointer py-2 text-sm text-gray-800 hover:bg-gray-100 ${
          i18n.language === lang.code ? "font-semibold" : ""
        }`}
      >
        <img
          src={lang.flag}
          alt={lang.label}
          className="w-5 h-4 rounded-sm shadow-sm block"
        />
        <span>{lang.label}</span>
      </button>
    ))}
  </div>
)}

        </div>

        <nav>
          <ul className="flex gap-6 items-center max-md:hidden">
            {/* Collections */}
            <li
              onMouseEnter={() => setShowCollectionsMenu(true)}
              onMouseLeave={() => setShowCollectionsMenu(false)}
              className="relative"
            >
              <Link
              rel="prefetch"
                className={`uppercase hover:underline relative z-[10] ${
                  showCollectionsMenu || showProductsMenu
                    ? "text-white"
                    : isScrolled
                    ? "text-black"
                    : ""
                }`}
                to="/"
              >
                {t("navbar.collections")}
              </Link>

              {showCollectionsMenu && (
                <div
                  className="absolute top-full left-0 w-screen"
                  onMouseEnter={() => setShowCollectionsMenu(true)}
                  onMouseLeave={() => setShowCollectionsMenu(false)}
                >
                  <div className="bg-[#1d1d1b] fixed flex justify-center items-center z-[5] text-white top-0 left-0 h-[80vh] w-screen p-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                      <div>
                        <p className="font-bold mb-4 uppercase text-[#7ba7b8]">
                          <Link rel="prefetch" to="collections/collections-cookers/" >
                            {t("navbar.collectionsCookers")}
                          </Link>
                        </p>
                        <ul className="space-y-4">
                          <li>
                            <Link rel="prefetch" to="/collections/collections-cookers/antique">
                              {t("navbar.antique")}
                            </Link>
                          </li>
                          <li>
                            <Link rel="prefetch" to="/collections/collections-cookers/perfection">
                              {t("navbar.perfection")}
                            </Link>
                          </li>
                          <li>
                            <Link rel="prefetch" to="/collections/collections-cookers/mixture">
                              {t("navbar.mixture")}
                            </Link>
                          </li>
                          <li>
                            <Link rel="prefetch" to="/collections/collections-cookers/elegant">
                              {t("navbar.elegant")}
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-bold mb-4 uppercase text-[#7ba7b8]">
                          <Link rel="prefetch" to="/collections/collections-ovens/">
                            {t("navbar.collectionsOvens")}
                          </Link>
                        </p>
                        <ul className="space-y-4">
                          <li>
                            <Link rel="prefetch" to="/collections/collections-ovens/enzo-ovens">
                              {t("navbar.enzo")}
                            </Link>
                          </li>
                          <li>
                            <Link rel="prefetch" to="/collections/collections-ovens/enzo-titan-ovens">
                              {t("navbar.enzoTitan")}
                            </Link>
                          </li>
                          <li>
                            <Link rel="prefetch" to="/collections/collections-ovens/land-ovens">
                              {t("navbar.land")}
                            </Link>
                          </li>
                          <li>
                            <Link rel="prefetch" to="/collections/collections-ovens/expert-ovens">
                              {t("navbar.expert")}
                            </Link>
                          </li>
                          <li>
                            <Link rel="prefetch" to="/collections/collections-ovens/alterum-ovens">
                              {t("navbar.alterum")}
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-bold mb-4 uppercase text-[#7ba7b8]">
                          <Link rel="prefetch" to="/collections/collections-hobs/">
                            {t("navbar.collectionsHobs")}
                          </Link>
                        </p>
                        <ul className="space-y-4">
                          <li>
                            <Link rel="prefetch" to="/collections/collections-hobs/enzo-hobs">
                              {t("navbar.enzoCollection")}
                            </Link>
                          </li>
                          <li>
                            <Link rel="prefetch" to="/collections/collections-hobs/land-hobs">
                              {t("navbar.landCollection")}
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-bold mb-4 uppercase text-[#7ba7b8]">
                          <Link rel="prefetch" to="/collections/nero-line-collection/">
                            {t("navbar.neroLine")}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Products */}
            <li
              onMouseEnter={() => setShowProductsMenu(true)}
              onMouseLeave={() => setShowProductsMenu(false)}
              className="relative"
            >
              <Link
              rel="prefetch"
                className={`uppercase hover:underline relative z-[10] ${
                  showProductsMenu || showCollectionsMenu
                    ? "text-white"
                    : isScrolled
                    ? "text-black"
                    : ""
                }`}
                to="/product-category/ovens"
              >
                {t("navbar.products")}
              </Link>

              {showProductsMenu && (
                <div
                  className="absolute top-full left-0 w-screen"
                  onMouseEnter={() => setShowProductsMenu(true)}
                  onMouseLeave={() => setShowProductsMenu(false)}
                >
                  <div className="bg-[#1d1d1b] fixed flex justify-center items-center z-[5] text-white top-0 left-0 h-[80vh] w-screen p-20">
                    <div className="w-2/3 h-5/6 self-end">
                      <img
                        src={productPreviewImage}
                        alt="Product Preview"
                        loading="eager"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-1/3 flex flex-col justify-center px-10 space-y-6 font-semibold text-2xl text-[#7ba7b8]"
     onMouseLeave={() => setProductPreviewImage("https://cms.bulm.it/wp-content/uploads/2025/07/Mixture-1.jpeg")}>

  <Link 
  rel="prefetch"
    to="/product-category/cookers" 
    onMouseEnter={() => setProductPreviewImage(productImages.cookers)} 
    className="hover:underline"
  >
    {t("navbar.cookers")}
  </Link>

  <Link rel="prefetch"
    to="/product-category/ovens" 
    onMouseEnter={() => setProductPreviewImage(productImages.ovens)} 
    className="hover:underline"
  >
    {t("navbar.ovens")}
  </Link>

  <Link rel="prefetch"
    to="/product-category/hobs" 
    onMouseEnter={() => setProductPreviewImage(productImages.hobs)} 
    className="hover:underline"
  >
    {t("navbar.hobs")}
  </Link>

  <Link rel="prefetch"
    to="/product-category/hoods" 
    onMouseEnter={() => setProductPreviewImage(productImages.hoods)} 
    className="hover:underline"
  >
    {t("navbar.hoods")}
  </Link>

  <Link 
  rel="prefetch"
    to="/product-category/compact-products" 
    onMouseEnter={() => setProductPreviewImage(productImages.compact)} 
    className="hover:underline"
  >
    {t("navbar.compactProducts")}
  </Link>
</div>

                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>

        {/* Search */}
        <Search openSearch={openSearch} setOpenSearch={setOpenSearch} />
        <CiSearch
          size={25}
          onClick={() => setOpenSearch(true)}
          className={`cursor-pointer relative z-10 ${
            showCollectionsMenu || showProductsMenu
              ? "text-white"
              : isScrolled
              ? "text-black"
              : "text-black"
          }`}
        />
      </div>
    </div>
  );
};

export default NavBar;
