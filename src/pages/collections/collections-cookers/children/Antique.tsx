import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";
import BlocksGap from "../../../../components/common/BlocksGap";
import MainTitleCollections from "../../../../components/common/MainTitleCollections";
import HeadCollection from "../../../../components/common/HeadCollection";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";



const Antique = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("antique.sections.1.title"),
      description: t("antique.sections.1.description"),
      image: "https://cms.bulm.it/wp-content/uploads/2025/07/Clementi-Gold-Wood-Fired-Pizza-Oven-The-Pizza-Oven-Shop-UK-1.webp",
    },
    {
      id: 2,
      title: t("antique.sections.2.title"),
      description: t("antique.sections.2.description"),
      image: "https://cms.bulm.it/wp-content/uploads/2025/07/112397811alt4-scaled.webp",
    },
    {
      id: 3,
      title: t("antique.sections.3.title"),
      description: t("antique.sections.3.description"),
      image: "https://cms.bulm.it/wp-content/uploads/2025/07/s-l1200.png",
    },
    {
      id: 4,
      title: t("antique.sections.4.title"),
      description: t("antique.sections.4.description"),
      image: "https://cms.bulm.it/wp-content/uploads/2025/07/61btHkn20BL._UF350350_QL80_.jpg",
    },
  ];



  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Antique | BULM</title>
        <meta name="description" content={t("antique.meta.description")} />
        <meta name="keywords" content={t("antique.meta.keywords")} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://cms.bulm.it/wp-content/uploads/2025/07/Antique.jpeg" />
        <link rel="alternate" href="https://cms.bulm.it/wp-content/uploads/2025/07/Antique.jpeg" hrefLang="en" />
        <link rel="alternate" href="https://cms.bulm.it/wp-content/uploads/2025/07/Antique.jpeg" hrefLang="it" />
        <link rel="alternate" href="https://cms.bulm.it/wp-content/uploads/2025/07/Antique.jpeg" hrefLang="x-default" />
        <meta property="og:title" content={t("antique.meta.title")} />
        <meta property="og:description" content={t("antique.meta.ogDescription")} />
        <meta property="og:image" content="https://cms.bulm.it/wp-content/uploads/2025/07/Elegant-1.jpeg" />
        <meta property="og:url" content="https://cms.bulm.it/wp-content/uploads/2025/07/Antique.jpeg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("antique.meta.title")} />
        <meta name="twitter:description" content={t("antique.meta.twitterDescription")} />
        <meta name="twitter:image" content="https://cms.bulm.it/wp-content/uploads/2025/07/Elegant-1.jpeg" />
      </Helmet>

      <div>
        <HeadCollection image="https://cms.bulm.it/wp-content/uploads/2025/07/Antique.jpeg" />
        <div className="container relative z-5 pt-[580px] pb-20 space-y-8">
          <div className="flex items-center justify-between">
            <Breadcrumbs linkColor="#000000" activeColor="#000000" separatorColor="#000000" />
            <button onClick={() => navigate(-1)} className="text-xl font-bold cursor-pointer">
              {t("antique.back")}
            </button>
          </div>

          <MainTitleCollections title={t("antique.title")}>
            <p>{t("antique.paragraph")}</p>
          </MainTitleCollections>

          <BlocksGap sections={sections} />
        </div>
      </div>
    </>
  );
};

export default Antique;
