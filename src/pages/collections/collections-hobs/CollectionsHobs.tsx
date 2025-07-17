import { Helmet } from "react-helmet-async";
import CollectionsLayout from "../../../layouts/CollectionsLayout";
import { useTranslation } from "react-i18next";

const CollectionsHobs = () => {
  const { t, i18n } = useTranslation("");
  const isIt = i18n.language === "it";

  const sections = [
    {
      id: 1,
      title: t("collectionsHobs.sections.enzo.title"),
      description: t("collectionsHobs.sections.enzo.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Enzo-Hobs.jpg",
      link: "/collections/collections-hobs/enzo-hobs",
      bgColor: "#e8e8e8",
      textColor: "#1d1d1b",
    },
    {
      id: 2,
      title: t("collectionsHobs.sections.land.title"),
      description: t("collectionsHobs.sections.land.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Land-Hobs.jpeg",
      link: "/collections/collections-hobs/land-hobs",
      bgColor: "#ede7d3",
      textColor: "#1d1d1b",
    },
  ];

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("collectionsHobs.meta.title")}</title>
        <meta name="description" content={t("collectionsHobs.meta.description")} />
        <meta name="keywords" content={t("collectionsHobs.meta.keywords")} />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://bulm.it/${isIt ? "it/" : ""}collections/collections-hobs`}
        />

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

        <meta property="og:title" content={t("collectionsHobs.meta.ogTitle")} />
        <meta property="og:description" content={t("collectionsHobs.meta.ogDescription")} />
        <meta property="og:image" content={t("collectionsHobs.meta.ogImage")} />
        <meta
          property="og:url"
          content={`https://bulm.it/${isIt ? "it/" : ""}collections/collections-hobs`}
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("collectionsHobs.meta.twitterTitle")} />
        <meta name="twitter:description" content={t("collectionsHobs.meta.twitterDescription")} />
        <meta name="twitter:image" content={t("collectionsHobs.meta.twitterImage")} />
      </Helmet>

      <CollectionsLayout
        title={t("collectionsHobs.layout.title")}
        subtitle={t("collectionsHobs.layout.subtitle")}
        description={t("collectionsHobs.layout.description")}
        sections={sections}
        bgColor="#30505b"
        textColor="#ffffff"
      />
    </>
  );
};

export default CollectionsHobs;
