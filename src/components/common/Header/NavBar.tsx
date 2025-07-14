import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";
import { useTranslation } from "react-i18next";
import itFlag from "/flags/it.png"; // علم إيطاليا
import enFlag from "/flags/gb.png"; // علم بريطانيا

interface LogoProps {
  isScrolled: boolean;
}

const NavBar = ({ isScrolled }: LogoProps) => {
  const [showCollectionsMenu, setShowCollectionsMenu] = useState(false);
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    setShowCollectionsMenu(false);
    setShowProductsMenu(false);
  }, [location]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "it" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = "ltr";
  };

  const currentFlag = i18n.language === "en" ? enFlag : itFlag;
  const currentLangLabel = i18n.language.toUpperCase();

  return (
    <div className="relative">
      <div className="flex justify-between items-center gap-x-4 px-6 py-4">
        {/* ✅ Language Switcher Toggle */}
        <div
          className={`flex items-center gap-3 max-md:hidden relative z-10 cursor-pointer ${
            showCollectionsMenu || showProductsMenu
              ? "text-white"
              : isScrolled
              ? "text-black"
              : ""
          }`}
        >
          <button onClick={toggleLanguage} className="flex items-center gap-1">
            <img src={currentFlag} alt={currentLangLabel} className="w-5 h-5" />
            <span className="text-sm font-medium">{currentLangLabel}</span>
          </button>
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
                Collections
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
                            Collections Cookers
                          </Link>
                        </p>
                        <ul className="space-y-4">
                          <li>
                            <Link to="/collections/collections-cookers/antique">
                              Antique
                            </Link>
                          </li>
                          <li>
                            <Link to="/collections/collections-cookers/perfection">
                              Perfection
                            </Link>
                          </li>
                          <li>
                            <Link to="/collections/collections-cookers/mixture">
                              Mixture
                            </Link>
                          </li>
                          <li>
                            <Link to="/collections/collections-cookers/elegant">
                              Elegant
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-bold mb-4 uppercase text-[#7ba7b8]">
                          <Link to="/collections/collections-ovens/">
                            Collections Ovens
                          </Link>
                        </p>
                        <ul className="space-y-4">
                          <li>
                            <Link to="/collections/collections-ovens/enzo-ovens">
                              Enzo
                            </Link>
                          </li>
                          <li>
                            <Link to="/collections/collections-ovens/enzo-titan-ovens">
                              Enzo Titan
                            </Link>
                          </li>
                          <li>
                            <Link to="/collections/collections-ovens/land-ovens">
                              Land
                            </Link>
                          </li>
                          <li>
                            <Link to="/collections/collections-ovens/expert-ovens">
                              Expert
                            </Link>
                          </li>
                          <li>
                            <Link to="/collections/collections-ovens/alterum-ovens">
                              Alterum
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-bold mb-4 uppercase text-[#7ba7b8]">
                          <Link to="/collections/collections-hobs/">
                            Collections Hobs
                          </Link>
                        </p>
                        <ul className="space-y-4">
                          <li>
                            <Link to="/collections/collections-hobs/enzo-hobs">
                              Enzo Collection
                            </Link>
                          </li>
                          <li>
                            <Link to="/collections/collections-hobs/land-hobs">
                              Land Collection
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-bold mb-4 uppercase text-[#7ba7b8]">
                          <Link to="/collections/black-line-collection/">
                            Black Line Collection
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
                Products
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
                      <Link
                        to="/product-category/cookers"
                        className="hover:underline"
                      >
                        Cookers
                      </Link>
                      <Link
                        to="/product-category/ovens"
                        className="hover:underline"
                      >
                        Ovens
                      </Link>
                      <Link
                        to="/product-category/hobs"
                        className="hover:underline"
                      >
                        Hobs
                      </Link>
                      <Link
                        to="/product-category/hoods"
                        className="hover:underline"
                      >
                        Hoods
                      </Link>
                      <Link
                        to="/product-category/compact-products"
                        className="hover:underline"
                      >
                        Compact products
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
