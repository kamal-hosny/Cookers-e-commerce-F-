import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import HeadCollection from "../../../components/common/HeadCollection";
import Breadcrumbs from "../../../components/ui/Breadcrumbs";
import MainTitleCollections from "../../../components/common/MainTitleCollections";
import Blocks from "../../../components/common/Blocks";
import DiscoverTheCollection from "../../../components/common/DiscoverTheCollection";
import BoxesFooter from "../../../components/common/BoxesFooter";

const products = [
  {
    id: 1,
    image: "https://www.elba-cookers.com/wp-content/uploads/2024/06/EL-11-XLFB-300.png.webp",
    title: "Electric Multifunction Oven",
    code: "BLM-11X300",
  },
  {
    id: 2,
    image: "https://www.elba-cookers.com/wp-content/uploads/2024/06/EL-45-B-MWC_on.png.webp",
    title: "Combi Microwave Oven",
    code: "BLM-45MWC",
  },
  {
    id: 3,
    image: "https://www.elba-cookers.com/wp-content/uploads/2024/06/EL-45-CCM_front_brick.png.webp",
    title: "Automatic Coffee & Cappuccino Maker",
    code: "BLM-45CCM",
  },
];

const BlackLineCollection = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const localizedSections = t("blackLinePage.sections", { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  const sectionImages = [
    "https://cms.bulm.it/wp-content/uploads/2025/07/Combi-Microwave-45cm.jpeg",
    "https://cms.bulm.it/wp-content/uploads/2025/07/Built-in-Electric-Multifunction-Oven.jpeg",
    "https://cms.bulm.it/wp-content/uploads/2025/07/Coffee-Cappuccino-Maker.jpeg",
    "https://cms.bulm.it/wp-content/uploads/2025/07/Warming-Drawer.jpeg",
  ];

  const sectionLinks = [
    "/product/bulm-electric-oven",
    "/product/bulm-microwave-45cm",
    "/product/bulm-coffee-maker",
    "/product/bulm-warming-drawer",
  ];

  const sections = localizedSections.map((section, index) => ({
    id: index + 1,
    title: section.title,
    description: section.description,
    image: sectionImages[index],
    link: sectionLinks[index],
    bgColor: "#ffffff",
    textColor: "#000000",
  }));

  return (
    <div>
      <Helmet>
        <html lang={i18n.language} />
        <title>Black Line Collection | BULM Italy – Built-in Kitchen Elegance</title>
        <meta
          name="description"
          content="Discover BULM's Black Line collection: built-in ovens, microwaves, coffee machines, and warming drawers. Italian design and cutting-edge technology in your kitchen."
        />
        <meta
          name="keywords"
          content="BULM Black Line, built-in appliances, Italian kitchen appliances, modern oven, multifunction oven, microwave, warming drawer, coffee machine"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bulm.it/collections/black-line" />
        <link rel="alternate" href="https://bulm.it/collections/black-line" hrefLang="en" />
        <link rel="alternate" href="https://bulm.it/it/collections/black-line" hrefLang="it" />
        <link rel="alternate" href="https://bulm.it/collections/black-line" hrefLang="x-default" />
        <meta property="og:title" content="Black Line Collection | BULM Italy" />
        <meta
          property="og:description"
          content="Explore the Black Line by BULM — a collection of premium built-in appliances blending performance and Italian elegance."
        />
        <meta
          property="og:image"
          content="https://cms.bulm.it/wp-content/uploads/2025/07/bb.jpeg"
        />
        <meta property="og:url" content="https://bulm.it/collections/black-line" />
        <meta property="og:type" content="product.group" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Black Line Collection | BULM Italy" />
        <meta
          name="twitter:description"
          content="BULM Black Line is a collection of elegant, innovative, and built-in kitchen appliances crafted in Italy."
        />
        <meta
          name="twitter:image"
          content="https://cms.bulm.it/wp-content/uploads/2025/07/bb.jpeg"
        />
      </Helmet>

      <HeadCollection image="https://cms.bulm.it/wp-content/uploads/2025/07/bb.jpeg" />

      <div className="container relative z-5 pt-[580px] pb-20 space-y-8">
        <div className="flex items-center justify-between">
          <Breadcrumbs
            linkColor={"#000000"}
            activeColor={"#000000"}
            separatorColor={"#000000"}
          />
          <button onClick={() => navigate(-1)} className="text-xl font-bold cursor-pointer">
            {t("blackLinePage.back")}
          </button>
        </div>

        <MainTitleCollections title={t("blackLinePage.title")}>
          <p>{t("blackLinePage.description")}</p>
        </MainTitleCollections>

        <Blocks sections={sections} />

        <div className="w-full overflow-hidden rounded-2xl shadow-lg my-10">
          <img
            src="https://cms.bulm.it/wp-content/uploads/2025/07/banner-black-1.jpeg"
            alt="Black Line Gallery"
            loading="lazy"
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
