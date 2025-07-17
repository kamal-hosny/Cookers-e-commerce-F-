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

const ExpertOvens = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("expertOvens.sections.easySteam.title"),
      description: t("expertOvens.sections.easySteam.description"),
      image: "https://cms.bulm.it/wp-content/uploads/2025/07/Easy-Steam-2.jpeg",
    },
    {
      id: 2,
      title: t("expertOvens.sections.idroclean.title"),
      description: t("expertOvens.sections.idroclean.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Idroclean.webp",
    },
    {
      id: 3,
      title: t("expertOvens.sections.leavening.title"),
      description: t("expertOvens.sections.leavening.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Leavening-40.webp",
    },
    {
      id: 4,
      title: t("expertOvens.sections.pizza.title"),
      description: t("expertOvens.sections.pizza.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Special-function-Pizza300°C.jpeg",
    },
    {
      id: 5,
      title: t("expertOvens.sections.largeCavity.title"),
      description: t("expertOvens.sections.largeCavity.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Large-oven-cavity.webp",
    },
  ];

  const products: IProduct[] = [
    {
      id: 1,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-professional-electric-multifunction-oven-pro-9-xla.png.webp",
      title: t("expertOvens.products.0.title"),
      code: "EX 9 XLA",
    },
    {
      id: 2,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-professional-electric-multifunction-oven-pro-9-xlx.png.webp",
      title: t("expertOvens.products.1.title"),
      code: "EX 9 XLX",
    },
    {
      id: 3,
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-professional-electric-multifunction-oven-pro-11-xlx.png.webp",
      title: t("expertOvens.products.2.title"),
      code: "EX 11 XLX",
    },
    {
      id: 4,
      type: "special",
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/Professional_500x700.jpg.webp",
      title: t("expertOvens.products.3.title"),
      link: "/home",
      collections: "Expert",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("expertOvens.meta.title")}</title>
        <meta name="description" content={t("expertOvens.meta.description")} />
        <meta name="keywords" content={t("expertOvens.meta.keywords")} />
        <meta property="og:title" content={t("expertOvens.meta.title")} />
        <meta
          property="og:description"
          content={t("expertOvens.meta.ogDescription")}
        />
        <meta
          property="og:image"
          content="https://cms.bulm.it/wp-content/uploads/2025/07/expert-ovens.jpeg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://bulm.it/collections/collections-ovens/expert-ovens"
        />
        <link
          rel="canonical"
          href="https://bulm.it/collections/collections-ovens/expert-ovens"
        />
      </Helmet>

      <div>
        <HeadCollection image="https://cms.bulm.it/wp-content/uploads/2025/07/expert-ovens.jpeg" />
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

          <MainTitleCollections title={t("expertOvens.title")}>
            <p
              dangerouslySetInnerHTML={{
                __html: t("expertOvens.description"),
              }}
            />
          </MainTitleCollections>

          <BlocksGap sections={sections} />

          <DiscoverTheCollection products={products} />
        </div>
      </div>
    </>
  );
};

export default ExpertOvens;
