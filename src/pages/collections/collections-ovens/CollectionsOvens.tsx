import { Helmet } from "react-helmet-async";
import CollectionsLayout from "../../../layouts/CollectionsLayout";
import { useTranslation } from "react-i18next";

const CollectionsOvens = () => {
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("collections_ovens.sections.0.title"),
      description: t("collections_ovens.sections.0.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/27085R15_900x600.jpg.webp",
      link: "/collections/collections-cookers/",
      bgColor: "#e8e8e8",
      textColor: "#1d1d1b",
    },
    {
      id: 2,
      title: t("collections_ovens.sections.1.title"),
      description: t("collections_ovens.sections.1.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-giant-electric-multifunction-ovens.jpg.webp",
      link: "/collections/collections-hobs/",
      bgColor: "#3e4346",
      textColor: "#ffffff",
    },
    {
      id: 3,
      title: t("collections_ovens.sections.2.title"),
      description: t("collections_ovens.sections.2.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-country-built-in-ovens.jpg.webp",
      link: "/collections/collections-ovens/",
      bgColor: "#ede7d3",
      textColor: "#1d1d1b",
    },
    {
      id: 4,
      title: t("collections_ovens.sections.3.title"),
      description: t("collections_ovens.sections.3.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-collections-gas-electric-ovens.jpg.webp",
      link: "/collections/collections-ovens/",
      bgColor: "#b5b5b5",
      textColor: "#1d1d1b",
    },
    {
      id: 5,
      title: t("collections_ovens.sections.4.title"),
      description: t("collections_ovens.sections.4.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/05/elba-alterum-built-in-ovens.jpg.webp",
      link: "/collections/collections-ovens/",
      bgColor: "#ededb1",
      textColor: "#1d1d1b",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("collections_ovens.seo.title")}</title>
        <meta name="description" content={t("collections_ovens.seo.description")} />
        <meta name="keywords" content={t("collections_ovens.seo.keywords")} />
        <meta property="og:title" content={t("collections_ovens.seo.og_title")} />
        <meta property="og:description" content={t("collections_ovens.seo.og_description")} />
        <meta
          property="og:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2022/03/27085R15_900x600.jpg.webp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bulm.it/collections/collections-ovens" />
        <link rel="canonical" href="https://bulm.it/collections/collections-ovens" />
      </Helmet>

      <CollectionsLayout
        title={t("collections_ovens.title")}
        subtitle={t("collections_ovens.subtitle")}
        description={t("collections_ovens.description")}
        sections={sections}
        bgColor="#30505b"
        textColor="#ffffff"
      />
    </>
  );
};

export default CollectionsOvens;
