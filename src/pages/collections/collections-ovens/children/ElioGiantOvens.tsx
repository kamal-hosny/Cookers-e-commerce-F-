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

const ElioGiantOvens = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("elio_giant_ovens.sections.0.title"),
      description: t("elio_giant_ovens.sections.0.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-elio-giant-electric-multifunction-ovens.jpg.webp",
    },
    {
      id: 2,
      title: t("elio_giant_ovens.sections.1.title"),
      description: t("elio_giant_ovens.sections.1.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-collections-gas-induction-gas-on-glass-hobs.jpg.webphttps://www.elba-cookers.com/wp-content/uploads/2022/02/elba-elio-giant-gas-collection-ovens.jpg.webp",
    },
  ];

  const products: IProduct[] = [
    {
      id: 1,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-gas-oven-elio-g90.png.webp",
      title: t("elio_giant_ovens.products.0.title"),
      code: "ELIO G90",
    },
    {
      id: 2,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-gas-oven-elio-g92.png.webp",
      title: t("elio_giant_ovens.products.1.title"),
      code: "ELIO G92",
    },
    {
      id: 3,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-electric-multifunction-oven-140-e95-mf.png.webp",
      title: t("elio_giant_ovens.products.2.title"),
      code: "140-E95 MF",
    },
    {
      id: 4,
      type: "special",
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/05/Patate_500x700.jpg.webp",
      title: t("elio_giant_ovens.products.3.title"),
      link: "/home",
      collections: "Giant",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("elio_giant_ovens.seo.title")}</title>
        <meta name="description" content={t("elio_giant_ovens.seo.description")} />
        <meta name="keywords" content={t("elio_giant_ovens.seo.keywords")} />
        <meta property="og:title" content={t("elio_giant_ovens.seo.og_title")} />
        <meta
          property="og:description"
          content={t("elio_giant_ovens.seo.og_description")}
        />
        <meta
          property="og:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-giant-collection.jpg.webp"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://bulm.it/collections/collections-ovens/elio-giant-ovens"
        />
        <link
          rel="canonical"
          href="https://bulm.it/collections/collections-ovens/elio-giant-ovens"
        />
      </Helmet>

      <div>
        <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-giant-collection.jpg.webp" />
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
              Back_
            </button>
          </div>

          <MainTitleCollections title={t("elio_giant_ovens.title")}> 
            <p>{t("elio_giant_ovens.description")}</p>
          </MainTitleCollections>

          <BlocksGap sections={sections} />

          <DiscoverTheCollection products={products} />
        </div>
      </div>
    </>
  );
};

export default ElioGiantOvens;
