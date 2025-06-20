
import { useState } from 'react'
import Logo from './Logo'
import MenuHamburger from './MenuHamburger'
import NavBar from './NavBar'
import { useLocation } from 'react-router-dom'

const Header = () => {
  
  const { pathname } = useLocation();

  let footerClasses = "transition-all duration-300";

  switch (pathname) {
    case "/catalogues":
      footerClasses += " bg-[#30505b] text-white";
      break;
    default:
      footerClasses += " bg-white text-[#1d1d1b]";
  }


  const [openMenu, setOpenMenu] = useState(false)
  
  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <header className={`relative z-10  pt-10 h-[160px] ${footerClasses}`}>
<div className='container flex justify-between items-center'>
<MenuHamburger openMenu={openMenu} onToggleMenu={handleOpenMenu} />
      <Logo />
      <NavBar />
</div>

    </header>
  )
}

export default Header