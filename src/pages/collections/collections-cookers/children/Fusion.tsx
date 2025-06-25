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
    title: "Simple to use electronic programmer",
    description:
      "Time and oven functions are controlled by an electronic programmer bringing precision and flexibility to cooking performances.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-fusion-startend-of-cooking-electronic-programmer.jpg.webp",
  },
  {
    id: 2,
    title: "Cast iron pan supports",
    description:
      "Heavy-duty and durable cast iron pan supports give stability to the pots.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-fusion-cast-iron-pan-supports.jpg.webp",
  },
  {
    id: 3,
    title: "Coordinated handle design",
    description:
      "The brushed metal handles on each appliance are ergonomic and pleasant to use.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-fusion-brushed-metal-handle.jpg.webp",
  },
  {
    id: 4,
    title: "Double finishing knobs",
    description: "Black soft touch and stainless steel finishing knobs.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-fusion-knobs.jpg.webp",
  },
];

const products: IProduct[] = [
  {
    id: 1,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-fusion-freestanding-cooker-fr-9642-m.png.webp",
    title: "Fusion single cavity dual fuel freestanding cooker",
    code: "FR 9642 M",
  },
  {
    id: 2,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-fusion-freestanding-cooker-fa-9642-m.png.webp",
    title: "Fusion single cavity dual fuel freestanding cooker",
    code: "FA 9642 M",
  },
  {
    id: 3,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-fusion-freestanding-cooker-fx-9642-m.png.webp",
    title: "Fusion single cavity dual fuel freestanding cooker",
    code: "FX 9642 M",
  },
  {
    id: 4,
    type: "special",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2023/06/03_Linea_Fusion_1_500x700_new.jpg.webp",
    title: "Find out more",
    link: "/home",
    collections: "Fusion",
  },
];

const Fusion = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-fusion-collection-range-cookers-made-in-italy.jpg.webp" />
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

        <MainTitleCollections title="Fusion Collection. Seamless integration into your kitchen.">
          <p>
            Designed to be perfectly combined in the space of your kitchen,{" "}
            <strong>Fusion Collection</strong> offers freestanding cookers with
            dual fuel cooktops and gas or electric ovens.
            <br /> The clean lines of these cookers are designed for seamless
            integration into any contemporary kitchen design.
          </p>
        </MainTitleCollections>

        <BlocksGap sections={sections} />

        <DiscoverTheCollection products={products} />
      </div>
    </div>
  );
};

export default Fusion;
