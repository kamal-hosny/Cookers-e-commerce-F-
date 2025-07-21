import { Helmet } from "react-helmet-async";
import CollectionsLayout from "../../../layouts/CollectionsLayout";
import { useTranslation } from "react-i18next";

const CollectionsCookers = () => {
  const { t, i18n } = useTranslation("");

  const sections = [
    {
      id: 1,
      title: t("collectionsCookers.sections.antique.title"),
      description: t("collectionsCookers.sections.antique.description"),
      image:
        "/Home/Collections Cookers/Antique.jpeg",
      link: "/collections/collections-cookers/antique",
      bgColor: "#9baec4",
    },
    {
      id: 2,
      title: t("collectionsCookers.sections.perfection.title"),
      description: t("collectionsCookers.sections.perfection.description"),
      image:
        "/Home/Collections Cookers/Perfection.jpeg",
      link: "/collections/collections-cookers/perfection",
      bgColor: "#cdc0b1",
    },
    {
      id: 3,
      title: t("collectionsCookers.sections.mixture.title"),
      description: t("collectionsCookers.sections.mixture.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Mixture-1.jpeg",
      link: "/collections/collections-cookers/mixture",
      bgColor: "#c1949c",
    },
    {
      id: 4,
      title: t("collectionsCookers.sections.elegant.title"),
      description: t("collectionsCookers.sections.elegant.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Elegant-1.jpeg",
      link: "/collections/collections-cookers/elegant",
      bgColor: "#bbbfaf",
    },
  ];

  const currentLang = i18n.language;
  const isIt = currentLang === "it";

  return (
    <>
      <Helmet>
        <html lang={currentLang} />
        <title>Collections Cookers | BULM</title>
        <meta name="description" content={t("collectionsCookers.meta.description")} />
        <meta name="keywords" content={t("collectionsCookers.meta.keywords")} />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://bulm.it/${isIt ? "it/" : ""}collections/collections-cookers`}
        />

        {/* hreflang for multilingual SEO */}
        <link
          rel="alternate"
          href="https://bulm.it/collections/collections-cookers"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://bulm.it/it/collections/collections-cookers"
          hrefLang="it"
        />
        <link
          rel="alternate"
          href="https://bulm.it/collections/collections-cookers"
          hrefLang="x-default"
        />

        {/* Open Graph */}
        <meta property="og:title" content={t("collectionsCookers.meta.ogTitle")} />
        <meta property="og:description" content={t("collectionsCookers.meta.ogDescription")} />
        <meta property="og:image" content={t("collectionsCookers.meta.ogImage")} />
        <meta
          property="og:url"
          content={`https://bulm.it/${isIt ? "it/" : ""}collections/collections-cookers`}
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("collectionsCookers.meta.twitterTitle")} />
        <meta name="twitter:description" content={t("collectionsCookers.meta.twitterDescription")} />
        <meta name="twitter:image" content={t("collectionsCookers.meta.twitterImage")} />
      </Helmet>

      <CollectionsLayout
        title={t("collectionsCookers.layout.title")}
        subtitle={t("collectionsCookers.layout.subtitle")}
        description={t("collectionsCookers.layout.description")}
        sections={sections}
        bgColor="#30505b"
        textColor="#ffffff"
      />
    </>
  );
};

export default CollectionsCookers;
