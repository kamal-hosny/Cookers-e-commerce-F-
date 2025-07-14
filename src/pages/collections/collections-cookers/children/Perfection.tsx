import { useNavigate } from "react-router-dom";
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

const sections = [
  {
    id: 1,
    title: "Advanced Control Panel",
    description:
      "Every BULM Excellence cooker features a digital touch control system for precise timing and flexible functionality — tailored to serious cooking needs.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-excellence-touch-control-electronic-programmer.jpg.webp",
  },
  {
    id: 2,
    title: "Heavy-duty Dual Burners",
    description:
      "Our brass dual burners ensure excellent durability and uniform heat distribution for any cooking technique.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/excellence-brass-dual-burners.jpg.webp",
  },
  {
    id: 3,
    title: "Professional-Grade Knobs",
    description:
      "The brushed metal knobs with premium detailing give a distinct, modern look — inspired by the most refined professional kitchens.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/excellence-brushed-metal-finishing-knobs-with-outer-bezel.jpg.webp",
  },
  {
    id: 4,
    title: "Elegant Handle Finish",
    description:
      "All appliances in this collection are equipped with a dual-finish handle: brushed steel center with polished chrome ends — a unique BULM signature.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/excellence-double-finishing-handle.jpg.webp",
  },
];

const products: IProduct[] = [
  {
    id: 1,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-excellence-freestanding-cooker-ea-966-m.png.webp",
    title: "Single Cavity Dual Fuel Freestanding Cooker",
    code: "BLM 966 M",
  },
  {
    id: 2,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-excellence-freestanding-cooker-eg-965-im.png.webp",
    title: "Single Cavity Induction Freestanding Cooker",
    code: "BLM 965 IM",
  },
  {
    id: 3,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-excellence-freestanding-cooker-ex-106-m.png.webp",
    title: "Dual Fuel Freestanding Cooker",
    code: "BLM 106 M",
  },
  {
    id: 4,
    type: "special",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2023/06/02_Linea_Excellence_1_500x700_new.jpg.webp",
    title: "Find out more",
    link: "/home",
    collections: "Excellence",
  },
];

const Perfection = () => {
  const navigate = useNavigate();
  return (
    <>
    <Helmet>
  <html lang="en" />
  <title>BULM Excellence Cookers | High-Performance Freestanding Appliances</title>
  <meta
    name="description"
    content="Discover the BULM Excellence Collection – premium freestanding cookers crafted for serious chefs. Choose from gas or induction hobs with electric or dual fuel ovens."
  />
  <meta
    name="keywords"
    content="BULM cookers, Excellence collection, freestanding cookers Italy, induction cookers, gas cookers, dual fuel ovens, modern kitchen appliances, professional design cookers"
  />
  <meta name="robots" content="index, follow" />
  <link
    rel="canonical"
    href="https://bulm.it/collections/collections-cookers/excellence"
  />

  {/* hreflang for multilingual support */}
  <link
    rel="alternate"
    href="https://bulm.it/collections/collections-cookers/excellence"
    hrefLang="en"
  />
  <link
    rel="alternate"
    href="https://bulm.it/it/collections/collections-cookers/excellence"
    hrefLang="it"
  />
  <link
    rel="alternate"
    href="https://bulm.it/collections/collections-cookers/excellence"
    hrefLang="x-default"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="BULM Excellence Cookers | High-Performance Freestanding Appliances"
  />
  <meta
    property="og:description"
    content="Explore the Excellence Collection by BULM. Modern freestanding cookers with Italian design, built for precision, power, and elegance."
  />
  <meta
    property="og:image"
    content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-excellence-collection-range-cookers-made-in-italy.jpg.webp"
  />
  <meta
    property="og:url"
    content="https://bulm.it/collections/collections-cookers/excellence"
  />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="BULM Excellence Cookers | High-Performance Freestanding Appliances"
  />
  <meta
    name="twitter:description"
    content="Premium Italian cookers engineered for culinary precision. Discover the BULM Excellence Collection."
  />
  <meta
    name="twitter:image"
    content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-excellence-collection-range-cookers-made-in-italy.jpg.webp"
  />
</Helmet>

<div>
      <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-excellence-collection-range-cookers-made-in-italy.jpg.webp" />
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
            Back_
          </button>
        </div>

        <MainTitleCollections title="Excellence Collection — Built to Perform, Designed to Inspire">
          <p>
            With a professional-grade aesthetic and a commitment to performance,
            the <strong>BULM Excellence Series</strong> delivers a new standard
            in freestanding cookers.
            <br />
            Available in both <strong>60cm</strong> and <strong>90cm</strong>{" "}
            widths, choose between <strong>induction</strong> or{" "}
            <strong>gas hobs</strong>, and cook with precision using{" "}
            <strong>multifunction electric ovens</strong> or{" "}
            <strong>dual fuel combinations</strong>.
          </p>
        </MainTitleCollections>

        <BlocksGap sections={sections} />
        <DiscoverTheCollection products={products} />
      </div>
    </div>
    </>
  
  );
};

export default Perfection;
