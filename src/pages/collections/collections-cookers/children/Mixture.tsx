import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";
import BlocksGap from "../../../../components/common/BlocksGap";
import DiscoverTheCollection from "../../../../components/common/DiscoverTheCollection";
import MainTitleCollections from "../../../../components/common/MainTitleCollections";
import HeadCollection from "../../../../components/common/HeadCollection";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface IProduct {
  id: number;
  image: string;
  title: string;
  code?: string;
  link?: string;
  type?: "normal" | "special";
  collections?: string;
}

const Mixture = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("mixture.sections.1.title"),
      description: t("mixture.sections.1.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-fusion-startend-of-cooking-electronic-programmer.jpg.webp",
    },
    {
      id: 2,
      title: t("mixture.sections.2.title"),
      description: t("mixture.sections.2.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-fusion-cast-iron-pan-supports.jpg.webp",
    },
    {
      id: 3,
      title: t("mixture.sections.3.title"),
      description: t("mixture.sections.3.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-fusion-brushed-metal-handle.jpg.webp",
    },
    {
      id: 4,
      title: t("mixture.sections.4.title"),
      description: t("mixture.sections.4.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-fusion-knobs.jpg.webp",
    },
  ];

  const products: IProduct[] = [
    {
      id: 1,
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-fusion-freestanding-cooker-fr-9642-m.png.webp",
      title: t("mixture.products.1.title"),
      code: "FR 9642 M",
    },
    {
      id: 2,
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-fusion-freestanding-cooker-fa-9642-m.png.webp",
      title: t("mixture.products.2.title"),
      code: "FA 9642 M",
    },
    {
      id: 3,
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-fusion-freestanding-cooker-fx-9642-m.png.webp",
      title: t("mixture.products.3.title"),
      code: "FX 9642 M",
    },
    {
      id: 4,
      type: "special",
      image: "https://www.elba-cookers.com/wp-content/uploads/2023/06/03_Linea_Fusion_1_500x700_new.jpg.webp",
      title: t("mixture.products.4.title"),
      link: "/home",
      collections: "Mixture",
    },
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{t("mixture.meta.title")}</title>
        <meta name="description" content={t("mixture.meta.description")} />
        <meta name="keywords" content={t("mixture.meta.keywords")} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bulm.it/collections/collections-cookers/fusion" />
        <link rel="alternate" href="https://bulm.it/collections/collections-cookers/fusion" hrefLang="en" />
        <link rel="alternate" href="https://bulm.it/it/collections/collections-cookers/fusion" hrefLang="it" />
        <link rel="alternate" href="https://bulm.it/collections/collections-cookers/fusion" hrefLang="x-default" />
        <meta property="og:title" content={t("mixture.meta.ogTitle")} />
        <meta property="og:description" content={t("mixture.meta.ogDescription")} />
        <meta property="og:image" content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-fusion-collection-range-cookers-made-in-italy.jpg.webp" />
        <meta property="og:url" content="https://bulm.it/collections/collections-cookers/fusion" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("mixture.meta.twitterTitle")} />
        <meta name="twitter:description" content={t("mixture.meta.twitterDescription")} />
        <meta name="twitter:image" content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-fusion-collection-range-cookers-made-in-italy.jpg.webp" />
      </Helmet>

      <div>
        <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-fusion-collection-range-cookers-made-in-italy.jpg.webp" />
        <div className="container relative z-5 pt-[580px] pb-20 space-y-8">
          <div className="flex items-center justify-between">
            <Breadcrumbs linkColor="#000000" activeColor="#000000" separatorColor="#000000" />
            <button onClick={() => navigate(-1)} className="text-xl font-bold cursor-pointer">
              {t("mixture.back")}
            </button>
          </div>

          <MainTitleCollections title={t("mixture.title")}>
            <p>{t("mixture.paragraph")}</p>
          </MainTitleCollections>

          <BlocksGap sections={sections} />
          <DiscoverTheCollection products={products} />
        </div>
      </div>
    </>
  );
};

export default Mixture;
