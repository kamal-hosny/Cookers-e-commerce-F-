import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import Breadcrumbs from "../../../../components/ui/Breadcrumbs";
import BlocksGap from "../../../../components/common/BlocksGap";
import MainTitleCollections from "../../../../components/common/MainTitleCollections";
import HeadCollection from "../../../../components/common/HeadCollection";
import BoxesFooter from "../../../../components/common/BoxesFooter";

const CountryHobs = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: 1,
      title: t("country_hobs.section.title"),
      description: t("country_hobs.section.description"),
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-country-collection-hobs.jpg.webp",
    },
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{t("country_hobs.meta.title")}</title>
        <meta name="description" content={t("country_hobs.meta.description")} />
        <meta name="keywords" content={t("country_hobs.meta.keywords")} />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://bulm.it/collections/collections-hobs/country"
        />

        {/* hreflang */}
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

        {/* Open Graph */}
        <meta property="og:title" content={t("country_hobs.meta.title")} />
        <meta
          property="og:description"
          content={t("country_hobs.meta.og_description")}
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
        <meta name="twitter:title" content={t("country_hobs.meta.title")} />
        <meta
          name="twitter:description"
          content={t("country_hobs.meta.twitter_description")}
        />
        <meta
          name="twitter:image"
          content="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-country-collection-hobs.jpg.webp"
        />
      </Helmet>

      <div>
        <HeadCollection image="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-country-collection-hobs.jpg.webp" />
        <div className="container relative z-5 pt-[580px] pb-20 space-y-8">
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
              {t("country_hobs.back")}
            </button>
          </div>

          <MainTitleCollections
            title={t("country_hobs.main.title")}
          >
            <p>{t("country_hobs.main.description")}</p>
          </MainTitleCollections>

          <BlocksGap sections={sections} />
          <BoxesFooter />
        </div>
      </div>
    </>
  );
};

export default CountryHobs;
