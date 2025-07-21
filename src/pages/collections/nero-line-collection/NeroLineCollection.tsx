import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Blocks from "../../../components/common/Blocks";
import BoxesFooter from "../../../components/common/BoxesFooter";
import HeadCollection from "../../../components/common/HeadCollection";
import MainTitleCollections from "../../../components/common/MainTitleCollections";
import Breadcrumbs from "../../../components/ui/Breadcrumbs";

const NeroLineCollection = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const localizedSections = t("neroLinePage.sections", {
    returnObjects: true,
  }) as {
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
    "/collections/nero-line-collection/",
    "/collections/nero-line-collection/",
    "/collections/nero-line-collection/",
    "/collections/nero-line-collection/",
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
        <title>
          Nero Line Collection | BULM 
        </title>
        <meta
          name="description"
          content="Discover BULM's Nero Line collection: built-in ovens, microwaves, coffee machines, and warming drawers. Italian design and cutting-edge technology in your kitchen."
        />
        <meta
          name="keywords"
          content="BULM Nero Line, built-in appliances, Italian kitchen appliances, modern oven, multifunction oven, microwave, warming drawer, coffee machine"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bulm.it/collections/nero-line" />
        <link
          rel="alternate"
          href="https://bulm.it/collections/nero-line"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://bulm.it/it/collections/nero-line"
          hrefLang="it"
        />
        <link
          rel="alternate"
          href="https://bulm.it/collections/nero-line"
          hrefLang="x-default"
        />
        <meta
          property="og:title"
          content="Nero Line Collection | BULM Italy"
        />
        <meta
          property="og:description"
          content="Explore the Nero Line by BULM — a collection of premium built-in appliances blending performance and Italian elegance."
        />
        <meta
          property="og:image"
          content="https://cms.bulm.it/wp-content/uploads/2025/07/bb.jpeg"
        />
        <meta
          property="og:url"
          content="https://bulm.it/collections/nero-line"
        />
        <meta property="og:type" content="product.group" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nero Line Collection | BULM Italy"
        />
        <meta
          name="twitter:description"
          content="BULM Nero Line is a collection of elegant, innovative, and built-in kitchen appliances crafted in Italy."
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
          <button
            onClick={() => navigate(-1)}
            className="text-xl font-bold cursor-pointer"
          >
            {t("neroLinePage.back")}
          </button>
        </div>

        <MainTitleCollections title={t("neroLinePage.title")}>
          <p>{t("neroLinePage.description")}</p>
        </MainTitleCollections>

        <Blocks sections={sections} />

        <div className="w-full overflow-hidden rounded-2xl shadow-lg my-10">
          <img
            src="https://cms.bulm.it/wp-content/uploads/2025/07/banner-black-1.jpeg"
            alt="Nero Line Gallery"
            loading="lazy"
            className="w-full h-[300px] md:h-[400px] lg:h-[550px] object-cover"
          />
        </div>

        <BoxesFooter />
      </div>
    </div>
  );
};

export default NeroLineCollection;
