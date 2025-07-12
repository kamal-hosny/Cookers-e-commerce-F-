import CollectionsLayout from "../../../layouts/CollectionsLayout";
import { Helmet } from "react-helmet-async";

const sections = [
  {
    id: 1,
    title: "Elio Collection",
    description: `Explore versatility with the Elio Collection, available in three width options: 60cm, 75cm, and 90cm.

Choose from sleek gas on glass-ceramic hobs with electronic controls, classic all-gas options, modern induction, or vitroceramic solutions.`,
    image: `https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-collections-gas-induction-gas-on-glass-hobs.jpg.webp`,
    link: "/collections/collections-cookers/",
    bgColor: "#e8e8e8",
    textColor: "#1d1d1b",
  },
  {
    id: 2,
    title: "Country Collection",
    description: `For those who appreciate a touch of rustic elegance, the Country Collection adds warmth and timeless character to any kitchen. Its textured colors and authentic materials recall the charm of countryside homes — with all the innovation of BULM.`,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-giant-electric-multifunction-ovens.jpg.webp",
    link: "/collections/collections-hobs/",
    bgColor: "#ede7d3",
    textColor: "#1d1d1b",
  },
];

const CollectionsHobs = () => {
  return (
    <>
    <Helmet>
  <html lang="en" />
  <title>BULM Hobs Collections | Gas, Induction & Vitroceramic Cooktops</title>
  <meta
    name="description"
    content="Discover BULM's premium hobs: gas, induction, vitroceramic, and more. Designed in Italy for superior performance and seamless kitchen integration."
  />
  <meta
    name="keywords"
    content="BULM hobs, gas hobs, induction hobs, vitroceramic cooktops, glass cooktops, Italian kitchen appliances, modern hobs"
  />
  <meta name="robots" content="index, follow" />
  <link
    rel="canonical"
    href="https://bulm.it/collections/collections-hobs"
  />

  {/* hreflang for multilingual SEO */}
  <link
    rel="alternate"
    href="https://bulm.it/collections/collections-hobs"
    hrefLang="en"
  />
  <link
    rel="alternate"
    href="https://bulm.it/it/collections/collections-hobs"
    hrefLang="it"
  />
  <link
    rel="alternate"
    href="https://bulm.it/collections/collections-hobs"
    hrefLang="x-default"
  />

  {/* Open Graph (Facebook, LinkedIn) */}
  <meta
    property="og:title"
    content="BULM Hobs Collections | Gas, Induction & Vitroceramic Cooktops"
  />
  <meta
    property="og:description"
    content="Premium Italian hobs crafted from the finest materials. Explore gas, induction, and vitroceramic cooktops from BULM."
  />
  <meta
    property="og:image"
    content="https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-collections-gas-induction-gas-on-glass-hobs.jpg.webp"
  />
  <meta
    property="og:url"
    content="https://bulm.it/collections/collections-hobs"
  />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="BULM Hobs Collections | Gas, Induction & Vitroceramic Cooktops"
  />
  <meta
    name="twitter:description"
    content="Versatile, efficient, and beautiful — BULM's Italian-designed hobs offer top-tier cooking performance for modern kitchens."
  />
  <meta
    name="twitter:image"
    content="https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-collections-gas-induction-gas-on-glass-hobs.jpg.webp"
  />
</Helmet>

    <CollectionsLayout
      title="Superior materials meet"
      subtitle="cutting-edge performance"
      description="BULM hobs are crafted from premium materials and built with the latest Italian cooking technology. Available in a variety of shapes, sizes, and methods — gas, induction, glass or vitroceramic — each hob is engineered to pair perfectly with BULM ovens and elevate your cooking experience."
      sections={sections}
      bgColor="#30505b"
      textColor="#ffffff"
    />
    </>
  );
};

export default CollectionsHobs;
