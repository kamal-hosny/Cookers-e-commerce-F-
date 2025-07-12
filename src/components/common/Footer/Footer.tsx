import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  let footerClasses = "transition-all duration-300";

  switch (pathname) {
    case "/contacts":
      footerClasses += " bg-[#30505b] text-white";
      break;
    default:
      footerClasses += " bg-white text-[#1d1d1b]";
  }

  return (
    <footer
      className={`${footerClasses} py-8 px-4 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-20 lg:py-20`}
    >
      <div className="container ">
        <ul className="flex flex-col items-start space-y-6 text-center sm:flex-row sm:justify-around sm:space-y-0 font-medium text-sm">
          <li className="text-xl font-semibold">
             BULM ITALY SRL {new Date().getFullYear()}
          </li>
          <li className="space-y-3">
            <p className="underline">Service Area</p>
            
          </li>
          <li className="space-y-3">
          <p className="underline">
              <a href="mailto:info@bulm.it">info@bulm.it</a>
            </p>
            
          </li>
          <li className="space-y-3">
            <Link to="/company-info" className="underline block">
              Company info
            </Link>
            
          </li>
          <li className="space-y-3">
            
            <Link
              to="/privacy-policy"
              className="underline  block"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
