import { useState } from "react";
import Logo from "./Logo";
import MenuHamburger from "./MenuHamburger";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const darkHeaderPaths = [
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
    "/collections/collections-hobs/country-hobs/",
    "/collections/collections-ovens/elio-ovens/",
    "/collections/collections-ovens/elio-giant-ovens/",
    "/collections/collections-ovens/alterum-ovens/",
    "/collections/collections-ovens/professional-ovens/",
    "/collections/collections-ovens/country-ovens/",
    "/collections/black-line-collection/",
    "/about-bulm"
  ];

  let footerClasses = "transition-all duration-300";

  if (darkHeaderPaths.includes(pathname)) {
    footerClasses +=
      pathname === "/catalogues"
        ? " bg-[#30505b] text-white"
        : " bg-transparent text-white";
  } else {
    footerClasses += " bg-white text-[#1d1d1b]";
  }

  return (
    <header className={`relative z-10 pt-10 h-[160px] ${footerClasses}`}>
      <div className="container flex justify-between items-center">
        <MenuHamburger openMenu={openMenu} onToggleMenu={handleOpenMenu} />
        <Logo />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
