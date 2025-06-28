import { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuHamburger from "./MenuHamburger";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    "/collections/collections-ovens/elio-ovens/",
    "/collections/collections-ovens/elio-giant-ovens/",
    "/collections/collections-ovens/alterum-ovens/",
    "/collections/collections-ovens/professional-ovens/",
    "/collections/collections-ovens/country-ovens/",
    "/collections/black-line-collection/",
    "/about-bulm"
  ];

  let headerClasses = "transition-all duration-300 ease-in-out fixed w-full z-50";
  let bgClass = "";

  if (darkHeaderPaths.includes(pathname)) {
    bgClass = pathname === "/catalogues" ? "bg-[#30505b] text-white" : "bg-transparent text-white";
  } else {
    bgClass = "bg-white text-[#1d1d1b]";
  }

  const heightClass = isScrolled ? "h-[80px] py-4 " : "h-[160px] py-10";

  return (
    <header className={`${headerClasses} ${bgClass} ${heightClass}`}>
      <div className="container flex justify-between items-center h-full">
        <MenuHamburger openMenu={openMenu} onToggleMenu={handleOpenMenu} />
        <Logo isScrolled={isScrolled} />

        <NavBar />
      </div>
    </header>
  );
};

export default Header;
