import { Helmet } from "react-helmet-async";

const CompanyInfo = () => {
  return (
    <main className="container py-12 max-w-5xl bg-white space-y-6">
      <Helmet>
        <html lang="en" />
        <title>About BULM Italy – Italian Kitchen Appliance Manufacturer</title>
        <meta
          name="description"
          content="Learn more about BULM Italy, an Italian brand founded in 1979, known for crafting high-quality, innovative kitchen appliances rooted in Italian design."
        />
        <meta
          name="keywords"
          content="BULM Italy, Italian appliances, kitchen design, about BULM, premium home appliances, company history"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bulm.it/company" />

        {/* Multilingual hreflang */}
        <link rel="alternate" href="https://bulm.it/company" hrefLang="en" />
        <link rel="alternate" href="https://bulm.it/it/company" hrefLang="it" />
        <link rel="alternate" href="https://bulm.it/company" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:title" content="About BULM Italy – Premium Kitchen Appliances Since 1979" />
        <meta
          property="og:description"
          content="Founded in Milan in 1979, BULM Italy is a leading manufacturer of elegant, high-performance kitchen appliances. Discover our story."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bulm.it/company" />
        <meta property="og:image" content="/logo/BULMlogo.svg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About BULM Italy – Premium Kitchen Appliances Since 1979" />
        <meta
          name="twitter:description"
          content="Discover the story of BULM Italy, a leader in Italian kitchen innovation and design."
        />
      </Helmet>

      <h1 className="text-3xl font-semibold">BULM Italy SRL</h1>
      <div className="font-medium space-y-4">
        <p>
          BULM Italy SpA is a distinguished Italian company specializing in the
          design and production of high-end home appliances. Founded in 1979 in
          Milan, the brand has become a symbol of craftsmanship, innovation, and
          timeless elegance.
        </p>
        <p>
          What began as a small manufacturing workshop driven by passion and
          precision, evolved into an international benchmark for quality. For over
          four decades, BULM has been redefining the modern cooking experience
          through cutting-edge technology, refined aesthetics, and unmatched
          performance.
        </p>
        <p>
          Every BULM product is born from a deep understanding of Italian design —
          attention to detail, excellence in materials, and a commitment to
          functionality. Today, the brand continues to create intelligent kitchen
          solutions that blend tradition with innovation.
        </p>
        <p>Official Email: info@bulm.it</p>
      </div>
    </main>
  );
};

export default CompanyInfo;
