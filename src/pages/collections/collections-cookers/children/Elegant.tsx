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
    title: "Nickel finishing knobs with inner bezel",
    description:
      "Nickel finishing knobs with inner bezel have a functional and practical style, chosen for their easiness of use.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-classic-knobs.jpg.webp",
  },
  {
    id: 2,
    title: "Enamelled steel pan supports",
    description:
      "Enamelled steel pan supports design gives a seamless and smooth appearance that allows for easy cleaning.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-classic-pan-supports.jpg.webp",
  },
  {
    id: 3,
    title: "Essential style handle",
    description:
      "Metal handle with brushed finishing on all the Classic Collection Cookers.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-classic-handle.jpg.webp",
  },
];

const products: IProduct[] = [
  {
    id: 1,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-classic-freestanding-cooker-cxx-664-im.png.webp",
    title: "Classic single cavity induction freestanding cooker",
    code: "CXX 664 IM",
  },
  {
    id: 2,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-classic-freestanding-cooker-cxx-965-bm.png.webp",
    title: "Classic single cavity dual fuel freestanding cooker",
    code: "CXX 965 BM",
  },
  {
    id: 3,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-classic-freestanding-cooker-cxx-965-vm.png.webp",
    title: "Classic single cavity electric freestanding cooker",
    code: "CXX 965 VM",
  },
  {
    id: 4,
    type: "special",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2023/06/04_Linea_Classica_1_v2_500x700_new.jpg.webp",
    title: "Find out more",
    link: "/home",
    collections: "Classic",
  },
];

const Elegant = () => {
  const navigate = useNavigate();
  return (
    <>
    <Helmet>
  <html lang="en" />
  <title>Classic Cookers Collection | BULM Italy – Elegant & Timeless</title>
  <meta
    name="description"
    content="Explore BULM's Classic Collection: timeless freestanding cookers made in Italy. Available in dual fuel, induction, or electric. Quality that lasts generations."
  />
  <meta
    name="keywords"
    content="Classic cookers, Italian freestanding cookers, induction cookers, dual fuel cookers, electric cookers, timeless kitchen appliances, BULM Italy"
  />
  <meta name="robots" content="index, follow" />
  <link
    rel="canonical"
    href="https://bulm.it/collections/collections-cookers/classic"
  />

  {/* hreflang for multilingual SEO */}
  <link
    rel="alternate"
    href="https://bulm.it/collections/collections-cookers/classic"
    hrefLang="en"
  />
  <link
    rel="alternate"
    href="https://bulm.it/it/collections/collections-cookers/classic"
    hrefLang="it"
  />
  <link
    rel="alternate"
    href="https://bulm.it/collections/collections-cookers/classic"
    hrefLang="x-default"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Classic Cookers Collection | BULM Italy"
  />
  <meta
    property="og:description"
    content="Timeless Italian design in BULM's Classic Collection of freestanding cookers. Tradition and performance in perfect balance."
  />
  <meta
    property="og:image"
    content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-classic-collection-range-cookers-made-in-italy.jpg.webp"
  />
  <meta
    property="og:url"
    content="https://bulm.it/collections/collections-cookers/classic"
  />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Classic Cookers Collection | BULM Italy"
  />
  <meta
    name="twitter:description"
    content="Explore timeless elegance with BULM's Classic Collection. Induction, electric, or dual-fuel cookers made in Italy."
  />
  <meta
    name="twitter:image"
    content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-classic-collection-range-cookers-made-in-italy.jpg.webp"
  />
</Helmet>
<div>
      <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-classic-collection-range-cookers-made-in-italy.jpg.webp" />
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

        <MainTitleCollections title="Classic Collection. Beyond all passing fashion trends">
          <p>
            The <strong>Classic Collection</strong> offers a durable and safe
            solution for your everyday cooking needs.
            <br /> The quality of the materials and the traditional made in
            Italy crafting skills are combined with a sober and simple style.
            <br /> <strong>Single cavity cookers</strong> are available in two
            different widths, 60cm and 90cm wide.
          </p>
        </MainTitleCollections>

        <BlocksGap sections={sections} />

        <DiscoverTheCollection products={products} />
      </div>
    </div>
    </>
    
  );
};

export default Elegant;
