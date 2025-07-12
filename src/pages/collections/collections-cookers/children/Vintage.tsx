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
    title: "Charming finishing touches",
    description:
      "Gently curved stainless steel back guards softly rounded paneling on the oven fronts are complemented by retro brushed steel control knobs and matching handrails.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/vintage-design-made-in-italy.jpg.webp",
  },
  {
    id: 2,
    title: "Large cooktop with durable cast iron pan supports",
    description:
      "Stainless steel five-burners gas top. Heavy and durable cast iron and wok supports are included.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/vintage-cast-iron-pan-supports.jpg.webp",
  },
  {
    id: 3,
    title: "Vintage knobs",
    description:
      "Inspired by the original wood-burning stoves that our founder created in 1950, Elba Vintage Cookers are controlled by knobs with stainless steel finishing.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/vintage-knobs.jpg.webp",
  },
  {
    id: 4,
    title: "Refined details",
    description:
      "The vintage style is also in the design details, such as the comfortable electronic programmer. In addition, the bright chrome handle is available on all Elba Vintage cookers, as a replica of the handrail found on the original Elba stoves, giving the kitchen a traditional trait.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/vintage-charming-design-details.jpg.webp",
  },
];

const products: IProduct[] = [
  {
    id: 1,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-vintage-freestanding-cooker-vw-9653-m.png.webp",
    title: "Vintage three cavity dual fuel freestanding cooker",
    code: "VW 9653 M",
  },
  {
    id: 2,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-vintage-freestanding-cooker-vx-965-fg.png.webp",
    title: "Vintage single cavity gas freestanding cooker",
    code: "VX 965 FG",
  },
  {
    id: 3,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-vintage-freestanding-cooker-vg-965-tm.png.webp",
    title: "Vintage twin cavity dual fuel freestanding cooker",
    code: "VG 965 TM",
  },
  {
    id: 4,
    type: "special",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2023/06/01_Linea_Vintage_1-500x700_new.jpg.webp",
    title: "Find out more",
    link: "/home",
    collections: "Vintage",
  },
];

const Vintage = () => {
  const navigate = useNavigate();
  return (
  <>
<Helmet>
  <html lang="en" />
  <title>BULM Vintage Cookers | Retro Italian Freestanding Ranges</title>
  <meta
    name="description"
    content="Discover the BULM Vintage Collection — classic Italian freestanding cookers with retro charm and modern performance. Dual fuel and gas oven options available."
  />
  <meta
    name="keywords"
    content="vintage cookers, BULM vintage, retro kitchen appliances, dual fuel ranges, freestanding gas cookers, Italian cooking design"
  />
  <meta name="robots" content="index, follow" />
  <link
    rel="canonical"
    href="https://bulm.it/collections/collections-cookers/vintage"
  />

  {/* hreflang for multilingual SEO */}
  <link
    rel="alternate"
    href="https://bulm.it/collections/collections-cookers/vintage"
    hrefLang="en"
  />
  <link
    rel="alternate"
    href="https://bulm.it/it/collections/collections-cookers/vintage"
    hrefLang="it"
  />
  <link
    rel="alternate"
    href="https://bulm.it/collections/collections-cookers/vintage"
    hrefLang="x-default"
  />

  {/* Open Graph (Facebook, LinkedIn) */}
  <meta
    property="og:title"
    content="BULM Vintage Cookers | Retro Italian Freestanding Ranges"
  />
  <meta
    property="og:description"
    content="BULM Vintage cookers add a timeless Italian flair to any kitchen with brushed steel knobs, curved panels, and cast iron pan supports."
  />
  <meta
    property="og:image"
    content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-vintage-collection-range-cookers-made-in-italy.jpg.webp"
  />
  <meta
    property="og:url"
    content="https://bulm.it/collections/collections-cookers/vintage"
  />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="BULM Vintage Cookers | Retro Italian Freestanding Ranges"
  />
  <meta
    name="twitter:description"
    content="Inspired by the 1950s, BULM Vintage cookers feature soft lines, polished chrome handles, and professional performance."
  />
  <meta
    name="twitter:image"
    content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-vintage-collection-range-cookers-made-in-italy.jpg.webp"
  />
</Helmet>



    <div>
      <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-vintage-collection-range-cookers-made-in-italy.jpg.webp" />
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

        <MainTitleCollections title="Classically styled, beautifully made">
          <p>
            <strong>Vintage line cookers</strong> provide a touch of character
            to the furnishings with their soft lines, different colours and
            unmistakable vintage style.
            <br />
            Available as a single oven cooker or with two and three cavities,
            Elba Vintage cookers are <strong>dual fuel</strong>, with{" "}
            <strong>gas hobs</strong> and{" "}
            <strong>electric or fan gas ovens</strong>.
          </p>
        </MainTitleCollections>

        <BlocksGap sections={sections} />

        <DiscoverTheCollection products={products} />
      </div>
    </div>
  </>
  );
};

export default Vintage;
