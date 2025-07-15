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

const Antique = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("antique.sections.1.title"),
      description: t("antique.sections.1.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/vintage-design-made-in-italy.jpg.webp",
    },
    {
      id: 2,
      title: t("antique.sections.2.title"),
      description: t("antique.sections.2.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/vintage-cast-iron-pan-supports.jpg.webp",
    },
    {
      id: 3,
      title: t("antique.sections.3.title"),
      description: t("antique.sections.3.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/vintage-knobs.jpg.webp",
    },
    {
      id: 4,
      title: t("antique.sections.4.title"),
      description: t("antique.sections.4.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/vintage-charming-design-details.jpg.webp",
    },
  ];

  const products: IProduct[] = [
    {
      id: 1,
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-vintage-freestanding-cooker-vw-9653-m.png.webp",
      title: t("antique.products.1.title"),
      code: "VW 9653 M",
    },
    {
      id: 2,
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-vintage-freestanding-cooker-vx-965-fg.png.webp",
      title: t("antique.products.2.title"),
      code: "VX 965 FG",
    },
    {
      id: 3,
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-vintage-freestanding-cooker-vg-965-tm.png.webp",
      title: t("antique.products.3.title"),
      code: "VG 965 TM",
    },
    {
      id: 4,
      type: "special",
      image: "https://www.elba-cookers.com/wp-content/uploads/2023/06/01_Linea_Vintage_1-500x700_new.jpg.webp",
      title: t("antique.products.4.title"),
      link: "/home",
      collections: "Antique",
    },
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{t("antique.meta.title")}</title>
        <meta name="description" content={t("antique.meta.description")} />
        <meta name="keywords" content={t("antique.meta.keywords")} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bulm.it/collections/collections-cookers/vintage" />
        <link rel="alternate" href="https://bulm.it/collections/collections-cookers/vintage" hrefLang="en" />
        <link rel="alternate" href="https://bulm.it/it/collections/collections-cookers/vintage" hrefLang="it" />
        <link rel="alternate" href="https://bulm.it/collections/collections-cookers/vintage" hrefLang="x-default" />
        <meta property="og:title" content={t("antique.meta.title")} />
        <meta property="og:description" content={t("antique.meta.ogDescription")} />
        <meta property="og:image" content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-vintage-collection-range-cookers-made-in-italy.jpg.webp" />
        <meta property="og:url" content="https://bulm.it/collections/collections-cookers/vintage" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("antique.meta.title")} />
        <meta name="twitter:description" content={t("antique.meta.twitterDescription")} />
        <meta name="twitter:image" content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-vintage-collection-range-cookers-made-in-italy.jpg.webp" />
      </Helmet>

      <div>
        <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-vintage-collection-range-cookers-made-in-italy.jpg.webp" />
        <div className="container relative z-5 pt-[580px] pb-20 space-y-8">
          <div className="flex items-center justify-between">
            <Breadcrumbs linkColor="#000000" activeColor="#000000" separatorColor="#000000" />
            <button onClick={() => navigate(-1)} className="text-xl font-bold cursor-pointer">
              {t("antique.back")}
            </button>
          </div>

          <MainTitleCollections title={t("antique.title")}>
            <p>{t("antique.paragraph")}</p>
          </MainTitleCollections>

          <BlocksGap sections={sections} />
          <DiscoverTheCollection products={products} />
        </div>
      </div>
    </>
  );
};

export default Antique;
