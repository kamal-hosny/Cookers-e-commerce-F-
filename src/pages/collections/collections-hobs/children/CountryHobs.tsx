import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";
import BlocksGap from "../../../../components/common/BlocksGap";
import MainTitleCollections from "../../../../components/common/MainTitleCollections";
import HeadCollection from "../../../../components/common/HeadCollection";
import BoxesFooter from "../../../../components/common/BoxesFooter";
import { Helmet } from "react-helmet-async";

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
    <>
      <Helmet>
        <html lang="en" />
        <title>
          BULM Country Hobs Collection | Rustic Elegance in Your Kitchen
        </title>
        <meta
          name="description"
          content="Explore BULM's Country Collection of hobs — crafted with traditional design, antiqued brass knobs, and rustic charm to bring countryside warmth into your kitchen."
        />
        <meta
          name="keywords"
          content="Country kitchen hobs, rustic hobs, BULM country collection, brass knobs, traditional gas hobs, countryside kitchen appliances"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://bulm.it/collections/collections-hobs/country"
        />

        {/* hreflang for multilingual SEO */}
        <link
          rel="alternate"
          href="https://bulm.it/collections/collections-hobs/country"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://bulm.it/it/collections/collections-hobs/country"
          hrefLang="it"
        />
        <link
          rel="alternate"
          href="https://bulm.it/collections/collections-hobs/country"
          hrefLang="x-default"
        />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta
          property="og:title"
          content="BULM Country Hobs Collection | Rustic Elegance in Your Kitchen"
        />
        <meta
          property="og:description"
          content="Authentic and charming, BULM's Country Collection hobs blend traditional style with modern performance."
        />
        <meta
          property="og:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-country-collection-hobs.jpg.webp"
        />
        <meta
          property="og:url"
          content="https://bulm.it/collections/collections-hobs/country"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="BULM Country Hobs Collection | Rustic Elegance in Your Kitchen"
        />
        <meta
          name="twitter:description"
          content="Designed for those who appreciate countryside aesthetics — discover BULM's Country hobs with antique brass finishes and timeless style."
        />
        <meta
          name="twitter:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-country-collection-hobs.jpg.webp"
        />
      </Helmet>

      <div>
        <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-country-collection-hobs.jpg.webp" />
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

          <MainTitleCollections title="Country Collection. Inspired by tradition">
            <p>
              For those who love a touch of{" "}
              <strong>"country chic" style</strong>
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
    </>
  );
};

export default CountryHobs;
