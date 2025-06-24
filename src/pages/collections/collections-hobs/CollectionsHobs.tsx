import CollectionsLayout from "../../../layouts/CollectionsLayout";

const sections = [
  {
    id: 1,
    title: "Elio Collection",
    description: `Plenty of choice Elio collection is available in three different widths – 60cm, 75cm and 90cm wide.

    Choose from gas on glass-ceramic hob with electronic controls, all gas, induction and vitroceramic hob.`,
    image: `https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-collections-gas-induction-gas-on-glass-hobs.jpg.webp`,
    link: "/collections/collections-cookers/",
    bgColor: "#e8e8e8",
    textColor: "#1d1d1b",
  },
  {
    id: 2,
    title: "Country Collection",
    description: `For those who love a touch of "Country Chic" style in the kitchen and prefer the nuances of material colors, Country hobs is the ideal solution, giving the interior spaces the atmosphere that especially recalls country houses.`,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-giant-electric-multifunction-ovens.jpg.webp",
    link: "/collections/collections-hobs/",
    bgColor: "#ede7d3",
    textColor: "#1d1d1b",
  },
];

const CollectionsHobs = () => {
  return (
    <CollectionsLayout
      title="Quality materials with"
      subtitle="cutting-edge technology"
      description="Elba hobs combine quality materials with cutting-edge technology. Available in different shapes, sizes and cooking methods, choose from gas on glass, gas on metal, induction, vitroceramic Elba hobs. Every Elba hob is designed to work in harmony with the Elba ovens."
      sections={sections}
      bgColor="#30505b"
      textColor="#ffffff"
    />
  );
};

export default CollectionsHobs;
