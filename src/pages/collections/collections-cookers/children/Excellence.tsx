import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import BlocksGap from "../../../../components/common/BlocksGap";
import DiscoverTheCollection from "../../../../components/common/DiscoverTheCollection";
import HeadCollection from "../../../../components/common/HeadCollection";
import MainTitleCollections from "../../../../components/common/MainTitleCollections";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";

interface IProduct {
  id: number;
  image: string;
  title: string;
  code?: string;
  link?: string;
  type?: "normal" | "special";
  collections?: string;
}

const Excellence = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("collectionsCookers.excellence.sections.0.title"),
      description: t("collectionsCookers.excellence.sections.0.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-excellence-touch-control-electronic-programmer.jpg.webp",
    },
    {
      id: 2,
      title: t("collectionsCookers.excellence.sections.1.title"),
      description: t("collectionsCookers.excellence.sections.1.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/excellence-brass-dual-burners.jpg.webp",
    },
    {
      id: 3,
      title: t("collectionsCookers.excellence.sections.2.title"),
      description: t("collectionsCookers.excellence.sections.2.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/excellence-brushed-metal-finishing-knobs-with-outer-bezel.jpg.webp",
    },
    {
      id: 4,
      title: t("collectionsCookers.excellence.sections.3.title"),
      description: t("collectionsCookers.excellence.sections.3.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/excellence-double-finishing-handle.jpg.webp",
    },
  ];

  const products: IProduct[] = [
    {
      id: 1,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-excellence-freestanding-cooker-ea-966-m.png.webp",
      title: t("collectionsCookers.excellence.products.0.title"),
      code: t("collectionsCookers.excellence.products.0.code"),
    },
    {
      id: 2,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-excellence-freestanding-cooker-eg-965-im.png.webp",
      title: t("collectionsCookers.excellence.products.1.title"),
      code: t("collectionsCookers.excellence.products.1.code"),
    },
    {
      id: 3,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-excellence-freestanding-cooker-ex-106-m.png.webp",
      title: t("collectionsCookers.excellence.products.2.title"),
      code: t("collectionsCookers.excellence.products.2.code"),
    },
    {
      id: 4,
      type: "special",
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2023/06/02_Linea_Excellence_1_500x700_new.jpg.webp",
      title: t("collectionsCookers.excellence.products.3.title"),
      link: "/home",
      collections: "Excellence",
    },
  ];

  return (
    <>
    <Helmet>
  <html lang="en" />
  <title>{t("collectionsCookers.excellence.meta.title")}</title>
  <meta
    name="description"
    content={t("collectionsCookers.excellence.meta.description")}
  />
  <meta
    name="keywords"
    content={t("collectionsCookers.excellence.meta.keywords")}
  />
  <meta name="robots" content="index, follow" />
  <link
    rel="canonical"
    href="https://bulm.it/collections/collections-cookers/excellence"
  />

  {/* hreflang for multilingual support */}
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

  {/* Open Graph */}
  <meta
    property="og:title"
    content={t("collectionsCookers.excellence.meta.ogTitle")}
  />
  <meta
    property="og:description"
    content={t("collectionsCookers.excellence.meta.ogDescription")}
  />
  <meta
    property="og:image"
    content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-excellence-collection-range-cookers-made-in-italy.jpg.webp"
  />
  <meta
    property="og:url"
    content="https://bulm.it/collections/collections-cookers/excellence"
  />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content={t("collectionsCookers.excellence.meta.twitterTitle")}
  />
  <meta
    name="twitter:description"
    content={t("collectionsCookers.excellence.meta.twitterDescription")}
  />
  <meta
    name="twitter:image"
    content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-excellence-collection-range-cookers-made-in-italy.jpg.webp"
  />
</Helmet>

<div>
      <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-excellence-collection-range-cookers-made-in-italy.jpg.webp" />
      <div className="container relative z-5 pt-[580px] pb-20 space-y-8">
        <div className="flex items-center justify-between">
          <Breadcrumbs
            linkColor={"#000000"}
            activeColor={"#000000"}
            separatorColor={"#000000"}
          />
          <button
            onClick={() => navigate(-1)}
            className="text-xl font-bold cursor-pointer"
          >
            {t("collectionsCookers.common.back")}
          </button>
        </div>

        <MainTitleCollections title={t("collectionsCookers.excellence.title")}>
          <p dangerouslySetInnerHTML={{ __html: t("collectionsCookers.excellence.description") }} />
        </MainTitleCollections>

        <BlocksGap sections={sections} />
        <DiscoverTheCollection products={products} />
      </div>
    </div>
    </>
  
  );
};

export default Excellence;
