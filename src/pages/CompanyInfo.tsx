import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const CompanyInfo = () => {
  const { t } = useTranslation();

  const descriptionParagraphs: string[] = t("company.description", {
    returnObjects: true,
  }) as string[];
  

  return (
    <main className="container py-12 max-w-5xl bg-white space-y-6">
      <Helmet>
        <html lang="en" />
        <title>{t("company.meta.title")}</title>
        <meta name="description" content={t("company.meta.description")} />
        <meta name="keywords" content={t("company.meta.keywords")} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bulm.it/company" />
        <link rel="alternate" href="https://bulm.it/company" hrefLang="en" />
        <link rel="alternate" href="https://bulm.it/it/company" hrefLang="it" />
        <link rel="alternate" href="https://bulm.it/company" hrefLang="x-default" />
        <meta property="og:title" content={t("company.meta.ogTitle")} />
        <meta property="og:description" content={t("company.meta.ogDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bulm.it/company" />
        <meta property="og:image" content="/logo/BULMlogo.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={t("company.meta.ogTitle")} />
        <meta name="twitter:description" content={t("company.meta.ogDescription")} />
      </Helmet>

      <h1 className="text-3xl font-semibold">{t("company.title")}</h1>

      <div className="font-medium space-y-4">
        {descriptionParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </main>
  );
};

export default CompanyInfo;
