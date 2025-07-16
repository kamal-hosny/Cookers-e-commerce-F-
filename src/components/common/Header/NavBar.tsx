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
  const location = useLocation();
  const { t, i18n } = useTranslation();

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
                          <Link to="/collections/collections-cookers/">
                            {t("navbar.collectionsCookers")}
                          </Link>
                        </p>
                        <ul className="space-y-4">
                          <li>
                            <Link to="/collections/collections-cookers/antique">
                              {t("navbar.antique")}
                            </Link>
                          </li>
                          <li>
                            <Link to="/collections/collections-cookers/perfection">
                              {t("navbar.perfection")}
                            </Link>
                          </li>
                          <li>
                            <Link to="/collections/collections-cookers/mixture">
                              {t("navbar.mixture")}
                            </Link>
                          </li>
                          <li>
                            <Link to="/collections/collections-cookers/elegant">
                              {t("navbar.elegant")}
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-bold mb-4 uppercase text-[#7ba7b8]">
                          <Link to="/collections/collections-ovens/">
                            {t("navbar.collectionsOvens")}
                          </Link>
                        </p>
                        <ul className="space-y-4">
                          <li>
                            <Link to="/collections/collections-ovens/enzo-ovens">
                              {t("navbar.enzo")}
                            </Link>
                          </li>
                          <li>
                            <Link to="/collections/collections-ovens/enzo-titan-ovens">
                              {t("navbar.enzoTitan")}
                            </Link>
                          </li>
                          <li>
                            <Link to="/collections/collections-ovens/land-ovens">
                              {t("navbar.land")}
                            </Link>
                          </li>
                          <li>
                            <Link to="/collections/collections-ovens/expert-ovens">
                              {t("navbar.expert")}
                            </Link>
                          </li>
                          <li>
                            <Link to="/collections/collections-ovens/alterum-ovens">
                              {t("navbar.alterum")}
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-bold mb-4 uppercase text-[#7ba7b8]">
                          <Link to="/collections/collections-hobs/">
                            {t("navbar.collectionsHobs")}
                          </Link>
                        </p>
                        <ul className="space-y-4">
                          <li>
                            <Link to="/collections/collections-hobs/enzo-hobs">
                              {t("navbar.enzoCollection")}
                            </Link>
                          </li>
                          <li>
                            <Link to="/collections/collections-hobs/land-hobs">
                              {t("navbar.landCollection")}
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-bold mb-4 uppercase text-[#7ba7b8]">
                          <Link to="/collections/black-line-collection/">
                            {t("navbar.blackLine")}
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
                className={`uppercase hover:underline relative z-[10] ${
                  showProductsMenu || showCollectionsMenu
                    ? "text-white"
                    : isScrolled
                    ? "text-black"
                    : ""
                }`}
                to="/product-category/cookers"
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
                        src="https://www.elba-cookers.com/wp-content/uploads/2023/09/Big-menu-cookers-V2.jpg"
                        alt="Product Preview"
                        loading="eager"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-1/3 flex flex-col justify-center px-10 space-y-6 font-semibold text-2xl text-[#7ba7b8]">
                      <Link to="/product-category/cookers" className="hover:underline">
                        {t("navbar.cookers")}
                      </Link>
                      <Link to="/product-category/ovens" className="hover:underline">
                        {t("navbar.ovens")}
                      </Link>
                      <Link to="/product-category/hobs" className="hover:underline">
                        {t("navbar.hobs")}
                      </Link>
                      <Link to="/product-category/hoods" className="hover:underline">
                        {t("navbar.hoods")}
                      </Link>
                      <Link to="/product-category/compact-products" className="hover:underline">
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
