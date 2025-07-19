import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RightPin = () => {
  const { t } = useTranslation();

  const links = [
    {
      name: t("rightPin.jobs"),
      href: "/",
    },
    {
      name: t("rightPin.contactUs"),
      href: "/contacts",
    },
    {
      name: t("rightPin.reservedArea"),
      href: "/reserved-area",
    },
  ];

  return (
    <div className="fixed max-md:hidden right-0 bottom-1/2 translate-y-1/2 flex z-5 justify-center items-center [writing-mode:vertical-rl] rotate-180">
      {links.map((link, index) => (
        <Link
        rel="prefetch"
          to={link.href}
          className="block w-full border-b-2 whitespace-nowrap border-[#1d1d1b] text-[#1d1d1b]  text-xs font-medium uppercase tracking-widest hover:text-[#f5f5f5] hover:bg-[#1d1d1b] px-5 py-3 hover:border-[#f5f5f5] transition-all duration-300 ease-in-out"
          key={index}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default RightPin;
