import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";
import BlocksGap from "../../../../components/common/BlocksGap";
import MainTitleCollections from "../../../../components/common/MainTitleCollections";
import HeadCollection from "../../../../components/common/HeadCollection";
import BoxesFooter from "../../../../components/common/BoxesFooter";
import { Helmet } from "react-helmet-async";

const AlternateOvens = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("alterum.sections.0.title"),
      description: t("alterum.sections.0.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/0793547_4.jpg",
    },
    {
      id: 2,
      title: t("alterum.sections.1.title"),
      description: t("alterum.sections.1.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/25286293_KnowYourApplianceOvensActiveClean_2720x1530px.webp",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Alternate | BULM</title>
        <meta name="description" content={t("alterum.seo.description")} />
        <meta name="keywords" content={t("alterum.seo.keywords")} />
        <meta property="og:title" content={t("alterum.seo.ogTitle")} />
        <meta property="og:description" content={t("alterum.seo.ogDescription")} />
        <meta
          property="og:image"
          content="https://cms.bulm.it/wp-content/uploads/2025/07/alterum.jpeg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://bulm.it/collections/collections-ovens/alterum-ovens"
        />
        <link
          rel="canonical"
          href="https://bulm.it/collections/collections-ovens/alterum-ovens"
        />
      </Helmet>

      <div>
        <HeadCollection image="https://cms.bulm.it/wp-content/uploads/2025/07/alterum.jpeg" />
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
              Back
            </button>
          </div>

          <MainTitleCollections title={t("alterum.title")}>
            <p>{t("alterum.description")}</p>
          </MainTitleCollections>

          <BlocksGap sections={sections} />
          <BoxesFooter />
        </div>
      </div>
    </>
  );
};

export default AlternateOvens;
