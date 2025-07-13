import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

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
      <div className="container">
        <ul className="flex flex-col items-start space-y-6 text-center sm:flex-row sm:justify-around sm:space-y-0 font-medium text-sm">
          <li className="text-xl font-semibold">
            {t("footer.company")} {new Date().getFullYear()}
          </li>
          <li className="space-y-3">
            <Link to="/ita/Login" className="underline">
              {t("footer.serviceArea")}
            </Link>
          </li>
          <li className="space-y-3">
            <p className="underline">
              <a href="mailto:info@bulm.it">info@bulm.it</a>
            </p>
          </li>
          <li className="space-y-3">
            <Link to="/company-info" className="underline block">
              {t("footer.companyInfo")}
            </Link>
          </li>
          <li className="space-y-3">
            <Link to="/privacy-policy" className="underline block">
              {t("footer.privacyPolicy")}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
