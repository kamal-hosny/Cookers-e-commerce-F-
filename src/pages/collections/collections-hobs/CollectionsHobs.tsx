import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import CollectionsLayout from "../../../layouts/CollectionsLayout";

const CollectionsHobs = () => {
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("collections_hobs.sections.elio.title"),
      description: t("collections_hobs.sections.elio.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-collections-gas-induction-gas-on-glass-hobs.jpg.webp",
      link: "/collections/collections-hobs/elio-hobs",
      bgColor: "#e8e8e8",
      textColor: "#1d1d1b",
    },
    {
      id: 2,
      title: t("collections_hobs.sections.country.title"),
      description: t("collections_hobs.sections.country.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-giant-electric-multifunction-ovens.jpg.webp",
      link: "/collections/collections-hobs/country-hobs",
      bgColor: "#ede7d3",
      textColor: "#1d1d1b",
    },
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{t("collections_hobs.page_title")}</title>
        <meta
          name="description"
          content={t("collections_hobs.page_description")}
        />
        <meta name="keywords" content={t("collections_hobs.meta_keywords")} />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://bulm.it/collections/collections-hobs"
        />

        {/* hreflang for multilingual SEO */}
        <link
          rel="alternate"
          href="https://bulm.it/collections/collections-hobs"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://bulm.it/it/collections/collections-hobs"
          hrefLang="it"
        />
        <link
          rel="alternate"
          href="https://bulm.it/collections/collections-hobs"
          hrefLang="x-default"
        />

        {/* Open Graph */}
        <meta property="og:title" content={t("collections_hobs.page_title")} />
        <meta
          property="og:description"
          content={t("collections_hobs.og_description")}
        />
        <meta
          property="og:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-collections-gas-induction-gas-on-glass-hobs.jpg.webp"
        />
        <meta
          property="og:url"
          content="https://bulm.it/collections/collections-hobs"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("collections_hobs.page_title")} />
        <meta
          name="twitter:description"
          content={t("collections_hobs.twitter_description")}
        />
        <meta
          name="twitter:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-collections-gas-induction-gas-on-glass-hobs.jpg.webp"
        />
      </Helmet>

      <CollectionsLayout
        title={t("collections_hobs.layout.title")}
        subtitle={t("collections_hobs.layout.subtitle")}
        description={t("collections_hobs.layout.description")}
        sections={sections}
        bgColor="#30505b"
        textColor="#ffffff"
      />
    </>
  );
};

export default CollectionsHobs;
