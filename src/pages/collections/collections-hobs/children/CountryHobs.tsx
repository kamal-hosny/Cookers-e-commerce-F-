import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";
import BlocksGap from "../../../../components/common/BlocksGap";
import MainTitleCollections from "../../../../components/common/MainTitleCollections";
import HeadCollection from "../../../../components/common/HeadCollection";
import BoxesFooter from "../../../../components/common/BoxesFooter";


const sections = [
  {
    id: 1,
    title: "Country design",
    description:
      "The country aesthetic is enhanced by the characteristic knobs, all rigorously in antiqued brass; the gold-colored serigraphies reproduce a old-fashion design in balance between tradition and innovation.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-country-collection-hobs.jpg.webp",
  },
];


const CountryHobs = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-country-collection-hobs.jpg.webp" />
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

        <MainTitleCollections title="Country Collection. Inspired by tradition">
          <p>
            For those who love a touch of <strong>"country chic" style</strong>
            in the kitchen and prefer the nuances of material colors,
            <strong>Country Collection hobs</strong> are the ideal solution,
            giving the interior spaces the atmosphere that especially recalls
            the houses of countryside.
          </p>
        </MainTitleCollections>

        <BlocksGap sections={sections} />

<BoxesFooter />
     
      </div>
    </div>
  );
};

export default CountryHobs;
