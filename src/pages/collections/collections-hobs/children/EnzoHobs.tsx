import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";
import BlocksGap from "../../../../components/common/BlocksGap";
import DiscoverTheCollection from "../../../../components/common/DiscoverTheCollection";
import MainTitleCollections from "../../../../components/common/MainTitleCollections";
import HeadCollection from "../../../../components/common/HeadCollection";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface IProduct {
  id: number;
  image: string;
  title: string;
  code?: string;
  link?: string;
  type?: "normal" | "special";
  collections?: string;
}

const EnzoHobs = () => {
  const { t, i18n } = useTranslation("");
  const navigate = useNavigate();

  const currentLang = i18n.language;
  const isIt = currentLang === "it";

  const sections = [
    {
      id: 1,
      title: t("enzoHobs.sections.gasMetal.title"),
      description: t("enzoHobs.sections.gasMetal.description"),
      image: "https://cms.bulm.it/wp-content/uploads/2025/07/Gas-on-metal-hobs.jpeg",
    },
    {
      id: 2,
      title: t("enzoHobs.sections.gasGlass.title"),
      description: t("enzoHobs.sections.gasGlass.description"),
      image: "https://cms.bulm.it/wp-content/uploads/2025/07/Gas-on-glass-hobs.webp",
    },
    {
      id: 3,
      title: t("enzoHobs.sections.gasMatik.title"),
      description: t("enzoHobs.sections.gasMatik.description"),
      image: "https://cms.bulm.it/wp-content/uploads/2025/07/Gas-matik-hob.jpeg",
    },
    {
      id: 4,
      title: t("enzoHobs.sections.vitro.title"),
      description: t("enzoHobs.sections.vitro.description"),
      image: "https://cms.bulm.it/wp-content/uploads/2025/07/Vitroceramic-Enzo-hobs.jpeg",
    },
    {
      id: 5,
      title: t("enzoHobs.sections.induction.title"),
      description: t("enzoHobs.sections.induction.description"),
      image: "https://cms.bulm.it/wp-content/uploads/2025/07/Induction-Enzo-hobs.jpeg",
    },
  ];

  const products: IProduct[] = [
    {
      id: 1,
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-induction-hob-ein-900-xf.png.webp",
      title: t("enzoHobs.products.1.title"),
      code: "EIN 900 XF",
    },
    {
      id: 2,
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-gas-on-glass-hob-elio-95-g-matik.png.webp",
      title: t("enzoHobs.products.2.title"),
      code: "ELIO 95G-MATIK",
    },
    {
      id: 3,
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-gas-hob-elio-95-545.png.webp",
      title: t("enzoHobs.products.3.title"),
      code: "ELIO 95-545",
    },
    {
      id: 4,
      type: "special",
      image: "https://cms.bulm.it/wp-content/uploads/2025/07/Find-out-.jpeg",
      title: t("enzoHobs.products.4.title"),
      link: "/home",
      collections: "Enzo",
    },
  ];

  return (
    <>
      <Helmet>
        <html lang={currentLang} />
        <title>{t("enzoHobs.meta.title")}</title>
        <meta name="description" content={t("enzoHobs.meta.description")} />
        <meta name="keywords" content={t("enzoHobs.meta.keywords")} />
        <meta property="og:title" content={t("enzoHobs.meta.ogTitle")} />
        <meta property="og:description" content={t("enzoHobs.meta.ogDescription")} />
        <meta property="og:image" content={t("enzoHobs.meta.ogImage")} />
        <meta property="og:url" content={`https://bulm.it/${isIt ? "it/" : ""}collections/collections-hobs/enzo`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://bulm.it/${isIt ? "it/" : ""}collections/collections-hobs/enzo`} />
      </Helmet>

      <div>
        <HeadCollection image="https://cms.bulm.it/wp-content/uploads/2025/07/Enzo-Hobs-banner.jpeg" />
        <div className="container relative z-5 pt-[580px] pb-20 space-y-8">
          <div className="flex items-center justify-between">
            <Breadcrumbs linkColor="#000000" activeColor="#000000" separatorColor="#000000" />
            <button onClick={() => navigate(-1)} className="text-xl font-bold cursor-pointer">
              {t("enzoHobs.back")}
            </button>
          </div>

          <MainTitleCollections title={t("enzoHobs.title")}> 
            <p dangerouslySetInnerHTML={{ __html: t("enzoHobs.description") }} />
          </MainTitleCollections>

          <BlocksGap sections={sections} />
          <DiscoverTheCollection products={products} />
        </div>
      </div>
    </>
  );
};

export default EnzoHobs;
