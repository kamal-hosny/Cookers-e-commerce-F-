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
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-vintage-collection-freestanding-cookers.jpg.webp",
      link: "/collections/collections-cookers/vintage/",
      bgColor: "#9baec4",
    },
    {
      id: 2,
      title: t("uniqueCollections.sections.1.title"),
      description: t("uniqueCollections.sections.1.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-excellence-collection-freestanding-cookers.jpg.webp",
      link: "/collections/collections-cookers/excellence/",
      bgColor: "#cdc0b1",
    },
    {
      id: 3,
      title: t("uniqueCollections.sections.2.title"),
      description: t("uniqueCollections.sections.2.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-fusion-collection-freestanding-cookers.jpg.webp",
      link: "/collections/collections-classic/",
      bgColor: "#c1949c",
    },
    {
      id: 4,
      title: t("uniqueCollections.sections.3.title"),
      description: t("uniqueCollections.sections.3.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-classic-collection-freestanding-cookers.jpg.webp",
      link: "/collections/collections-cookers/classic/",
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
