import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeadCollection from "../../../components/common/HeadCollection";
import Breadcrumbs from "../../../components/ui/Breadcrumbs";
import MainTitleCollections from "../../../components/common/MainTitleCollections";
import Blocks from "../../../components/common/Blocks";
import DiscoverTheCollection from "../../../components/common/DiscoverTheCollection";
import BoxesFooter from "../../../components/common/BoxesFooter";
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

const BlackLineCollection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const sections = [
    {
      id: 1,
      title: t("blackLine.sections.0.title"),
      description: t("blackLine.sections.0.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2024/11/Elba-Black-Line-electric-oven.jpg.webp",
      link: "/product/bulm-electric-oven",
      bgColor: "#ffffff",
      textColor: "#000000",
    },
    {
      id: 2,
      title: t("blackLine.sections.1.title"),
      description: t("blackLine.sections.1.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2024/11/Elba-Black-Line-Combi-Microwave-45cm.jpg.webp",
      link: "/product/bulm-microwave-45cm",
      bgColor: "#ffffff",
      textColor: "#000000",
    },
    {
      id: 3,
      title: t("blackLine.sections.2.title"),
      description: t("blackLine.sections.2.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2024/11/Elba-Black-Line-electric-oven.jpg.webp",
      link: "/product/bulm-coffee-maker",
      bgColor: "#ffffff",
      textColor: "#000000",
    },
    {
      id: 4,
      title: t("blackLine.sections.3.title"),
      description: t("blackLine.sections.3.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2024/11/Elba-Black-Line-Warming-Drawer.jpg.webp",
      link: "/product/bulm-warming-drawer",
      bgColor: "#ffffff",
      textColor: "#000000",
    },
  ];

  const products: IProduct[] = [
    {
      id: 1,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2024/06/EL-11-XLFB-300.png.webp",
      title: t("blackLine.products.0.title"),
      code: "BLM-11X300",
    },
    {
      id: 2,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2024/06/EL-45-B-MWC_on.png.webp",
      title: t("blackLine.products.1.title"),
      code: "BLM-45MWC",
    },
    {
      id: 3,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2024/06/EL-45-CCM_front_brick.png.webp",
      title: t("blackLine.products.2.title"),
      code: "BLM-45CCM",
    },
  ];

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{t("blackLine.meta.title")}</title>
        <meta name="description" content={t("blackLine.meta.description")} />
        <meta name="keywords" content={t("blackLine.meta.keywords")} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bulm.it/collections/black-line" />

        <link rel="alternate" href="https://bulm.it/collections/black-line" hrefLang="en" />
        <link rel="alternate" href="https://bulm.it/it/collections/black-line" hrefLang="it" />
        <link rel="alternate" href="https://bulm.it/collections/black-line" hrefLang="x-default" />

        <meta property="og:title" content={t("blackLine.meta.ogTitle")} />
        <meta property="og:description" content={t("blackLine.meta.ogDescription")} />
        <meta
          property="og:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2024/11/gallery07.jpg.webp"
        />
        <meta property="og:url" content="https://bulm.it/collections/black-line" />
        <meta property="og:type" content="product.group" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("blackLine.meta.twitterTitle")} />
        <meta name="twitter:description" content={t("blackLine.meta.twitterDescription")} />
        <meta
          name="twitter:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2024/11/gallery07.jpg.webp"
        />
      </Helmet>

      <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-collection-gas-induction-hobs.jpg.webp" />
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
            {t("blackLine.back")}
          </button>
        </div>

        <MainTitleCollections title={t("blackLine.title")}>
          <p>{t("blackLine.subtitle")}</p>
        </MainTitleCollections>

        <Blocks sections={sections} />

        <div className="w-full overflow-hidden rounded-2xl shadow-lg my-10">
          <img
            src="https://www.elba-cookers.com/wp-content/uploads/2024/11/gallery07.jpg.webp"
            alt="Black Line Gallery"
            className="w-full h-[300px] md:h-[400px] lg:h-[550px] object-cover"
          />
        </div>

        <DiscoverTheCollection products={products} />

        <BoxesFooter />
      </div>
    </div>
  );
};

export default BlackLineCollection;
