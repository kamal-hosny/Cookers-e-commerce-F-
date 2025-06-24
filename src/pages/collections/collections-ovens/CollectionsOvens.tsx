import CollectionsLayout from "../../../layouts/CollectionsLayout";

const sections = [
  {
    id: 1,
    title: "Elio",
    description: `Elio Collection has simple, minimalist lines in an exclusive style. Easy Steam and Idroclean special functions ensure high performance and excellent cooking results.`,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/27085R15_900x600.jpg.webp",
    link: "/collections/collections-cookers/",
    bgColor: "#e8e8e8",
    textColor: "#1d1d1b",
  },
  {
    id: 2,
    title: "Elio Giant",
    description: `Gas or multifunction electric, all 90cm Elio Giant built-in ovens feature 141 litres gross volume, for no space limits with even more possibilities without wasting time.`,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-giant-electric-multifunction-ovens.jpg.webp",
    link: "/collections/collections-hobs/",
    bgColor: "#3e4346",
    textColor: "#ffffff",
  },
  {
    id: 3,
    title: "Country",
    description:
      "Country Collection built-in ovens are the ideal solution for giving the interior spaces the atmosphere that especially recalls the houses of the countryside.",
    image: `https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-country-built-in-ovens.jpg.webp`,
    link: "/collections/collections-ovens/",
    bgColor: "#ede7d3",
    textColor: "#1d1d1b",
  },
  {
    id: 4,
    title: "Professional",
    description: `The beautifully designed Professional collection offers professional performance for your kitchen at home.`,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-collections-gas-electric-ovens.jpg.webp",
    link: "/collections/collections-ovens/",
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
    link: "/collections/collections-ovens/",
    bgColor: "#ededb1",
    textColor: "#1d1d1b",
  },
];

const CollectionsOvens = () => {
  return (
    <CollectionsLayout
      title="Built-in"
      subtitle="ovens. Distinctive Italian design and technology"
      description="Exclusive aesthetics, superb quality and design are the ingredients that make Elba built-in ovens unique. With their iconic design, Elba collections offer a refined blend of advanced cooking features. Elba models, available in two widths, 60cm and 90cm, are gas or electric multifunction, offering a safe and efficient way to cook with special function such as Easy Steam, true fan cooking and many others."
      sections={sections}
      bgColor="#30505b"
      textColor="#ffffff"
    />
  );
};

export default CollectionsOvens;
