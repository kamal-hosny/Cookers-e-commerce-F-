import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";
import BlocksGap from "../../../../components/common/BlocksGap";
import MainTitleCollections from "../../../../components/common/MainTitleCollections";
import HeadCollection from "../../../../components/common/HeadCollection";
import { Helmet } from "react-helmet-async";

const Perfection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("perfection.sections.0.title"),
      description: t("perfection.sections.0.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-excellence-touch-control-electronic-programmer.jpg.webp",
    },
    {
      id: 2,
      title: t("perfection.sections.1.title"),
      description: t("perfection.sections.1.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/excellence-brass-dual-burners.jpg.webp",
    },
    {
      id: 3,
      title: t("perfection.sections.2.title"),
      description: t("perfection.sections.2.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/excellence-brushed-metal-finishing-knobs-with-outer-bezel.jpg.webp",
    },
    {
      id: 4,
      title: t("perfection.sections.3.title"),
      description: t("perfection.sections.3.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/imgi_7_excellence-double-finishing-handle.jpg.png",
    },
  ];


  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{t("perfection.seo.title")}</title>
        <meta name="description" content={t("perfection.seo.description")} />
        <meta name="keywords" content={t("perfection.seo.keywords")} />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://bulm.it/collections/collections-cookers/excellence"
        />
        <link
          rel="alternate"
          href="https://bulm.it/collections/collections-cookers/excellence"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://bulm.it/it/collections/collections-cookers/excellence"
          hrefLang="it"
        />
        <link
          rel="alternate"
          href="https://bulm.it/collections/collections-cookers/excellence"
          hrefLang="x-default"
        />
        <meta property="og:title" content={t("perfection.seo.ogTitle")} />
        <meta
          property="og:description"
          content={t("perfection.seo.ogDescription")}
        />
        <meta
          property="og:image"
          content="https://cms.bulm.it/wp-content/uploads/2025/07/Perfection.jpeg"
        />
        <meta
          property="og:url"
          content="https://bulm.it/collections/collections-cookers/excellence"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("perfection.seo.ogTitle")} />
        <meta
          name="twitter:description"
          content={t("perfection.seo.twitterDescription")}
        />
        <meta
          name="twitter:image"
          content="https://cms.bulm.it/wp-content/uploads/2025/07/Perfection.jpeg"
        />
      </Helmet>

      <div>
        <HeadCollection image="https://cms.bulm.it/wp-content/uploads/2025/07/Perfection.jpeg" />
        <div className="container relative z-5 pt-[580px] pb-20 space-y-8">
          <div className="flex items-center justify-between">
            <Breadcrumbs
              linkColor="#000000"
              activeColor="#000000"
              separatorColor="#000000"
            />
            <button
              onClick={() => navigate(-1)}
              className="text-xl font-bold cursor-pointer"
            >
              Back_
            </button>
          </div>

          <MainTitleCollections title={t("perfection.title")}>
            <p>{t("perfection.description")}</p>
          </MainTitleCollections>

          <BlocksGap sections={sections} />
        </div>
      </div>
    </>
  );
};

export default Perfection;
