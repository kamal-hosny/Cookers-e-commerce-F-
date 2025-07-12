import { Helmet } from "react-helmet-async";
import Landing from "../components/home/Landing";
import BannerLanding from "../components/home/BannerLanding";
import DistinctiveItalianDesign from "../components/home/DistinctiveItalianDesign";
import News from "../components/home/News";
import UniqueCollections from "../components/home/UniqueCollections";
import BoxesFooter from "../components/common/BoxesFooter";

const Home = () => {
  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>BULM Italy – Luxury Italian Kitchen Appliances</title>
        <meta
          name="description"
          content="Discover BULM's exclusive Italian-made kitchen appliances. Where innovation meets timeless design. Explore cookers, ovens, hobs, and more."
        />
        <meta
          name="keywords"
          content="Italian kitchen appliances, luxury cookers, built-in ovens, BULM Italy, modern kitchen design, gas hobs, induction cooking, premium home appliances"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bulm.it/" />

        {/* hreflang for multilingual SEO */}
        <link rel="alternate" href="https://bulm.it/" hrefLang="en" />
        <link rel="alternate" href="https://bulm.it/it" hrefLang="it" />
        <link rel="alternate" href="https://bulm.it/" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:title" content="BULM Italy – Luxury Italian Kitchen Appliances" />
        <meta
          property="og:description"
          content="Elegant and innovative kitchen appliances made in Italy. Explore the collections of BULM – the essence of Italian craftsmanship."
        />
        <meta property="og:image" content="/logo/BULMlogo.svg" />
        <meta property="og:url" content="https://bulm.it/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BULM Italy – Luxury Kitchen Appliances" />
        <meta
          name="twitter:description"
          content="Discover premium Italian-made kitchen appliances by BULM. Where quality meets style."
        />
        <meta name="twitter:image" content="/logo/BULMlogo.svg" />
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
