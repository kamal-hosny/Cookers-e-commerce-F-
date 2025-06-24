import Blocks from "../common/Blocks";

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

const UniqueCollections = () => {
  return (
    <div className="w-full py-10 container flex flex-col gap-16 items-center justify-center bg-white">
      <div className="titles w-full text-center ">
        <p className="text-3xl font-medium">
          Unique Collections <br /> <b>with distinguished lines </b>
        </p>
      </div>

      <Blocks sections={sections} />
    </div>
  );
};

export default UniqueCollections;
