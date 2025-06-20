import { useLocation } from "react-router-dom";

interface Props {
    openMenu: boolean;
    onToggleMenu: () => void;
  }


const MenuHamburger = ({openMenu, onToggleMenu} :Props) => {
    
  const { pathname } = useLocation();

  let barColor = "";
  let textColor = "";

  switch (pathname) {
    case "/catalogues":
      barColor = "bg-white";
      textColor = "text-white";
      break;
    default:
      barColor = "bg-[#30505b]";
      textColor = "text-[#30505b]";
  }
  
    console.log(openMenu);
    

    return (
    <div onClick={onToggleMenu } className="group relative flex items-center space-x-2 cursor-pointer">
      <div className="flex flex-col justify-center space-y-2.5">
        <span className={`w-13 h-0.5 ${barColor}`}></span>
        <span className={`w-13 h-0.5 ${barColor} transition-all duration-600 group-hover:translate-x-13.5`}></span>
        <span className={`w-13 h-0.5 ${barColor}`}></span>
      </div>
      <span className={`absolute uppercase opacity-0 -translate-x-12 top-0 transition-all duration-600 group-hover:translate-x-0.5  group-hover:opacity-100 ${textColor}   text-md font-medium`}>
        Menu
      </span>
    </div>
  );
};

export default MenuHamburger;
