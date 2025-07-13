import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import Breadcrumbs from "../../../../components/ui/Breadcrumbs";
import BlocksGap from "../../../../components/common/BlocksGap";
import DiscoverTheCollection from "../../../../components/common/DiscoverTheCollection";
import MainTitleCollections from "../../../../components/common/MainTitleCollections";
import HeadCollection from "../../../../components/common/HeadCollection";

const ElioHobs = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("elio_hobs.sections.1.title"),
      description: t("elio_hobs.sections.1.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-elio-collection-hobs.jpg.webp",
    },
    {
      id: 2,
      title: t("elio_hobs.sections.2.title"),
      description: t("elio_hobs.sections.2.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-collections-gas-induction-gas-on-glass-hobs.jpg.webp",
    },
    {
      id: 3,
      title: t("elio_hobs.sections.3.title"),
      description: t("elio_hobs.sections.3.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-elio-gas-matik-hobs.jpg.webp",
    },
    {
      id: 4,
      title: t("elio_hobs.sections.4.title"),
      description: t("elio_hobs.sections.4.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-elio-vitroceramic-hobs.jpg.webp",
    },
    {
      id: 5,
      title: t("elio_hobs.sections.5.title"),
      description: t("elio_hobs.sections.5.description"),
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-elio-induction-hobs.jpg.webp",
    },
  ];

  const products = [
    {
      id: 1,
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-induction-hob-ein-900-xf.png.webp",
      title: t("elio_hobs.products.1.title"),
      code: "EIN 900 XF",
    },
    {
      id: 2,
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-gas-on-glass-hob-elio-95-g-matik.png.webp",
      title: t("elio_hobs.products.2.title"),
      code: "ELIO 95G-MATIK",
    },
    {
      id: 3,
      image: "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-gas-hob-elio-95-545.png.webp",
      title: t("elio_hobs.products.3.title"),
      code: "ELIO 95-545",
    },
    {
      id: 4,
      type: "special",
      image: "https://www.elba-cookers.com/wp-content/uploads/2023/06/Elio-hob_500x700_new.jpg.webp",
      title: t("elio_hobs.products.4.title"),
      link: "/home",
      collections: "Elio",
    },
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{t("elio_hobs.meta.title")}</title>
        <meta name="description" content={t("elio_hobs.meta.description")} />
        <meta name="keywords" content={t("elio_hobs.meta.keywords")} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bulm.it/collections/collections-hobs/elio" />

        <link rel="alternate" href="https://bulm.it/collections/collections-hobs/elio" hrefLang="en" />
        <link rel="alternate" href="https://bulm.it/it/collections/collections-hobs/elio" hrefLang="it" />
        <link rel="alternate" href="https://bulm.it/collections/collections-hobs/elio" hrefLang="x-default" />

        <meta property="og:title" content={t("elio_hobs.meta.title")} />
        <meta property="og:description" content={t("elio_hobs.meta.og_description")} />
        <meta property="og:image" content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-collection-gas-induction-hobs.jpg.webp" />
        <meta property="og:url" content="https://bulm.it/collections/collections-hobs/elio" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("elio_hobs.meta.title")} />
        <meta name="twitter:description" content={t("elio_hobs.meta.twitter_description")} />
        <meta name="twitter:image" content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-collection-gas-induction-hobs.jpg.webp" />
      </Helmet>

      <div>
        <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-collection-gas-induction-hobs.jpg.webp" />
        <div className="container relative z-5 pt-[580px] pb-20 space-y-8">
          <div className="flex items-center justify-between">
            <Breadcrumbs linkColor="#000000" activeColor="#000000" separatorColor="#000000" />
            <button onClick={() => navigate(-1)} className="text-xl font-bold cursor-pointer">
              {t("elio_hobs.back")}
            </button>
          </div>

          <MainTitleCollections title={t("elio_hobs.main.title")}>
            <p>{t("elio_hobs.main.description")}</p>
          </MainTitleCollections>

          <BlocksGap sections={sections} />
          <DiscoverTheCollection products={products} />
        </div>
      </div>
    </>
  );
};

export default ElioHobs;
