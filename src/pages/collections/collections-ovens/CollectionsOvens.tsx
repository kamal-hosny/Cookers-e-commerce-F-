import { Helmet } from "react-helmet-async";
import CollectionsLayout from "../../../layouts/CollectionsLayout";
import { useTranslation } from "react-i18next";

const CollectionsOvens = () => {
  const { t, i18n } = useTranslation("");

  const sections = [
    {
      id: 1,
      title: t("collectionsOvens.sections.enzo.title"),
      description: t("collectionsOvens.sections.enzo.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Enzo.jpeg",
      link: "/collections/collections-ovens/enzo-ovens",
      bgColor: "#e8e8e8",
      textColor: "#1d1d1b",
    },
    {
      id: 2,
      title: t("collectionsOvens.sections.enzoTitan.title"),
      description: t("collectionsOvens.sections.enzoTitan.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Enzo-Titan.jpeg",
      link: "/collections/collections-ovens/enzo-titan-ovens",
      bgColor: "#3e4346",
      textColor: "#ffffff",
    },
    {
      id: 3,
      title: t("collectionsOvens.sections.land.title"),
      description: t("collectionsOvens.sections.land.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Land.jpeg",
      link: "/collections/collections-ovens/land-ovens",
      bgColor: "#ede7d3",
      textColor: "#1d1d1b",
    },
    {
      id: 4,
      title: t("collectionsOvens.sections.expert.title"),
      description: t("collectionsOvens.sections.expert.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Expert.jpeg",
      link: "/collections/collections-ovens/expert-ovens",
      bgColor: "#b5b5b5",
      textColor: "#1d1d1b",
    },
    {
      id: 5,
      title: t("collectionsOvens.sections.alterum.title"),
      description: t("collectionsOvens.sections.alterum.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Alternate.jpeg",
      link: "/collections/collections-ovens/alterum-ovens",
      bgColor: "#ededb1",
      textColor: "#1d1d1b",
    },
  ];

  const currentLang = i18n.language;
  const isIt = currentLang === "it";

  return (
    <>
      <Helmet>
        <html lang={currentLang} />
        <title>Collections Ovens | BULM</title>
        <meta name="description" content={t("collectionsOvens.meta.description")} />
        <meta name="keywords" content={t("collectionsOvens.meta.keywords")} />
        <meta property="og:title" content={t("collectionsOvens.meta.ogTitle")} />
        <meta property="og:description" content={t("collectionsOvens.meta.ogDescription")} />
        <meta property="og:image" content={t("collectionsOvens.meta.ogImage")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://bulm.it/${isIt ? "it/" : ""}collections/collections-ovens`} />
        <link rel="canonical" href={`https://bulm.it/${isIt ? "it/" : ""}collections/collections-ovens`} />
      </Helmet>

      <CollectionsLayout
        title={t("collectionsOvens.layout.title")}
        subtitle={t("collectionsOvens.layout.subtitle")}
        description={t("collectionsOvens.layout.description")}
        sections={sections}
        bgColor="#30505b"
        textColor="#ffffff"
      />
    </>
  );
};

export default CollectionsOvens;
