import { Helmet } from "react-helmet-async";
import CollectionsLayout from "../../../layouts/CollectionsLayout";

const sections = [
  {
    id: 1,
    title: "Antique",
    description:
      "Our Antique Collection is a tribute to classic design. Elegant retro touches meet modern technology in freestanding cookers built for both charm and performance.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-vintage-collection-freestanding-cookers.jpg.webp",
    link: "/collections/collections-cookers/antique",
    bgColor: "#9baec4",
  },
  {
    id: 2,
    title: "Perfection",
    description:
      "Perfection Collection brings a sleek, contemporary look to your kitchen. Inspired by professional kitchens, it blends advanced functionality with minimalist elegance.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-excellence-collection-freestanding-cookers.jpg.webp",
    link: "/collections/collections-cookers/perfection",
    bgColor: "#cdc0b1",
  },
  {
    id: 3,
    title: "Mixture",
    description:
      "Rounded edges and soft lines define the Mixture Collection. Where functional innovation meets harmonious design — perfect for the modern lifestyle.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-fusion-collection-freestanding-cookers.jpg.webp",
    link: "/collections/collections-cookers/mixture",
    bgColor: "#c1949c",
  },
  {
    id: 4,
    title: "Elegant",
    description:
      "The Elegant Collection delivers timeless beauty and reliable cooking power. A balance of cast-iron tradition and contemporary control in one refined appliance.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-classic-collection-freestanding-cookers.jpg.webp",
    link: "/collections/collections-cookers/elegant",
    bgColor: "#bbbfaf",
  },
];

const CollectionsCookers = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>BULM Cooker Collections | Antique, Elegant, and More</title>
        <meta
          name="description"
          content="Explore BULM’s range of freestanding cookers: Antique, Elegant, Perfection, and Mixture. Italian design meets culinary innovation in every collection."
        />
        <meta
          name="keywords"
          content="BULM cookers, Italian freestanding cookers, vintage cookers, modern cookers, professional gas cookers, Elegant cookers"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://bulm.it/collections/collections-cookers"
        />

        {/* hreflang for multilingual SEO */}
        <link
          rel="alternate"
          href="https://bulm.it/collections/collections-cookers"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://bulm.it/it/collections/collections-cookers"
          hrefLang="it"
        />
        <link
          rel="alternate"
          href="https://bulm.it/collections/collections-cookers"
          hrefLang="x-default"
        />

        {/* Open Graph */}
        <meta property="og:title" content="BULM Cooker Collections | Antique, Elegant, and More" />
        <meta
          property="og:description"
          content="Browse BULM's Italian-made cookers designed for every style — from antique charm to modern minimalism. Discover the perfect fit for your kitchen."
        />
        <meta
          property="og:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-vintage-collection-freestanding-cookers.jpg.webp"
        />
        <meta
          property="og:url"
          content="https://bulm.it/collections/collections-cookers"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="BULM Cooker Collections | Antique, Elegant, and More"
        />
        <meta
          name="twitter:description"
          content="Antique, Mixture, Elegant, and Perfection cookers by BULM – combining beauty and innovation in Italian kitchen appliances."
        />
        <meta
          name="twitter:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-vintage-collection-freestanding-cookers.jpg.webp"
        />
      </Helmet>

      <CollectionsLayout
        title="Cookers Collections"
        subtitle="Designed for every culinary style"
        description="BULM freestanding cookers bring together sophisticated Italian design and powerful cooking features. Whether you prefer traditional aesthetics or sleek modern lines, our cookers are built to perform and impress."
        sections={sections}
        bgColor="#30505b"
        textColor="#ffffff"
      />
    </>
  );
};

export default CollectionsCookers;
