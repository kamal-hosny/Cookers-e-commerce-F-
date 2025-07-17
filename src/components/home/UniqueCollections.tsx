import { useTranslation } from "react-i18next";
import Blocks from "../common/Blocks";

const UniqueCollections = () => {
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("uniqueCollections.sections.0.title"),
      description: t("uniqueCollections.sections.0.description"),
      image:
        "/Home/Collections Cookers/Antique.jpeg",
      link: "/collections/collections-cookers/antique/",
      bgColor: "#9baec4",
    },
    {
      id: 2,
      title: t("uniqueCollections.sections.1.title"),
      description: t("uniqueCollections.sections.1.description"),
      image:
        "/Home/Collections Cookers/Perfection.jpeg",
      link: "/collections/collections-cookers/perfection/",
      bgColor: "#cdc0b1",
    },
    {
      id: 3,
      title: t("uniqueCollections.sections.2.title"),
      description: t("uniqueCollections.sections.2.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Mixture-1.jpeg",
      link: "/collections/collections-cookers/mixture/",
      bgColor: "#c1949c",
    },
    {
      id: 4,
      title: t("uniqueCollections.sections.3.title"),
      description: t("uniqueCollections.sections.3.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Elegant-1.jpeg",
      link: "/collections/collections-cookers/elegant/",
      bgColor: "#bbbfaf",
    },
  ];

  return (
    <div className="w-full py-10 container flex flex-col gap-16 items-center justify-center bg-white">
      <div className="titles w-full text-center">
        <p className="text-3xl font-medium">
          {t("uniqueCollections.heading")} <br /> <b>{t("uniqueCollections.subheading")}</b>
        </p>
      </div>

      <Blocks sections={sections} />
    </div>
  );
};

export default UniqueCollections;
