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

const Elegant = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("elegant.sections.1.title"),
      description: t("elegant.sections.1.description"),
      image: "https://cms.bulm.it/wp-content/uploads/2025/07/bulm-knobs.jpg.webp",
    },
    {
      id: 2,
      title: t("elegant.sections.2.title"),
      description: t("elegant.sections.2.description"),
      image: "https://cms.bulm.it/wp-content/uploads/2025/07/bulm-pan-supports.jpg.webp",
    },
    {
      id: 3,
      title: t("elegant.sections.3.title"),
      description: t("elegant.sections.3.description"),
      image: "https://cms.bulm.it/wp-content/uploads/2025/07/bulm-handle.jpg.webp",
    },
  ];

  const products: IProduct[] = [
    {
      id: 1,
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-classic-freestanding-cooker-cxx-664-im.png.webp",
      title: t("elegant.products.1.title"),
      code: "CXX 664 IM",
    },
    {
      id: 2,
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-classic-freestanding-cooker-cxx-965-bm.png.webp",
      title: t("elegant.products.2.title"),
      code: "CXX 965 BM",
    },
    {
      id: 3,
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-classic-freestanding-cooker-cxx-965-vm.png.webp",
      title: t("elegant.products.3.title"),
      code: "CXX 965 VM",
    },
    {
      id: 4,
      type: "special",
      image: "https://www.elba-cookers.com/wp-content/uploads/2023/06/04_Linea_Classica_1_v2_500x700_new.jpg.webp",
      title: t("elegant.products.4.title"),
      link: "/home",
      collections: "Elegant",
    },
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{t("elegant.meta.title")}</title>
        <meta name="description" content={t("elegant.meta.description")} />
        <meta name="keywords" content={t("elegant.meta.keywords")} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://cms.bulm.it/wp-content/uploads/2025/07/Elegant-1.jpeg" />
        <link rel="alternate" href="https://cms.bulm.it/wp-content/uploads/2025/07/Elegant-1.jpeg" hrefLang="en" />
        <link rel="alternate" href="https://bulm.it/it/collections/collections-cookers/classic" hrefLang="it" />
        <link rel="alternate" href="https://cms.bulm.it/wp-content/uploads/2025/07/Elegant-1.jpeg" hrefLang="x-default" />
        <meta property="og:title" content={t("elegant.meta.ogTitle")} />
        <meta property="og:description" content={t("elegant.meta.ogDescription")} />
        <meta property="og:image" content="https://cms.bulm.it/wp-content/uploads/2025/07/Elegant-1.jpeg" />
        <meta property="og:url" content="https://cms.bulm.it/wp-content/uploads/2025/07/Elegant-1.jpeg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("elegant.meta.twitterTitle")} />
        <meta name="twitter:description" content={t("elegant.meta.twitterDescription")} />
        <meta name="twitter:image" content="https://cms.bulm.it/wp-content/uploads/2025/07/Elegant-1.jpeg" />
      </Helmet>

      <div>
        <HeadCollection image="https://cms.bulm.it/wp-content/uploads/2025/07/Elegant-1.jpeg" />
        <div className="container relative z-5 pt-[580px] pb-20 space-y-8">
          <div className="flex items-center justify-between">
            <Breadcrumbs linkColor="#000000" activeColor="#000000" separatorColor="#000000" />
            <button onClick={() => navigate(-1)} className="text-xl font-bold cursor-pointer">
              {t("elegant.back")}
            </button>
          </div>

          <MainTitleCollections title={t("elegant.title")}>
            <p>{t("elegant.paragraph")}</p>
          </MainTitleCollections>

          <BlocksGap sections={sections} />
          <DiscoverTheCollection products={products} />
        </div>
      </div>
    </>
  );
};

export default Elegant;
