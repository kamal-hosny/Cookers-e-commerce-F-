import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";
import BlocksGap from "../../../../components/common/BlocksGap";
import DiscoverTheCollection from "../../../../components/common/DiscoverTheCollection";
import MainTitleCollections from "../../../../components/common/MainTitleCollections";
import HeadCollection from "../../../../components/common/HeadCollection";
import { Helmet } from "react-helmet-async";

const EnzoTitanOvens = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("enzoTitan.sections.0.title"),
      description: t("enzoTitan.sections.0.description"),
      image: "https://cms.bulm.it/wp-content/uploads/2025/07/a-modern-kitchen-interior-with-a-built-i_1bo6k_7EQSiuzdzQpUhXCA_09rzgcGQS96n80BEP59U2g.jpeg",
    },
    {
      id: 2,
      title: t("enzoTitan.sections.1.title"),
      description: t("enzoTitan.sections.1.description"),
      image: "https://cms.bulm.it/wp-content/uploads/2025/07/Giant-gas-ovens.jpeg",
    },
  ];

  const products = [
    {
      id: 1,
      image: "https://cms.bulm.it/wp-content/uploads/2025/07/B101-501NERO-1.webp",
      title: t("enzoTitan.products.0.title"),
      code: "B101-501NERO",
      link: "/product/B101-501NERO",
    },
    {
      id: 2,
      image: "https://cms.bulm.it/wp-content/uploads/2025/07/BULM-B95-BLK-FM90KF06M3NNSB12P40.webp",
      title: t("enzoTitan.products.1.title"),
      code: "BULM95BLK",
      link: "/product/BULM95BLK",
    },
    {
      id: 3,
      image: "https://cms.bulm.it/wp-content/uploads/2025/07/210-969-B-DIGITAL-FM60CE09D6NNNB12P40.webp",
      title: t("enzoTitan.products.2.title"),
      code: "B101-501NERO",
      link: "/product/B101-501NERO",
    },
    {
      id: 4,
      type: "special",
      image: "https://cms.bulm.it/wp-content/uploads/2025/07/enzo-titan-ovens.jpeg",
      title: t("enzoTitan.products.3.title"),
      link: "/product-category/ovens",
      collections: "Titan",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("enzoTitan.seo.title")}</title>
        <meta name="description" content={t("enzoTitan.seo.description")} />
        <meta name="keywords" content={t("enzoTitan.seo.keywords")} />
        <meta property="og:title" content={t("enzoTitan.seo.ogTitle")} />
        <meta property="og:description" content={t("enzoTitan.seo.ogDescription")} />
        <meta
          property="og:image"
          content="https://cms.bulm.it/wp-content/uploads/2025/07/a-modern-kitchen-interior-with-a-built-i_1bo6k_7EQSiuzdzQpUhXCA_09rzgcGQS96n80BEP59U2g.jpeg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://bulm.it/collections/collections-ovens/enzo-titan-ovens"
        />
        <link
          rel="canonical"
          href="https://bulm.it/collections/collections-ovens/enzo-titan-ovens"
        />
      </Helmet>

      <div>
        <HeadCollection image="https://cms.bulm.it/wp-content/uploads/2025/07/enzo-titan-ovens.jpeg" />
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

          <MainTitleCollections title={t("enzoTitan.title")}>
            <p>{t("enzoTitan.description")}</p>
          </MainTitleCollections>

          <BlocksGap sections={sections} />
          <DiscoverTheCollection products={products} />
        </div>
      </div>
    </>
  );
};

export default EnzoTitanOvens;
