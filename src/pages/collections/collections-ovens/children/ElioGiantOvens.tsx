import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";
import BlocksGap from "../../../../components/common/BlocksGap";
import DiscoverTheCollection from "../../../../components/common/DiscoverTheCollection";
import MainTitleCollections from "../../../../components/common/MainTitleCollections";
import HeadCollection from "../../../../components/common/HeadCollection";

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
    title: "Giant electric multifunction ovens",
    description:
      "Choose from electric multifunction ovens. Whichever finish you prefer, all 90cm Giant Ovens feature 141 litres gross volume and 121 usable litres with 7 racks positions, varied cooking programs including rapid pre-heat and 2 fans for full 3D cooking experience.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-elio-giant-electric-multifunction-ovens.jpg.webp",
  },
  {
    id: 2,
    title: "Giant gas ovens",
    description:
      "A unique feature of Giant gas ovens is the fan gas oven and full-width, all gas grill. It is a powerful combination offering heat control and flexibility. Stainless steel rotisserie kit which, when needed, can fit across the full width of the oven and features a double fork setting.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-collections-gas-induction-gas-on-glass-hobs.jpg.webphttps://www.elba-cookers.com/wp-content/uploads/2022/02/elba-elio-giant-gas-collection-ovens.jpg.webp",
  },
];

const products: IProduct[] = [
  {
    id: 1,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-gas-oven-elio-g90.png.webp",
    title: "Fan gas oven",
    code: "ELIO G90",
  },
  {
    id: 2,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-gas-oven-elio-g92.png.webp",
    title: "Fan gas oven",
    code: "ELIO G92",
  },
  {
    id: 3,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-electric-multifunction-oven-140-e95-mf.png.webp",
    title: "Electric multifunction oven",
    code: "140-E95 MF",
  },
  {
    id: 4,
    type: "special",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/05/Patate_500x700.jpg.webp",
    title: "Find out more",
    link: "/home",
    collections: "Giant",
  },
];

const ElioGiantOvens = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-giant-collection.jpg.webp" />
      <div className=" container space-y-3 top-[400px] pt-10 pb-[300px] relative z-5">
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

        <MainTitleCollections title="Elio Giant Collection. A huge space with more power and performance ">
          <p>
            Imagine having no space limits with even more possibilities; a
            perfect result in every condition without wasting time.
          </p>
        </MainTitleCollections>

        <BlocksGap sections={sections} />

        <DiscoverTheCollection products={products} />
      </div>
    </div>
  );
};

export default ElioGiantOvens;
