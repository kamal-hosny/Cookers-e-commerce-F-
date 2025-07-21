import { Helmet } from "react-helmet-async";
import Landing from "../components/home/Landing";
import BannerLanding from "../components/home/BannerLanding";
import DistinctiveItalianDesign from "../components/home/DistinctiveItalianDesign";
import News from "../components/home/News";
import UniqueCollections from "../components/home/UniqueCollections";
import BoxesFooter from "../components/common/BoxesFooter";

const Home = () => {
  const siteUrl = "https://bulm.it";
  const logoUrl = `${siteUrl}/logo/BULMlogo.svg`;

  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Home | BULM</title>
        <meta
          name="description"
          content="Discover BULM's exclusive Italian-made kitchen appliances. Cookers, ovens, hobs, and more – crafted with timeless Italian design."
        />
        <meta
          name="keywords"
          content="Italian kitchen appliances, BULM Italy, luxury cookers, modern ovens, gas hobs, induction appliances, premium kitchen design"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={siteUrl} />

        {/* hreflang */}
        <link rel="alternate" href={siteUrl} hrefLang="en" />
        <link rel="alternate" href={`${siteUrl}/it`} hrefLang="it" />
        <link rel="alternate" href={siteUrl} hrefLang="x-default" />

        <meta
          property="og:description"
          content="Elegant and innovative kitchen appliances made in Italy. Discover the essence of Italian craftsmanship at BULM."
        />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BULM Italy – Luxury Kitchen Appliances" />
        <meta
          name="twitter:description"
          content="Premium Italian-made kitchen appliances from BULM – blending innovation and timeless style."
        />
        <meta name="twitter:image" content={logoUrl} />

        {/* Schema.org Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BULM Italy",
            "url": "${siteUrl}",
            "logo": "${logoUrl}",
            "sameAs": [
              "https://www.facebook.com/bulmitaly",
              "https://www.instagram.com/bulmitaly"
            ]
          }
          `}
        </script>

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "${siteUrl}",
            "name": "BULM Italy",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "${siteUrl}/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
          `}
        </script>

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Home",
            "url": "${siteUrl}/",
            "description": "Explore premium Italian kitchen appliances from BULM – where timeless design meets modern technology."
          }
          `}
        </script>
      </Helmet>

      <Landing />
      <BannerLanding />
      <DistinctiveItalianDesign />
      <News />
      <UniqueCollections />
      <BoxesFooter />
    </main>
  );
};

export default Home;
