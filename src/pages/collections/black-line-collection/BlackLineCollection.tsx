import { useNavigate } from "react-router-dom";
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

const sections = [
  {
    id: 1,
    title: "Built-in Electric Multifunction Oven",
    description:
      "Packed with multiple innovative features, this oven offers a professional culinary experience. With 11 modes including Air Fry, Pizza 300°C, Easy Steam, and Booster for fast preheating, it redefines home cooking.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2024/11/Elba-Black-Line-electric-oven.jpg.webp",
    link: "/product/bulm-electric-oven",
    bgColor: "#ffffff",
    textColor: "#000000",
  },
  {
    id: 2,
    title: "Combi Microwave 45cm",
    description:
      "Grill, bake, roast, and more — all in one efficient unit with 13 functions and preset auto menus for everyday recipes like vegetables, pizza, or soups. Designed to match any modern kitchen.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2024/11/Elba-Black-Line-Combi-Microwave-45cm.jpg.webp",
    link: "/product/bulm-microwave-45cm",
    bgColor: "#ffffff",
    textColor: "#000000",
  },
  {
    id: 3,
    title: "Coffee & Cappuccino Maker",
    description:
      "Enjoy barista-style coffee at home. This elegant appliance is designed to brew rich espresso and creamy cappuccinos at the touch of a button — combining Italian tradition with modern convenience.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2024/11/Elba-Black-Line-electric-oven.jpg.webp",
    link: "/product/bulm-coffee-maker",
    bgColor: "#ffffff",
    textColor: "#000000",
  },
  {
    id: 4,
    title: "Warming Drawer",
    description:
      "A stylish addition to your kitchen, perfect for preheating dishes or keeping meals warm before serving. Fully aligned with the Black Line design language by BULM.",
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
    title: "Electric Multifunction Oven",
    code: "BLM-11X300",
  },
  {
    id: 2,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2024/06/EL-45-B-MWC_on.png.webp",
    title: "Combi Microwave Oven",
    code: "BLM-45MWC",
  },
  {
    id: 3,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2024/06/EL-45-CCM_front_brick.png.webp",
    title: "Automatic Coffee & Cappuccino Maker",
    code: "BLM-45CCM",
  },
];

const BlackLineCollection = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Helmet>
  <html lang="en" />
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

  {/* hreflang for multilingual SEO */}
  <link rel="alternate" href="https://bulm.it/collections/black-line" hrefLang="en" />
  <link rel="alternate" href="https://bulm.it/it/collections/black-line" hrefLang="it" />
  <link rel="alternate" href="https://bulm.it/collections/black-line" hrefLang="x-default" />

  {/* Open Graph (Facebook, LinkedIn...) */}
  <meta property="og:title" content="Black Line Collection | BULM Italy" />
  <meta
    property="og:description"
    content="Explore the Black Line by BULM — a collection of premium built-in appliances blending performance and Italian elegance."
  />
  <meta
    property="og:image"
    content="https://www.elba-cookers.com/wp-content/uploads/2024/11/gallery07.jpg.webp"
  />
  <meta property="og:url" content="https://bulm.it/collections/black-line" />
  <meta property="og:type" content="product.group" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Black Line Collection | BULM Italy" />
  <meta
    name="twitter:description"
    content="BULM Black Line is a collection of elegant, innovative, and built-in kitchen appliances crafted in Italy."
  />
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
            Back_
          </button>
        </div>

        <MainTitleCollections title="BULM Black Line – Precision Meets Elegance">
          <p>
            Discover the essence of Italian engineering and refined aesthetics
            with the <strong>BULM Black Line</strong>. A premium collection of
            built-in kitchen appliances created for those who demand performance,
            elegance, and cutting-edge innovation — all in one.
          </p>
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
