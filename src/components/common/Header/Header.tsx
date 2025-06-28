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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // List of paths that should have transparent header at top
  const darkHeaderPaths = [
    "/catalogues",
    "/collections",
    "/about-bulm"
  ];

  // Check if current path starts with any of the darkHeaderPaths
  const isDarkPath = darkHeaderPaths.some(path => 
    pathname.startsWith(path)
  );

  // Determine background and text classes
  let bgClass = "bg-white text-[#1d1d1b]"; // Default for non-dark paths
  if (isDarkPath) {
    bgClass = isScrolled 
      ? "bg-white text-[#1d1d1b]" 
      : "bg-transparent text-white";
  }

  const heightClass = isScrolled ? "h-[80px] py-4" : "h-[160px] py-10";
  const headerClasses = "transition-all duration-300 ease-in-out fixed w-full z-50";

  return (
    <header className={`${headerClasses} ${bgClass} ${heightClass}`}>
      <div className="container flex justify-between items-center h-full">
        <MenuHamburger openMenu={openMenu} onToggleMenu={handleOpenMenu} isScrolled={isScrolled} />
        <Logo isScrolled={isScrolled} />
        <NavBar isScrolled={isScrolled} />
      </div>
    </header>
  );
};

export default Header;