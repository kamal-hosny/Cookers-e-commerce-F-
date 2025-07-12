import { Helmet } from "react-helmet-async";
import CollectionsLayout from "../../../layouts/CollectionsLayout";

const sections = [
  {
    id: 1,
    title: "Vintage",
    description:
      "Our Vintage Collection is a nod to the past through charming retro design details and finishing details.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-vintage-collection-freestanding-cookers.jpg.webp",
    link: "/collections/collections-cookers/vintage/",
    bgColor: "#9baec4",
  },
  {
    id: 2,
    title: "Excellence",
    description:
      "Explore our modern collection designed for sleek and contemporary kitchens with advanced technology.Our Excellence Collection takes its inspiration from professional kitchens with a sleek shape and streamlined look.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-excellence-collection-freestanding-cookers.jpg.webp",
    link: "/collections/collections-cookers/excellence/",
    bgColor: "#cdc0b1",
  },
  {
    id: 3,
    title: "Fusion",
    description:
      "Soft lines and rounded edges distinguish the Fusion Collection where they coexist in perfect harmony with functional needs.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-fusion-collection-freestanding-cookers.jpg.webp",
    link: "/collections/collections-classic/",
    bgColor: "#c1949c",
  },
  {
    id: 4,
    title: "Classic",
    description:
      "The Classic Collection combines both cast-iron radiant heat cooking and conventional cooking, giving you the flexibility to a choice every day your favorite way of cooking.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-classic-collection-freestanding-cookers.jpg.webp",
    link: "/collections/collections-cookers/classic/",
    bgColor: "#bbbfaf",
  },
];

const CollectionsCookers = () => {
  return (
    <>
    <Helmet>
  <html lang="en" />
  <title>Cookers Collections | BULM Italy – Retro, Modern, and Timeless Design</title>
  <meta
    name="description"
    content="Discover BULM's exclusive cookers collections: Vintage, Excellence, Fusion, and Classic. Combining Italian heritage, innovation, and elegant design."
  />
  <meta
    name="keywords"
    content="BULM cookers, vintage cookers, professional gas cookers, Italian freestanding cookers, retro kitchen design, built-in ovens, classic cookers"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://bulm.it/collections/collections-cookers" />

  {/* hreflang for multilingual SEO */}
  <link rel="alternate" href="https://bulm.it/collections/collections-cookers" hrefLang="en" />
  <link rel="alternate" href="https://bulm.it/it/collections/collections-cookers" hrefLang="it" />
  <link rel="alternate" href="https://bulm.it/collections/collections-cookers" hrefLang="x-default" />

  {/* Open Graph */}
  <meta property="og:title" content="Cookers Collections | BULM Italy" />
  <meta
    property="og:description"
    content="Explore BULM's signature cookers: from elegant vintage to professional excellence. Italian engineering with stylish performance."
  />
  <meta
    property="og:image"
    content="https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-vintage-collection-freestanding-cookers.jpg.webp"
  />
  <meta property="og:url" content="https://bulm.it/collections/collections-cookers" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Cookers Collections | BULM Italy" />
  <meta
    name="twitter:description"
    content="Vintage, Fusion, Excellence, and Classic cookers — crafted for beauty and performance in every kitchen."
  />
  <meta
    name="twitter:image"
    content="https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-vintage-collection-freestanding-cookers.jpg.webp"
  />
</Helmet>

    <CollectionsLayout
      title="Built-in"
      subtitle="ovens. Distinctive"
      description="Built-in ovens. Distinctive Italian design and technologyExclusive aesthetics, superb quality and design are the ingredients that make Elba built-in ovens unique. With their iconic design, Elba collections offer a refined blend of advanced cooking features. Elba models, available in two widths, 60cm and 90cm, are gas or electric multifunction, offering a safe and efficient way to cook with special function such as Easy Steam, true fan cooking and many others."
      sections={sections}
      bgColor="#30505b"
    />
    </>
  );
};

export default CollectionsCookers;
