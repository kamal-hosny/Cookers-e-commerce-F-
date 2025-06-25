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
    title: "Unique features",
    description:
      "All Elba Excellence dual fuel and electric Cookers include a touch control electronic programmer, ensuring both precise and flexible cooking.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-excellence-touch-control-electronic-programmer.jpg.webp",
  },
  {
    id: 2,
    title: "Brass dual burners",
    description:
      "Hobs feature stylish brass dual burners that are extremely hard-wearing for superior heating performance.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/excellence-brass-dual-burners.jpg.webp",
  },
  {
    id: 3,
    title: "Brushed metal finishing knobs",
    description:
      "Brushed metal finishing knobs with outer bezel, giving the kitchen a very professional appearance.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/excellence-brushed-metal-finishing-knobs-with-outer-bezel.jpg.webp",
  },
  {
    id: 4,
    title: "Double finishing handle",
    description:
      "The Excellence collection is equipped with a double-finishing handle: brushed metal in the center part and chromed finishing at the ends.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/excellence-double-finishing-handle.jpg.webp",
  },
];

const products: IProduct[] = [
  {
    id: 1,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-excellence-freestanding-cooker-ea-966-m.png.webp",
    title: " Excellence single cavity dual fuel freestanding cooker",
    code: " EA 966 M",
  },
  {
    id: 2,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-excellence-freestanding-cooker-eg-965-im.png.webp",
    title: "Excellence single cavity induction freestanding cooker",
    code: "EG 965 IM",
  },
  {
    id: 3,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-excellence-freestanding-cooker-ex-106-m.png.webp",
    title: "Excellence single cavity dual fuel freestanding cooker",
    code: "EX 106 M",
  },
  {
    id: 4,
    type: "special",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2023/06/02_Linea_Excellence_1_500x700_new.jpg.webp",
    title: "Find out more",
    link: "/home",
    collections:"Excellence",
  },
];

const Excellence = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-excellence-collection-range-cookers-made-in-italy.jpg.webp" />
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

        <MainTitleCollections title="Excellence collection. Inspired by professionals.">
          <p>
            With the iconic design inspired by professional cookers,{" "}
            <strong>Elba Excellence Cookers</strong> offer a refined blend of
            advanced cooking features.
            <br /> These models, available in two widths 60cm and 90cm, as a{" "}
            <strong>single oven cooker</strong> or with{" "}
            <strong>two cavities</strong>, feature a
            <strong> gas or induction hob</strong> and&nbsp;
            <strong>electric multifunction or gas oven</strong>.
          </p>
        </MainTitleCollections>

        <BlocksGap sections={sections} />

        <DiscoverTheCollection products={products} />
      </div>
    </div>
  );
};

export default Excellence;
