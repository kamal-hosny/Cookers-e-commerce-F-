import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";
import BlocksGap from "../../../../components/common/BlocksGap";
import DiscoverTheCollection from "../../../../components/common/DiscoverTheCollection";
import MainTitleCollections from "../../../../components/common/MainTitleCollections";
import HeadCollection from "../../../../components/common/HeadCollection";
import { Helmet } from "react-helmet-async";

const EnzoOvens = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("enzo.sections.0.title"),
      description: t("enzo.sections.0.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-maxi-cavity-74-litres.jpg.webp",
    },
    {
      id: 2,
      title: t("enzo.sections.1.title"),
      description: t("enzo.sections.1.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2023/05/easysteam-elba-900x600px-elba.jpg.webp",
    },
    {
      id: 3,
      title: t("enzo.sections.2.title"),
      description: t("enzo.sections.2.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-elio-gas-matik-hobs.jpg.webp",
    },
    {
      id: 4,
      title: t("enzo.sections.3.title"),
      description: t("enzo.sections.3.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2023/05/idroclean-elba-900x600px-elba.jpg.webp",
    },
  ];

  const products = [
    {
      id: 1,
      image: "https://www.elba-cookers.com/wp-content/uploads/2023/06/elba-elio-electric-multifunction-oven-el-11-xlb-300_front-on.jpg.webp",
      title: t("enzo.products.0.title"),
      code: "EN 11 XLB 300",
    },
    {
      id: 2,
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-electric-multifunction-oven-el-10-xlx-300.png.webp",
      title: t("enzo.products.1.title"),
      code: "EN 10 XLX 300",
    },
    {
      id: 3,
      type: "special",
      image: "https://www.elba-cookers.com/wp-content/uploads/2023/06/Elio_500x700_new.jpg.webp",
      title: t("enzo.products.2.title"),
      link: "/home",
      collections: "Enzo",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("enzo.seo.title")}</title>
        <meta name="description" content={t("enzo.seo.description")} />
        <meta name="keywords" content={t("enzo.seo.keywords")} />
        <meta property="og:title" content={t("enzo.seo.ogTitle")} />
        <meta property="og:description" content={t("enzo.seo.ogDescription")} />
        <meta
          property="og:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-collection-oven.jpg.webp"
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
        <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-collection-oven.jpg.webp" />
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
          <DiscoverTheCollection products={products} />
        </div>
      </div>
    </>
  );
};

export default EnzoOvens;
