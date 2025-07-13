import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <main className="container px-8 md:px-4 py-12 max-w-5xl bg-white">
      <Helmet>
        <html lang="en" />
        <title>{t("privacy.title")}</title>
        <meta name="description" content={t("privacy.metaDescription")} />
        <meta name="keywords" content={t("privacy.metaKeywords")} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bulm.it/privacy-policy" />
        <link rel="alternate" href="https://bulm.it/privacy-policy" hrefLang="en" />
        <link rel="alternate" href="https://bulm.it/it/privacy-policy" hrefLang="it" />
        <link rel="alternate" href="https://bulm.it/privacy-policy" hrefLang="x-default" />
        <meta property="og:title" content={t("privacy.title")} />
        <meta property="og:description" content={t("privacy.metaDescription")} />
        <meta property="og:url" content="https://bulm.it/privacy-policy" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/logo/BULMlogo.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={t("privacy.title")} />
        <meta name="twitter:description" content={t("privacy.metaDescription")} />
      </Helmet>

      <div className="font-sans">
        <section className="mb-8">
          <h2 className="uppercase font-semibold mb-4">{t("privacy.introTitle")}</h2>
          <p className="text-base leading-relaxed">{t("privacy.introText")}</p>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold uppercase">{t("privacy.categoriesTitle")}</h2>

          <h3 className="text-base">{t("privacy.navigationDataTitle")}</h3>
          <p className="text-base leading-relaxed">{t("privacy.navigationDataText")}</p>

          <h3 className="font-medium mb-3 mt-6">{t("privacy.userDataTitle")}</h3>
          <p className="text-base leading-relaxed">{t("privacy.userDataText")}</p>

          <h3 className="font-medium mt-6">{t("privacy.cookiesTitle")}</h3>
          <p className="text-base leading-relaxed">
            {t("privacy.cookiesText")}{" "}
            <a href="/cookie-policy" className="hover:underline">
              {t("privacy.clickHere")}
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold uppercase">{t("privacy.processingPurposeTitle")}</h2>
          <p className="text-base leading-relaxed">{t("privacy.processingPurposeText")}</p>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold uppercase">{t("privacy.retentionTitle")}</h2>
          <p className="text-base leading-relaxed">{t("privacy.retentionText")}</p>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold uppercase">{t("privacy.communicationScopeTitle")}</h2>
          <p className="text-base leading-relaxed">{t("privacy.communicationScopeText")}</p>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold uppercase">{t("privacy.transferTitle")}</h2>
          <p className="text-base leading-relaxed">{t("privacy.transferText")}</p>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold uppercase">{t("privacy.rightsTitle")}</h2>
          <p className="text-base leading-relaxed">{t("privacy.rightsText")}</p>
        </section>

        <section className="mb-8">
          <p className="text-base mb-4">{t("privacy.lastUpdated", { year: new Date().getFullYear() })}</p>
          <p className="text-base leading-relaxed">{t("privacy.checkUpdateNote")}</p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
