import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";
import BlocksGap from "../../../../components/common/BlocksGap";
import MainTitleCollections from "../../../../components/common/MainTitleCollections";
import HeadCollection from "../../../../components/common/HeadCollection";
import BoxesFooter from "../../../../components/common/BoxesFooter";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const LandHobs = () => {
  const { t, i18n } = useTranslation("");
  const navigate = useNavigate();
  const currentLang = i18n.language;
  const isIt = currentLang === "it";

  const sections = [
    {
      id: 1,
      title: t("landHobs.sections.1.title"),
      description: t("landHobs.sections.1.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-country-collection-hobs.jpg.webp",
    },
  ];

  return (
    <>
      <Helmet>
        <html lang={currentLang} />
        <title>{t("landHobs.meta.title")}</title>
        <meta name="description" content={t("landHobs.meta.description")} />
        <meta name="keywords" content={t("landHobs.meta.keywords")} />
        <meta property="og:title" content={t("landHobs.meta.ogTitle")} />
        <meta property="og:description" content={t("landHobs.meta.ogDescription")} />
        <meta property="og:image" content={t("landHobs.meta.ogImage")} />
        <meta property="og:url" content={`https://bulm.it/${isIt ? "it/" : ""}collections/collections-hobs/land-hobs`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://bulm.it/${isIt ? "it/" : ""}collections/collections-hobs/land-hobs`} />
      </Helmet>

      <div>
        <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-country-collection-hobs.jpg.webp" />
        <div className="container  relative z-5 pt-[580px] pb-20 space-y-8">
          <div className="flex items-center justify-between">
            <Breadcrumbs linkColor={"#000000"} activeColor={"#000000"} separatorColor={"#000000"} />
            <button
              onClick={() => navigate(-1)}
              className="text-xl font-bold cursor-pointer"
            >
              {t("landHobs.back")}
            </button>
          </div>

          <MainTitleCollections title={t("landHobs.title")}> 
            <p dangerouslySetInnerHTML={{ __html: t("landHobs.description") }} />
          </MainTitleCollections>

          <BlocksGap sections={sections} />
          <BoxesFooter />
        </div>
      </div>
    </>
  );
};

export default LandHobs;
