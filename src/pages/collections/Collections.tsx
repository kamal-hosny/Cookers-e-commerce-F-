import CollectionsLayout from "../../layouts/CollectionsLayout";

const sections = [
  {
    id: 1,
    title: "Collection Cookers",
    description:
      "Collection Cookers In Elba freestanding cookers we have therefore combined the functionality of technology with an attractive aesthetic, to create a welcoming and stimulating ambiance. Innovation and tradition are perfectly balanced in our designs, the result of years of experience in the field, creating flagship products for our business.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-collections-freestanding-cookers.jpg.webp",
    link: "/collections/collections-cookers/",
    bgColor: "#9baec4",
    textColor: "#1d1d1b",
  },
  {
    id: 2,
    title: "Collection hobs",
    description:
      "There are classic gas, gas on glass and induction Elba hobs, with four or more burners and even smaller sized or traditional-looking hobs. All Elba hobs are made with top-quality materials and therefore always give above standard results. All are equipped with features for increased safety and performance, such as for example, in induction hobs, a booster function for rapid cooking times and reduced energy consumption.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-collections-gas-induction-gas-on-glass-hobs.jpg.webp",
    link: "/collections/collections-hobs/",
    bgColor: "#bbbfb0",
    textColor: "#1d1d1b",
  },
  {
    id: 3,
    title: "Collection ovens",
    description:
      "We have ovens for specific uses, such as for meat, pizza, bread, cakes and leavened products. There is a right Elba oven for everybody because we want everyone to be able to show the best of their talents for cooking.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-collections-gas-electric-ovens.jpg.webp",
    link: "/collections/collections-ovens/",
    bgColor: "#3e4346",
    textColor: "#ffffff",
  },
];

const Collections = () => {
  return (
    <CollectionsLayout
      title="Unique Collections."
      subtitle="Distinctive lines "
      description="Talent for cooking also means being able to satisfy everyone with the several requirements arising from different cultures and approaches to cooking. For this reason, Elba offers the widest range of cooker appliances. Discover your best style for your kitchen with Elba Collections."
      sections={sections}
      bgColor="#30505b"
      textColor="#1d1d1b"
    />
  );
};

export default Collections;
