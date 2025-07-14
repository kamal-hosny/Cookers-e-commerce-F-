import { Helmet } from "react-helmet-async";
import CollectionsLayout from "../../../layouts/CollectionsLayout";

const sections = [
  {
    id: 1,
    title: "Enzo",
    description: `Enzo Collection has simple, minimalist lines in an exclusive style. Easy Steam and Idroclean special functions ensure high performance and excellent cooking results.`,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/27085R15_900x600.jpg.webp",
    link: "/collections/collections-ovens/enzo-ovens",
    bgColor: "#e8e8e8",
    textColor: "#1d1d1b",
  },
  {
    id: 2,
    title: "Enzo Titan",
    description: `Gas or multifunction electric, all 90cm Enzo Titan built-in ovens feature 141 litres gross volume, for no space limits with even more possibilities without wasting time.`,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-giant-electric-multifunction-ovens.jpg.webp",
    link: "/collections/collections-ovens/enzo-titan-ovens",
    bgColor: "#3e4346",
    textColor: "#ffffff",
  },
  {
    id: 3,
    title: "Land",
    description:
      "Land Collection built-in ovens are the ideal solution for giving the interior spaces the atmosphere that especially recalls the houses of the countryside.",
    image: `https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-country-built-in-ovens.jpg.webp`,
    link: "/collections/collections-ovens/land-ovens",
    bgColor: "#ede7d3",
    textColor: "#1d1d1b",
  },
  {
    id: 4,
    title: "Expert",
    description: `The beautifully designed Expert collection offers professional performance for your kitchen at home.`,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-collections-gas-electric-ovens.jpg.webp",
    link: "/collections/collections-ovens/expert-ovens",
    bgColor: "#b5b5b5",
    textColor: "#1d1d1b",
  },
  {
    id: 5,
    title: "Alterum",
    description:
      "Alterum Collection has simple, minimalist lines in an exclusive style; an elegant and discreet design.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/05/elba-alterum-built-in-ovens.jpg.webp",
    link: "/collections/collections-ovens/alterum-ovens",
    bgColor: "#ededb1",
    textColor: "#1d1d1b",
  },
];

const CollectionsOvens = () => {
  return (
    <>
      <Helmet>
        <title>Built-in Ovens | BULM Italy</title>
        <meta
          name="description"
          content="Discover BULM's built-in ovens: a perfect blend of Italian design and advanced cooking technology. Available in gas or electric, with features like Easy Steam, fan cooking, and more."
        />
        <meta
          name="keywords"
          content="BULM, Built-in Ovens, Italian Ovens, Gas Oven, Electric Oven, Easy Steam, 60cm Oven, 90cm Oven, Modern Kitchen Appliances"
        />
        <meta property="og:title" content="Built-in Ovens | BULM Italy" />
        <meta
          property="og:description"
          content="Discover BULM's built-in ovens: premium design, advanced features, and Italian craftsmanship."
        />
        <meta
          property="og:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2022/03/27085R15_900x600.jpg.webp"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://bulm.it/collections/collections-ovens"
        />
        <link
          rel="canonical"
          href="https://bulm.it/collections/collections-ovens"
        />
      </Helmet>

      <CollectionsLayout
        title="Built-in"
        subtitle="Where Italian craftsmanship meets modern innovation"
        description="Discover the elegance of BULM built-in ovens — where iconic Italian design meets advanced cooking technology. Available in both 60cm and 90cm formats, our ovens offer gas or electric multifunction options and feature innovations such as Easy Steam, true fan cooking, and more."
        sections={sections}
        bgColor="#30505b"
        textColor="#ffffff"
      />
    </>
  );
};

export default CollectionsOvens;
