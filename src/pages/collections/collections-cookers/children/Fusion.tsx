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

const Fusion = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("collectionsCookers.fusion.sections.0.title"),
      description: t("collectionsCookers.fusion.sections.0.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-fusion-startend-of-cooking-electronic-programmer.jpg.webp",
    },
    {
      id: 2,
      title: t("collectionsCookers.fusion.sections.1.title"),
      description: t("collectionsCookers.fusion.sections.1.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-fusion-cast-iron-pan-supports.jpg.webp",
    },
    {
      id: 3,
      title: t("collectionsCookers.fusion.sections.2.title"),
      description: t("collectionsCookers.fusion.sections.2.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-fusion-brushed-metal-handle.jpg.webp",
    },
    {
      id: 4,
      title: t("collectionsCookers.fusion.sections.3.title"),
      description: t("collectionsCookers.fusion.sections.3.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-fusion-knobs.jpg.webp",
    },
  ];

  const products: IProduct[] = [
    {
      id: 1,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-fusion-freestanding-cooker-fr-9642-m.png.webp",
      title: t("collectionsCookers.fusion.products.0.title"),
      code: t("collectionsCookers.fusion.products.0.code"),
    },
    {
      id: 2,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-fusion-freestanding-cooker-fa-9642-m.png.webp",
      title: t("collectionsCookers.fusion.products.1.title"),
      code: t("collectionsCookers.fusion.products.1.code"),
    },
    {
      id: 3,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-fusion-freestanding-cooker-fx-9642-m.png.webp",
      title: t("collectionsCookers.fusion.products.2.title"),
      code: t("collectionsCookers.fusion.products.2.code"),
    },
    {
      id: 4,
      type: "special",
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2023/06/03_Linea_Fusion_1_500x700_new.jpg.webp",
      title: t("collectionsCookers.fusion.products.3.title"),
      link: "/home",
      collections: "Fusion",
    },
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>
          {t("collectionsCookers.fusion.meta.title")}
        </title>
        <meta
          name="description"
          content={t("collectionsCookers.fusion.meta.description")}
        />
        <meta
          name="keywords"
          content={t("collectionsCookers.fusion.meta.keywords")}
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://bulm.it/collections/collections-cookers/fusion"
        />

        {/* hreflang tags */}
        <link
          rel="alternate"
          href="https://bulm.it/collections/collections-cookers/fusion"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://bulm.it/it/collections/collections-cookers/fusion"
          hrefLang="it"
        />
        <link
          rel="alternate"
          href="https://bulm.it/collections/collections-cookers/fusion"
          hrefLang="x-default"
        />

        {/* Open Graph for social sharing */}
        <meta
          property="og:title"
          content={t("collectionsCookers.fusion.meta.ogTitle")}
        />
        <meta
          property="og:description"
          content={t("collectionsCookers.fusion.meta.ogDescription")}
        />
        <meta
          property="og:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-fusion-collection-range-cookers-made-in-italy.jpg.webp"
        />
        <meta
          property="og:url"
          content="https://bulm.it/collections/collections-cookers/fusion"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={t("collectionsCookers.fusion.meta.twitterTitle")}
        />
        <meta
          name="twitter:description"
          content={t("collectionsCookers.fusion.meta.twitterDescription")}
        />
        <meta
          name="twitter:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-fusion-collection-range-cookers-made-in-italy.jpg.webp"
        />
      </Helmet>

      <div>
        <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-fusion-collection-range-cookers-made-in-italy.jpg.webp" />
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

          <MainTitleCollections title={t("collectionsCookers.fusion.title")}>
            <p dangerouslySetInnerHTML={{ __html: t("collectionsCookers.fusion.description") }} />
          </MainTitleCollections>

          <BlocksGap sections={sections} />

          <DiscoverTheCollection products={products} />
        </div>
      </div>
    </>
  );
};

export default Fusion;
