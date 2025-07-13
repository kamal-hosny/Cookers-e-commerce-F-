import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";
import BlocksGap from "../../../../components/common/BlocksGap";
import DiscoverTheCollection from "../../../../components/common/DiscoverTheCollection";
import MainTitleCollections from "../../../../components/common/MainTitleCollections";
import HeadCollection from "../../../../components/common/HeadCollection";
import { Helmet } from "react-helmet-async";

interface IProduct {
  id: number;
  image: string;
  title: string;
  code?: string;
  link?: string;
  type?: "normal" | "special";
  collections?: string;
}

const Classic = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("collectionsCookers.classic.sections.0.title"),
      description: t("collectionsCookers.classic.sections.0.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-classic-knobs.jpg.webp",
    },
    {
      id: 2,
      title: t("collectionsCookers.classic.sections.1.title"),
      description: t("collectionsCookers.classic.sections.1.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-classic-pan-supports.jpg.webp",
    },
    {
      id: 3,
      title: t("collectionsCookers.classic.sections.2.title"),
      description: t("collectionsCookers.classic.sections.2.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-classic-handle.jpg.webp",
    },
  ];

  const products: IProduct[] = [
    {
      id: 1,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-classic-freestanding-cooker-cxx-664-im.png.webp",
      title: t("collectionsCookers.classic.products.0.title"),
      code: t("collectionsCookers.classic.products.0.code"),
    },
    {
      id: 2,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-classic-freestanding-cooker-cxx-965-bm.png.webp",
      title: t("collectionsCookers.classic.products.1.title"),
      code: t("collectionsCookers.classic.products.1.code"),
    },
    {
      id: 3,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-classic-freestanding-cooker-cxx-965-vm.png.webp",
      title: t("collectionsCookers.classic.products.2.title"),
      code: t("collectionsCookers.classic.products.2.code"),
    },
    {
      id: 4,
      type: "special",
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2023/06/04_Linea_Classica_1_v2_500x700_new.jpg.webp",
      title: t("collectionsCookers.classic.products.3.title"),
      link: "/home",
      collections: "Classic",
    },
  ];

  return (
    <>
    <Helmet>
  <html lang="en" />
  <title>{t("collectionsCookers.classic.meta.title")}</title>
  <meta
    name="description"
    content={t("collectionsCookers.classic.meta.description")}
  />
  <meta
    name="keywords"
    content={t("collectionsCookers.classic.meta.keywords")}
  />
  <meta name="robots" content="index, follow" />
  <link
    rel="canonical"
    href="https://bulm.it/collections/collections-cookers/classic"
  />

  {/* hreflang for multilingual SEO */}
  <link
    rel="alternate"
    href="https://bulm.it/collections/collections-cookers/classic"
    hrefLang="en"
  />
  <link
    rel="alternate"
    href="https://bulm.it/it/collections/collections-cookers/classic"
    hrefLang="it"
  />
  <link
    rel="alternate"
    href="https://bulm.it/collections/collections-cookers/classic"
    hrefLang="x-default"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content={t("collectionsCookers.classic.meta.ogTitle")}
  />
  <meta
    property="og:description"
    content={t("collectionsCookers.classic.meta.ogDescription")}
  />
  <meta
    property="og:image"
    content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-classic-collection-range-cookers-made-in-italy.jpg.webp"
  />
  <meta
    property="og:url"
    content="https://bulm.it/collections/collections-cookers/classic"
  />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content={t("collectionsCookers.classic.meta.twitterTitle")}
  />
  <meta
    name="twitter:description"
    content={t("collectionsCookers.classic.meta.twitterDescription")}
  />
  <meta
    name="twitter:image"
    content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-classic-collection-range-cookers-made-in-italy.jpg.webp"
  />
</Helmet>
<div>
      <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-classic-collection-range-cookers-made-in-italy.jpg.webp" />
            <div className="container  relative z-5 pt-[580px] pb-20 space-y-8">
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

        <MainTitleCollections title={t("collectionsCookers.classic.title")}>
          <p dangerouslySetInnerHTML={{ __html: t("collectionsCookers.classic.description") }} />
        </MainTitleCollections>

        <BlocksGap sections={sections} />

        <DiscoverTheCollection products={products} />
      </div>
    </div>
    </>
    
  );
};

export default Classic;
