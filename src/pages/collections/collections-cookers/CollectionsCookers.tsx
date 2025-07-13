import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import CollectionsLayout from "../../../layouts/CollectionsLayout";

const CollectionsCookers = () => {
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("collectionsCookers.sections.vintage.title"),
      description: t("collectionsCookers.sections.vintage.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-vintage-collection-freestanding-cookers.jpg.webp",
      link: "/collections/collections-cookers/vintage/",
      bgColor: "#9baec4",
    },
    {
      id: 2,
      title: t("collectionsCookers.sections.excellence.title"),
      description: t("collectionsCookers.sections.excellence.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-excellence-collection-freestanding-cookers.jpg.webp",
      link: "/collections/collections-cookers/excellence/",
      bgColor: "#cdc0b1",
    },
    {
      id: 3,
      title: t("collectionsCookers.sections.fusion.title"),
      description: t("collectionsCookers.sections.fusion.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-fusion-collection-freestanding-cookers.jpg.webp",
      link: "/collections/collections-cookers/fusion",
      bgColor: "#c1949c",
    },
    {
      id: 4,
      title: t("collectionsCookers.sections.classic.title"),
      description: t("collectionsCookers.sections.classic.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-classic-collection-freestanding-cookers.jpg.webp",
      link: "/collections/collections-cookers/classic/",
      bgColor: "#bbbfaf",
    },
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{t("collectionsCookers.meta.title")}</title>
        <meta name="description" content={t("collectionsCookers.meta.description")} />
        <meta name="keywords" content={t("collectionsCookers.meta.keywords")} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bulm.it/collections/collections-cookers" />

        <link rel="alternate" href="https://bulm.it/collections/collections-cookers" hrefLang="en" />
        <link rel="alternate" href="https://bulm.it/it/collections/collections-cookers" hrefLang="it" />
        <link rel="alternate" href="https://bulm.it/collections/collections-cookers" hrefLang="x-default" />

        <meta property="og:title" content={t("collectionsCookers.meta.ogTitle")} />
        <meta property="og:description" content={t("collectionsCookers.meta.ogDescription")} />
        <meta
          property="og:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-vintage-collection-freestanding-cookers.jpg.webp"
        />
        <meta property="og:url" content="https://bulm.it/collections/collections-cookers" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("collectionsCookers.meta.twitterTitle")} />
        <meta name="twitter:description" content={t("collectionsCookers.meta.twitterDescription")} />
        <meta
          name="twitter:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-vintage-collection-freestanding-cookers.jpg.webp"
        />
      </Helmet>

      <CollectionsLayout
        title={t("collectionsCookers.title")}
        subtitle={t("collectionsCookers.subtitle")}
        description={t("collectionsCookers.description")}
        sections={sections}
        bgColor="#30505b"
      />
    </>
  );
};

export default CollectionsCookers;