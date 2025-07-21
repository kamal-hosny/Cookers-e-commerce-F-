import { useTranslation } from "react-i18next";
import CollectionsLayout from "../../layouts/CollectionsLayout";
import { Helmet } from "react-helmet-async";

const Collections = () => {
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("collections.sections.0.title"),
      description: t("collections.sections.0.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Collections-Cookers.jpeg",
      link: "/collections/collections-cookers/",
      bgColor: "#9baec4",
      textColor: "#1d1d1b",
    },
    {
      id: 2,
      title: t("collections.sections.1.title"),
      description: t("collections.sections.1.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Collections-Hobs.jpeg",
      link: "/collections/collections-hobs/",
      bgColor: "#bbbfb0",
      textColor: "#1d1d1b",
    },
    {
      id: 3,
      title: t("collections.sections.2.title"),
      description: t("collections.sections.2.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Collections-Ovens.jpeg",
      link: "/collections/collections-ovens/",
      bgColor: "#3e4346",
      textColor: "#ffffff",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Collections | BULM</title>
        <meta
          name="description"
          content="Explore BULM's exclusive kitchen collections including cookers, hobs, and ovens. Designed with elegance and functionality for modern living."
        />
        <meta
          name="keywords"
          content="BULM, kitchen collections, cookers, hobs, ovens, Italian design, home appliances"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Kitchen Collections | BULM" />
        <meta
          property="og:description"
          content="Discover our premium kitchen collections crafted for performance and style. Cookers, hobs, ovens — all in one place."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bulm.it/collections" />
        <meta
          property="og:image"
          content="https://cms.bulm.it/wp-content/uploads/2025/07/Collections-Cookers.jpeg"
        />
      </Helmet>

      <CollectionsLayout
        title={t("collections.title")}
        subtitle={t("collections.subtitle")}
        description={t("collections.description")}
        sections={sections}
        bgColor="#30505b"
        textColor="#1d1d1b"
      />
    </>
  );
};

export default Collections;
