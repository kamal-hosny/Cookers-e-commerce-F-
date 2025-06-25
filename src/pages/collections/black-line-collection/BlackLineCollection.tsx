import { useNavigate } from "react-router-dom";
import HeadCollection from "../../../components/common/HeadCollection";
import Breadcrumbs from "../../../components/ui/Breadcrumbs";
import MainTitleCollections from "../../../components/common/MainTitleCollections";
import Blocks from "../../../components/common/Blocks";
import DiscoverTheCollection from "../../../components/common/DiscoverTheCollection";
import BoxesFooter from "../../../components/common/BoxesFooter";

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
    title: "Built-in Electric Multifunction oven",
    description:
      "Many special features in just 1 product, make this oven unique in the market. With its 11 functions, it boasts professional ones including Air Fry for crispy textures and Pizza 300°C. Also find Easy Steam for healthy recipes and a Booster fast preheating.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2024/11/Elba-Black-Line-electric-oven.jpg.webp",
    link: "/product/el-11-xlfb-300-rf-2/",
    bgColor: "#ffffff",
    textColor: "#000000",
  },
  {
    id: 2,
    title: "Combi Microwave 45cm",
    description:
      "Heat, bake, grill, and roast. All in just one versatile appliance offering excellent cooking performance and 13 different functions with limited power consumption. Also find 13 auto menus for preparing a variety of dishes with quick set-up (e.g. vegetables, pies, pizza, potatoes, soups, etc.)",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2024/11/Elba-Black-Line-Combi-Microwave-45cm.jpg.webp",
    link: "/product/microwave-oven-el-45b-mwc/",
    bgColor: "#ffffff",
    textColor: "#000000",
  },
  {
    id: 3,
    title: "Coffee & Cappuccino maker",
    description:
      "Many special features in just 1 product, make this oven unique in the market. With its 11 functions, it boasts professional ones including Air Fry for crispy textures and Pizza 300°C. Also find Easy Steam for healthy recipes and a Booster fast preheating.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2024/11/Elba-Black-Line-electric-oven.jpg.webp",
    link: "/product/el-11-xlfb-300-rf-2/",
    bgColor: "#ffffff",
    textColor: "#000000",
  },
  {
    id: 4,
    title: "Warming Drawer",
    description:
      "The Warming Drawer is fully aligned with the new Black Line aesthetics, and it’s created to achieve a variety of exclusive combinations.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2024/11/Elba-Black-Line-Warming-Drawer.jpg.webp",
    link: "/product/warming-drawer-el-14b-dw/",
    bgColor: "#ffffff",
    textColor: "#000000",
  },
];

const products: IProduct[] = [
  {
    id: 1,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2024/06/EL-11-XLFB-300.png.webp",
    title: "Electric multifunction oven",
    code: "EL 11 XLFB 300 RF",
  },
  {
    id: 2,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2024/06/EL-45-B-MWC_on.png.webp",
    title: "Microwave oven",
    code: "EL 45B MWC",
  },
  {
    id: 3,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2024/06/EL-45-CCM_front_brick.png.webp",
    title: "Fully automatic Coffee & Cappuccino maker",
    code: "EL 45 CCM",
  },
];

const BlackLineCollection = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-collection-gas-induction-hobs.jpg.webp" />
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
        <MainTitleCollections title="Black Line. High-quality kitchen experience">
          <p>
            Enter the new dimension of luxury kitchen and discover the perfect
            match of <strong>expertise</strong> and{" "}
            <strong>Italian design</strong> with the{" "}
            <strong>Elba Black Line</strong>. A complete, sophisticated but
            still clean <strong>collection</strong> thought to enhance your
            kitchen experience.
          </p>
        </MainTitleCollections>

        <Blocks sections={sections} />
        <div className="w-full overflow-hidden rounded-2xl shadow-lg my-10">
          <img
            src="https://www.elba-cookers.com/wp-content/uploads/2024/11/gallery07.jpg.webp"
            alt="banner"
            className="w-full h-[300px] md:h-[400px] lg:h-[550px] object-cover"
          />
        </div>

        <DiscoverTheCollection products={products} />

        <BoxesFooter />
      </div>
    </div>
  );
};

export default BlackLineCollection;
