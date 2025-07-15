import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
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

const LandOvens = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("landOvens.sections.countryStyle.title"),
      description: t("landOvens.sections.countryStyle.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-country-control-panel.jpg.webp",
    },
    {
      id: 2,
      title: t("landOvens.sections.idroclean.title"),
      description: t("landOvens.sections.idroclean.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2023/05/idroclean-elba-900x600px-elba.jpg.webp",
    },
  ];

  const products: IProduct[] = [
    {
      id: 1,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-country-electric-multifunction-oven-ecm-9-lan-front.jpg.webp",
      title: t("landOvens.products.0.title"),
      code: "ECM 9 LAN",
    },
    {
      id: 2,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-country-electric-multifunction-oven-ecm-9-lav.png.webp",
      title: t("landOvens.products.1.title"),
      code: "ECM 9 LAV",
    },
    {
      id: 3,
      type: "special",
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/05/Country-1_500x700.jpg.webp",
      title: t("landOvens.products.2.title"),
      link: "/home",
      collections: "Land",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("landOvens.meta.title")}</title>
        <meta name="description" content={t("landOvens.meta.description")} />
        <meta name="keywords" content={t("landOvens.meta.keywords")} />
        <meta property="og:title" content={t("landOvens.meta.title")} />
        <meta
          property="og:description"
          content={t("landOvens.meta.ogDescription")}
        />
        <meta
          property="og:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2022/03/Country-collection.jpg.webp"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://bulm.it/collections/collections-ovens/land-ovens"
        />
        <link
          rel="canonical"
          href="https://bulm.it/collections/collections-ovens/land-ovens"
        />
      </Helmet>

      <div>
        <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/Country-collection.jpg.webp" />
        <div className="container relative z-5 pt-[580px] pb-20 space-y-8">
          <div className="flex items-center justify-between">
            <Breadcrumbs
              linkColor="#000000"
              activeColor="#000000"
              separatorColor="#000000"
            />
            <button
              onClick={() => navigate(-1)}
              className="text-xl font-bold cursor-pointer"
            >
              {t("back")}
            </button>
          </div>

          <MainTitleCollections title={t("landOvens.title")}>
            <p dangerouslySetInnerHTML={{ __html: t("landOvens.description") }} />
          </MainTitleCollections>

          <BlocksGap sections={sections} />

          <DiscoverTheCollection products={products} />
        </div>
      </div>
    </>
  );
};

export default LandOvens;
