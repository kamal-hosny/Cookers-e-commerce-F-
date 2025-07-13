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

const Vintage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("collectionsCookers.vintage.sections.0.title"),
      description: t("collectionsCookers.vintage.sections.0.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/vintage-design-made-in-italy.jpg.webp",
    },
    {
      id: 2,
      title: t("collectionsCookers.vintage.sections.1.title"),
      description: t("collectionsCookers.vintage.sections.1.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/vintage-cast-iron-pan-supports.jpg.webp",
    },
    {
      id: 3,
      title: t("collectionsCookers.vintage.sections.2.title"),
      description: t("collectionsCookers.vintage.sections.2.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/vintage-knobs.jpg.webp",
    },
    {
      id: 4,
      title: t("collectionsCookers.vintage.sections.3.title"),
      description: t("collectionsCookers.vintage.sections.3.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/vintage-charming-design-details.jpg.webp",
    },
  ];

  const products: IProduct[] = [
    {
      id: 1,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-vintage-freestanding-cooker-vw-9653-m.png.webp",
      title: t("collectionsCookers.vintage.products.0.title"),
      code: t("collectionsCookers.vintage.products.0.code"),
    },
    {
      id: 2,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-vintage-freestanding-cooker-vx-965-fg.png.webp",
      title: t("collectionsCookers.vintage.products.1.title"),
      code: t("collectionsCookers.vintage.products.1.code"),
    },
    {
      id: 3,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-vintage-freestanding-cooker-vg-965-tm.png.webp",
      title: t("collectionsCookers.vintage.products.2.title"),
      code: t("collectionsCookers.vintage.products.2.code"),
    },
    {
      id: 4,
      type: "special",
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2023/06/01_Linea_Vintage_1-500x700_new.jpg.webp",
      title: t("collectionsCookers.vintage.products.3.title"),
      link: "/home",
      collections: "Vintage",
    },
  ];

  return (
  <>
<Helmet>
  <html lang="en" />
  <title>{t("collectionsCookers.vintage.meta.title")}</title>
  <meta
    name="description"
    content={t("collectionsCookers.vintage.meta.description")}
  />
  <meta
    name="keywords"
    content={t("collectionsCookers.vintage.meta.keywords")}
  />
  <meta name="robots" content="index, follow" />
  <link
    rel="canonical"
    href="https://bulm.it/collections/collections-cookers/vintage"
  />

  {/* hreflang for multilingual SEO */}
  <link
    rel="alternate"
    href="https://bulm.it/collections/collections-cookers/vintage"
    hrefLang="en"
  />
  <link
    rel="alternate"
    href="https://bulm.it/it/collections/collections-cookers/vintage"
    hrefLang="it"
  />
  <link
    rel="alternate"
    href="https://bulm.it/collections/collections-cookers/vintage"
    hrefLang="x-default"
  />

  {/* Open Graph (Facebook, LinkedIn) */}
  <meta
    property="og:title"
    content={t("collectionsCookers.vintage.meta.ogTitle")}
  />
  <meta
    property="og:description"
    content={t("collectionsCookers.vintage.meta.ogDescription")}
  />
  <meta
    property="og:image"
    content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-vintage-collection-range-cookers-made-in-italy.jpg.webp"
  />
  <meta
    property="og:url"
    content="https://bulm.it/collections/collections-cookers/vintage"
  />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content={t("collectionsCookers.vintage.meta.twitterTitle")}
  />
  <meta
    name="twitter:description"
    content={t("collectionsCookers.vintage.meta.twitterDescription")}
  />
  <meta
    name="twitter:image"
    content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-vintage-collection-range-cookers-made-in-italy.jpg.webp"
  />
</Helmet>



    <div>
      <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-vintage-collection-range-cookers-made-in-italy.jpg.webp" />
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

        <MainTitleCollections title={t("collectionsCookers.vintage.title")}>
          <p dangerouslySetInnerHTML={{ __html: t("collectionsCookers.vintage.description") }} />
        </MainTitleCollections>

        <BlocksGap sections={sections} />

        <DiscoverTheCollection products={products} />
      </div>
    </div>
  </>
  );
};

export default Vintage;
