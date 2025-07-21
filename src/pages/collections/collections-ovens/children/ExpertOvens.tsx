import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../../../components/ui/Breadcrumbs";
import BlocksGap from "../../../../components/common/BlocksGap";
import MainTitleCollections from "../../../../components/common/MainTitleCollections";
import HeadCollection from "../../../../components/common/HeadCollection";
import { Helmet } from "react-helmet-async";


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
        "https://cms.bulm.it/wp-content/uploads/2025/07/25286293_KnowYourApplianceOvensActiveClean_2720x1530px.webp",
    },
    {
      id: 3,
      title: t("expertOvens.sections.leavening.title"),
      description: t("expertOvens.sections.leavening.description"),
      image:
        "https://cms.bulm.it/wp-content/uploads/2025/07/475344814_18035466359579879_2599917484872250557_n.jpg",
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
        "https://cms.bulm.it/wp-content/uploads/2025/07/cook61612860353.webp",
    },
  ];


  return (
    <>
      <Helmet>
        <title>Expert | BULM</title>
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

        </div>
      </div>
    </>
  );
};

export default ExpertOvens;
