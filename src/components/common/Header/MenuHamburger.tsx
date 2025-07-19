import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
  openMenu: boolean;
  onToggleMenu: () => void;
  isScrolled: boolean;
}

const MenuHamburger = ({ openMenu, onToggleMenu, isScrolled }: Props) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const [isMobile, setIsMobile] = useState(false);
  const [openCollections, setOpenCollections] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const whitePages = [
    "/collections",
    "/collections/",
    "/collections/collections-hobs",
    "/collections/collections-hobs/",
    "/collections/collections-ovens",
    "/collections/collections-ovens/",
    "/collections/collections-cookers",
    "/collections/collections-cookers/",
  ];

  let barColor = "";
  let textColor = "";

  if (openMenu) {
    barColor = "bg-white";
    textColor = "text-white";
  } else if (isScrolled || whitePages.includes(pathname)) {
    barColor = "bg-black";
    textColor = "text-black";
  } else {
    barColor = "bg-[#30505b]";
    textColor = "text-[#30505b]";
  }

  useEffect(() => {
    if (openMenu) {
      onToggleMenu();
    }
  }, [pathname]);

  return (
    <>
      <div
        onClick={onToggleMenu}
        className="group relative flex items-center space-x-2 cursor-pointer z-[30]"
      >
        <div className="flex flex-col justify-center space-y-2.5">
          <span
            className={`w-13 h-0.5 ${barColor} transition-all duration-300 ${
              openMenu && "transform rotate-45 translate-y-[11px] bg-white"
            }`}
          ></span>
          <span
            className={`w-13 h-0.5 ${barColor} transition-all duration-300 ${
              openMenu ? "opacity-0" : "group-hover:translate-x-13.5"
            }`}
          ></span>
          <span
            className={`w-13 h-0.5 ${barColor} transition-all duration-300 ${
              openMenu && "transform -rotate-45 -translate-y-[11px] bg-white"
            }`}
          ></span>
        </div>
        <span
          className={`absolute uppercase opacity-0 -translate-x-12 top-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 ${textColor} text-lg font-semibold ${
            openMenu && "hidden"
          }`}
        >
          {t("menu.menu")}
        </span>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen px-20 py-40 space-y-28 ${
          isMobile ? "w-full" : "w-1/2"
        } bg-[#30505b] z-[21] transition-transform duration-500 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="text-white">
          <ul className="space-y-6">
            <li className="text-4xl hover:text-black transition-colors uppercase">
              <Link rel="prefetch" onClick={onToggleMenu} to={"/about-bulm"}>
                {t("menu.aboutBulm")}
              </Link>
            </li>
            <li className="flex items-center justify-between group uppercase">
              <Link
              rel="prefetch"
                onClick={onToggleMenu}
                to="/collections"
                className="text-4xl hover:text-black transition-colors"
              >
                {t("menu.collections")}
              </Link>
              <button
                onClick={() => setOpenCollections(!openCollections)}
                className="ml-2 text-white text-3xl w-full transform transition-transform duration-300 group-hover:text-black"
              >
                {openCollections ? "▲" : "▼"}
              </button>
            </li>

            {openCollections && (
              <ul className="pl-6 mt-2 space-y-2 text-2xl text-white">
                <li>
                  <Link
                  rel="prefetch"
                    onClick={onToggleMenu}
                    to="/collections/collections-cookers/"
                    className="hover:text-black uppercase"
                  >
                    {t("menu.collectionsCookers")}
                  </Link>
                </li>
                <li>
                  <Link
                  rel="prefetch"
                    onClick={onToggleMenu}
                    to="/collections/collections-hobs/"
                    className="hover:text-black uppercase"
                  >
                    {t("menu.collectionsHobs")}
                  </Link>
                </li>
                <li>
                  <Link
                  rel="prefetch"
                    onClick={onToggleMenu}
                    to="/collections/collections-ovens/"
                    className="hover:text-black uppercase"
                  >
                    {t("menu.collectionsOvens")}
                  </Link>
                </li>
              </ul>
            )}

            <li className="flex items-center justify-between group">
              <Link
              rel="prefetch"
                onClick={onToggleMenu}
                to="/product-category/cookers"
                className="text-4xl hover:text-black transition-colors uppercase"
              >
                {t("menu.products")}
              </Link>
              <button
                onClick={() => setOpenProducts(!openProducts)}
                className="ml-2 text-white w-full text-3xl transform transition-transform duration-300 group-hover:text-black"
              >
                {openProducts ? "▲" : "▼"}
              </button>
            </li>

            {openProducts && (
              <ul className="pl-6 mt-2 space-y-2 text-2xl text-white ">
                <li>
                  <Link
                  rel="prefetch"
                    onClick={onToggleMenu}
                    to="/product-category/cookers"
                    className="hover:text-black uppercase"
                  >
                    {t("menu.cookers")}
                  </Link>
                </li>
                <li>
                  <Link
                  rel="prefetch"
                    onClick={onToggleMenu}
                    to="/product-category/ovens"
                    className="hover:text-black uppercase"
                  >
                    {t("menu.ovens")}
                  </Link>
                </li>
                <li>
                  <Link
                  rel="prefetch"
                    onClick={onToggleMenu}
                    to="/product-category/hobs"
                    className="hover:text-black uppercase"
                  >
                    {t("menu.hobs")}
                  </Link>
                </li>
                <li>
                  <Link
                  rel="prefetch"
                    onClick={onToggleMenu}
                    to="/product-category/hoods"
                    className="hover:text-black uppercase"
                  >
                    {t("menu.hoods")}
                  </Link>
                </li>
                <li>
                  <Link
                  rel="prefetch"
                    onClick={onToggleMenu}
                    to="/product-category/compact-products"
                    className="hover:text-black uppercase"
                  >
                    {t("menu.compactProducts")}
                  </Link>
                </li>
              </ul>
            )}

            <li className="text-4xl hover:text-black transition-colors uppercase">
              <Link rel="prefetch" onClick={onToggleMenu} to="/dealers">
                {t("menu.dealers")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="text-white space-y-2 text-xl">
            <li>
              <Link
              rel="prefetch"
                onClick={onToggleMenu}
                to="/"
                className="p-2 hover:text-black transition-colors uppercase"
              >
                {t("menu.jobs")}
              </Link>
            </li>
            <li>
              <Link
              rel="prefetch"
                onClick={onToggleMenu}
                to="/ita/login"
                className="p-2 hover:text-black transition-colors uppercase"
              >
                {t("menu.service")}
              </Link>
            </li>
            <li>
              <Link
              rel="prefetch"
                onClick={onToggleMenu}
                to="/contacts"
                className="p-2 hover:text-black transition-colors uppercase"
              >
                {t("menu.contacts")}
              </Link>
            </li>
            <li>
              <Link
              rel="prefetch"
                onClick={onToggleMenu}
                to="/reserved-area"
                className="p-2 hover:text-black transition-colors uppercase"
              >
                {t("menu.reservedArea")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {!isMobile && (
        <div
          className={`fixed top-0 h-screen w-1/2 z-20 transition-all duration-700 ${
            openMenu
              ? "left-1/2 opacity-100 delay-300"
              : "left-0 opacity-0 -translate-x-full"
          }`}
        >
          <img
            src="https://www.elba-cookers.com/wp-content/uploads/2022/01/Vintage-2-1280x937.jpg.webp"
            alt="Menu Visual"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </>
  );
};

export default MenuHamburger;
