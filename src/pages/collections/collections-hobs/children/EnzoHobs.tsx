import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";
import BlocksGap from "../../../../components/common/BlocksGap";
import DiscoverTheCollection from "../../../../components/common/DiscoverTheCollection";
import MainTitleCollections from "../../../../components/common/MainTitleCollections";
import HeadCollection from "../../../../components/common/HeadCollection";
import { Helmet } from "react-helmet-async";

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
    title: "Gas on metal hobs",
    description:
      "Smooth edges and minimal design create an exclusive look, Elio gas hobs are crafted using an expressly increased thickness (8/10) to ensure resistance over time. Available in three different sizes: 60cm, 75cm and 90cm",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-elio-collection-hobs.jpg.webp",
  },
  {
    id: 2,
    title: "Gas on glass hobs",
    description:
      "Elio gas on glass hobs are finished in stylish black vitroceramic. With matt black burners and accurate metal finishing knobs: cooking becomes simple, versatile and precise. Available in three different sizes: 60cm, 75cm and 90cm.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-collections-gas-induction-gas-on-glass-hobs.jpg.webp",
  },
  {
    id: 3,
    title: "Gas-matik hob",
    description:
      "Elio gas-matik hob has a range of additional features: each gas burner can be programmed to turn off after a set period of time or set as a minute minder. Furthermore, this hob features a child lock function and if a burner is in use continuously for 4 hours, the system will automatically shut down. Available in 90cm size.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-elio-gas-matik-hobs.jpg.webp",
  },
  {
    id: 4,
    title: "Vitroceramic Elio hobs",
    description:
      "Metal handle with brushed finishing on all the Classic Collection Cookers.Easy to clean, Vitroceramic Elio hobs are equipped with a scratch-resistant surface that quickly transmits heat only vertically, from the heating elements placed under the hob directly to traditional pots, thus ensuring good cooking performance. Available in four different sizes: 30cm, 60cm, 78m and 90cm.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-elio-vitroceramic-hobs.jpg.webp",
  },
  {
    id: 5,
    title: "Induction Elio hobs",
    description:
      "Metal handle with brushed finishing on all the Classic Collection Cookers.With their essential design, Elio induction hobs, thanks to the built-in compatibility with any space, can be easily installed both in case of replacement and first installation. Their special functions, such as Chef Cook, Full bridge and Melting, give you the possibility to increase your talent for cooking.Available in different sizes: 30cm, 60cm, 70cm, 75cm, 80cm and 90cm",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-elio-induction-hobs.jpg.webp",
  },
];

const products: IProduct[] = [
  {
    id: 1,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-induction-hob-ein-900-xf.png.webp",
    title: "Induction hob",
    code: "EIN 900 XF",
  },
  {
    id: 2,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-gas-on-glass-hob-elio-95-g-matik.png.webp",
    title: "Gas hob",
    code: "ELIO 95G-MATIK",
  },
  {
    id: 3,
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-gas-hob-elio-95-545.png.webp",
    title: "Gas hob",
    code: "ELIO 95-545",
  },
  {
    id: 4,
    type: "special",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2023/06/Elio-hob_500x700_new.jpg.webp",
    title: "Find out more",
    link: "/home",
    collections: "Elio",
  },
];

const EnzoHobs = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>
          BULM Elio Hobs Collection | Gas, Glass, Vitroceramic & Induction
        </title>
        <meta
          name="description"
          content="Explore BULM's Elio Collection of hobs — premium gas, gas-on-glass, induction and vitroceramic hobs designed with safety, performance, and Italian style."
        />
        <meta
          name="keywords"
          content="Elio hobs, gas hobs, induction hobs, gas on glass hob, vitroceramic hob, BULM Elio collection, kitchen appliances, built-in hobs"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://bulm.it/collections/collections-hobs/elio"
        />

        {/* hreflang for multilingual SEO */}
        <link
          rel="alternate"
          href="https://bulm.it/collections/collections-hobs/elio"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://bulm.it/it/collections/collections-hobs/elio"
          hrefLang="it"
        />
        <link
          rel="alternate"
          href="https://bulm.it/collections/collections-hobs/elio"
          hrefLang="x-default"
        />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta
          property="og:title"
          content="BULM Elio Hobs Collection | Gas, Glass, Vitroceramic & Induction"
        />
        <meta
          property="og:description"
          content="Versatile, durable, and beautifully designed — discover BULM Elio hobs in gas, glass, vitroceramic, and induction formats."
        />
        <meta
          property="og:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-collection-gas-induction-hobs.jpg.webp"
        />
        <meta
          property="og:url"
          content="https://bulm.it/collections/collections-hobs/elio"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="BULM Elio Hobs Collection | Gas, Glass, Vitroceramic & Induction"
        />
        <meta
          name="twitter:description"
          content="Discover the latest from BULM's Elio hob series — combining high-end cooking performance with refined Italian design."
        />
        <meta
          name="twitter:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-collection-gas-induction-hobs.jpg.webp"
        />
      </Helmet>

      <div>
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

          <MainTitleCollections title="Elio Collection">
            <p>
              All <strong>Elio hobs</strong> are made with top-quality materials
              and therefore always give above standard results. All are equipped
              with features for increased safety and performance. There are{" "}
              <strong>gas on metal</strong>, <strong>gas on glass</strong> and{" "}
              <strong>induction hobs</strong>, with four or more burners and
              even smaller sized or traditional-looking hobs.
            </p>
          </MainTitleCollections>

          <BlocksGap sections={sections} />

          <DiscoverTheCollection products={products} />
        </div>
      </div>
    </>
  );
};

export default EnzoHobs;
