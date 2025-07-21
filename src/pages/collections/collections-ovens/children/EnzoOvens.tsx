import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import BlocksGap from "../../../../components/common/BlocksGap";
import HeadCollection from "../../../../components/common/HeadCollection";
import MainTitleCollections from "../../../../components/common/MainTitleCollections";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";

const EnzoOvens = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("enzo.sections.0.title"),
      description: t("enzo.sections.0.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/cook61612860353.webp",
    },
    {
      id: 2,
      title: t("enzo.sections.1.title"),
      description: t("enzo.sections.1.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Easy-Steam.jpeg",
    },
    {
      id: 3,
      title: t("enzo.sections.2.title"),
      description: t("enzo.sections.2.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Gas-matik-hob-1.jpeg",
    },
    {
      id: 4,
      title: t("enzo.sections.3.title"),
      description: t("enzo.sections.3.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Idroclean.jpeg",
    },
  ];



  return (
    <>
      <Helmet>
      <title>Enzo | BULM</title>
        <meta name="description" content={t("enzo.seo.description")} />
        <meta name="keywords" content={t("enzo.seo.keywords")} />
        <meta property="og:title" content={t("enzo.seo.ogTitle")} />
        <meta property="og:description" content={t("enzo.seo.ogDescription")} />
        <meta
          property="og:image"
          content="https://cms.bulm.it/wp-content/uploads/2025/07/enzo-ovens.jpeg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://bulm.it/collections/collections-ovens/enzo-ovens"
        />
        <link
          rel="canonical"
          href="https://bulm.it/collections/collections-ovens/enzo-ovens"
        />
      </Helmet>

      <div>
        <HeadCollection image="https://cms.bulm.it/wp-content/uploads/2025/07/enzo-ovens-2.jpeg" />
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

          <MainTitleCollections title={t("enzo.title")}>
            <p>{t("enzo.description")}</p>
          </MainTitleCollections>

          <BlocksGap sections={sections} />
        </div>
      </div>
    </>
  );
};

export default EnzoOvens;
