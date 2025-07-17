import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const BoxesFooter = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const card = [
    {
      key: "card1",
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-17-at-13.00.30_33c00c23.jpg",
      className: "bg-[#30505b] text-white",
      link: "/dealers",
    },
    {
      key: "card2",
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-17-at-13.00.31_47db0b99.jpg",
      className: "bg-[#1d1d1b] text-white",
      link: "/reserved-area",
    },
    {
      key: "card3",
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-17-at-13.00.32_ac0d7365.jpg",
      className: "bg-[#72909a] text-white",
      link: "/about-us", // نستخدمه فقط لتبديل اللغة
    },
  ];

  const handleNavigate = (path: string) => {
    if (path === "/about-us") {
      const newLang = i18n.language === "en" ? "it" : "en";
      i18n.changeLanguage(newLang);
      document.documentElement.lang = newLang;
      document.documentElement.dir = "ltr";
      return;
    }

    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {card.map((item, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden transition-all duration-300"
          >
            <div className={`p-8 h-48 ${item.className}`}>
              <h3
                className={`text-2xl font-bold mb-6 ${
                  index === 1 ? "text-[#72909a]" : ""
                }`}
              >
                {t(`boxesFooter.${item.key}.title`)}
              </h3>
              <p className="mb-4">{t(`boxesFooter.${item.key}.description`)}</p>
            </div>

            <div className="relative group">
              <img
                src={item.image}
                alt={t(`boxesFooter.${item.key}.title`)}
                className="w-full h-48 object-cover"
              />

              <button
                onClick={() => item.link && handleNavigate(item.link)}
                disabled={!item.link}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold w-3/4 px-4 py-2 transition-transform bg-white underline cursor-pointer group-hover:scale-105`}
              >
                {t(`boxesFooter.${item.key}.button`)}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxesFooter;
