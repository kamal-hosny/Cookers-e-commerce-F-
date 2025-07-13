import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";
import BlocksGap from "../../../../components/common/BlocksGap";
import MainTitleCollections from "../../../../components/common/MainTitleCollections";
import HeadCollection from "../../../../components/common/HeadCollection";
import BoxesFooter from "../../../../components/common/BoxesFooter";

const AlterumOvens = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("alterum_ovens.sections.0.title"),
      description: t("alterum_ovens.sections.0.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-easy-steam-oven.jpg.webp",
    },
    {
      id: 2,
      title: t("alterum_ovens.sections.1.title"),
      description: t("alterum_ovens.sections.1.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-idroclean-oven.jpg.webp",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("alterum_ovens.seo.title")}</title>
        <meta name="description" content={t("alterum_ovens.seo.description")} />
        <meta name="keywords" content={t("alterum_ovens.seo.keywords")} />
        <meta property="og:title" content={t("alterum_ovens.seo.og_title")} />
        <meta property="og:description" content={t("alterum_ovens.seo.og_description")} />
        <meta
          property="og:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-alterum-collection-oven.jpg.webp"
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
        <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-alterum-collection-oven.jpg.webp" />
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

          <MainTitleCollections title={t("alterum_ovens.title")}>
            <p>{t("alterum_ovens.description")}</p>
          </MainTitleCollections>

          <BlocksGap sections={sections} />

          <BoxesFooter />
        </div>
      </div>
    </>
  );
};

export default AlterumOvens;
