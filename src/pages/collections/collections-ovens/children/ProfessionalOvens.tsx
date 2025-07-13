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

const ProfessionalOvens = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("professional_ovens.sections.0.title"),
      description: t("professional_ovens.sections.0.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-elio-collection-hobs.jpg.webp",
    },
    {
      id: 2,
      title: t("professional_ovens.sections.1.title"),
      description: t("professional_ovens.sections.1.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-idroclean-oven.jpg.webp",
    },
    {
      id: 3,
      title: t("professional_ovens.sections.2.title"),
      description: t("professional_ovens.sections.2.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-leavening-40.jpg.webp",
    },
    {
      id: 4,
      title: t("professional_ovens.sections.3.title"),
      description: t("professional_ovens.sections.3.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-pizza-300.jpg.webp",
    },
    {
      id: 5,
      title: t("professional_ovens.sections.4.title"),
      description: t("professional_ovens.sections.4.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-maxi-cavity-74-litres.jpg.webp",
    },
  ];

  const products: IProduct[] = [
    {
      id: 1,
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-professional-electric-multifunction-oven-pro-9-xla.png.webp",
      title: t("professional_ovens.products.0.title"),
      code: "PRO 9 XLA",
    },
    {
      id: 2,
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-professional-electric-multifunction-oven-pro-9-xlx.png.webp",
      title: t("professional_ovens.products.1.title"),
      code: "PRO 9 XLX",
    },
    {
      id: 3,
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-professional-electric-multifunction-oven-pro-11-xlx.png.webp",
      title: t("professional_ovens.products.2.title"),
      code: "PRO 11 XLX",
    },
    {
      id: 4,
      type: "special",
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/05/Professional_500x700.jpg.webp",
      title: t("professional_ovens.products.3.title"),
      link: "/home",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("professional_ovens.seo.title")}</title>
        <meta name="description" content={t("professional_ovens.seo.description")} />
        <meta name="keywords" content={t("professional_ovens.seo.keywords")} />
        <meta property="og:title" content={t("professional_ovens.seo.og_title")} />
        <meta property="og:description" content={t("professional_ovens.seo.og_description")} />
        <meta property="og:image" content="https://www.elba-cookers.com/wp-content/uploads/2023/01/elba-professional-ovens-collection-2.jpg.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bulm.it/collections/collections-ovens/professional-ovens" />
        <link rel="canonical" href="https://bulm.it/collections/collections-ovens/professional-ovens" />
      </Helmet>

      <div>
        <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2023/01/elba-professional-ovens-collection-2.jpg.webp" />
        <div className="container  relative z-5 pt-[580px] pb-20 space-y-8">
          <div className="flex items-center justify-between">
            <Breadcrumbs linkColor="#000000" activeColor="#000000" separatorColor="#000000" />
            <button
              onClick={() => navigate(-1)}
              className="text-xl font-bold cursor-pointer"
            >
              Back_
            </button>
          </div>

          <MainTitleCollections title={t("professional_ovens.title")}>
            <p>{t("professional_ovens.description")}</p>
          </MainTitleCollections>

          <BlocksGap sections={sections} />

          <DiscoverTheCollection products={products} />
        </div>
      </div>
    </>
  );
};

export default ProfessionalOvens;
