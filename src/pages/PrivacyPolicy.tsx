import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <main className="container px-8 md:px-4 py-12 max-w-5xl bg-white">
      <Helmet>
        <html lang="en" />
        <title>Privacy Policy – BULM Italy</title>
        <meta
          name="description"
          content="Read BULM Italy's privacy policy to understand how we collect, use, and protect your personal data in accordance with European privacy laws (GDPR)."
        />
        <meta
          name="keywords"
          content="Privacy Policy, GDPR, Data Protection, Personal Data, BULM Italy, Italian kitchen appliances"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bulm.it/privacy-policy" />

        {/* hreflang for multilingual SEO */}
        <link
          rel="alternate"
          href="https://bulm.it/privacy-policy"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://bulm.it/it/privacy-policy"
          hrefLang="it"
        />
        <link
          rel="alternate"
          href="https://bulm.it/privacy-policy"
          hrefLang="x-default"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Privacy Policy – BULM Italy" />
        <meta
          property="og:description"
          content="Find out how BULM Italy handles your personal data in accordance with European privacy regulations."
        />
        <meta property="og:url" content="https://bulm.it/privacy-policy" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/logo/BULMlogo.svg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy – BULM Italy" />
        <meta
          name="twitter:description"
          content="BULM Italy is committed to protecting your privacy and personal data. Learn about your rights under GDPR."
        />
      </Helmet>
      <div className="font-sans">
        <section className="mb-8">
          <h2 className=" uppercase font-semibold mb-4">
            Information on the Processing of Personal Data
          </h2>
          <p className="text-base leading-relaxed">
            BULM Italian Cuisine, as the owner of the processing of your
            personal data (hereinafter "Owner"), releases this information in
            compliance with the European and Italian legislation on the
            protection of personal data, in order to let you know the purposes
            and the methods of processing personal data that you may communicate
            while browsing this website (hereinafter the "Site").
            <br />
            It should be noted that this information refers only to the Site and
            not to third party websites, which may be reached by the User
            through links contained therein.
          </p>
        </section>

        <section className="mb-8">
          <h2 className=" font-semibold uppercase ">
            Categories of Data Processed
          </h2>

          <h3 className="text-base">Navigation data</h3>
          <p className="text-base leading-relaxed">
            The computer systems and software procedures used to operate this
            website acquire, during their normal operation, some personal data
            whose transmission is implicit in the use of Internet communication
            protocols. This is information that is not collected to be
            associated with identified interested parties, but which by their
            very nature could, through processing and association with data held
            by third parties, allow users to be identified. This category of
            data includes, for example, the IP addresses or domain names of the
            computers used by users who connect to the site, the URI (Uniform
            Resource Identifier) addresses of the requested resources, the time
            of the request, the method used in submitting the request to the
            server, the size of the file obtained in response, the numerical
            code indicating the status of the response given by the server
            (successful, error, etc.) and other parameters relating to the
            operating system and the IT environment of the user. These data are
            used only to obtain anonymous statistical information on the use of
            the site and to check its correct functioning and are deleted
            immediately after processing.
          </p>

          <h3 className=" font-medium mb-3 mt-6">
            Data Provided Voluntarily by the User
          </h3>
          <p className="text-base leading-relaxed">
            Sending e-mails to the addresses indicated on the Site - optional,
            explicit and voluntary - entails the subsequent acquisition of your
            e-mail address, necessary to respond to requests, as well as any
            additional personal data that may be communicated. On the Site there
            are compilation forms, accompanied by specific information on the
            processing of personal data carried out and, where necessary, by
            requests for consent: we therefore invite you to read them before
            proceeding with the use of the form.
          </p>

          <h3 className=" font-medium  mt-6">Cookies</h3>
          <p className="text-base leading-relaxed">
            For any information regarding the use of cookies by the Site, access
            the appropriate information by clicking{" "}
            <a href="/cookie-policy" className=" hover:underline">
              here
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className=" font-semibold uppercase">
            Purpose and Legal Basis of the Processing, Nature of Data Conference
            and Consequences in Case of Refusal
          </h2>
          <p className="text-base leading-relaxed">
            The Data Controller will process your data to facilitate navigation
            and to provide any services requested by you through the forms
            specially prepared on the Site. Apart from what is specified for
            navigation data and technical cookies, within the sections of the
            Site prepared for particular services at your request you will be
            free to provide your personal data for the purposes indicated in the
            respective information, but failure to provide them may make it
            impossible to obtain the requested service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className=" font-semibold uppercase">Data Retention Period</h2>
          <p className="text-base leading-relaxed">
            The Data Controller will process the personal data collected through
            the use of the Site for the time strictly necessary to achieve the
            purposes for which they were collected and, after the latter, for
            any time established by the regulations in force.
            <br />
            For more details, please refer to any information notices prepared
            for particular services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className=" font-semibold uppercase">
            Scope of Data Communication and Categories of Recipients
          </h2>
          <p className="text-base leading-relaxed">
            The Data Controller will not disclose the data, but intends to
            communicate them to internal figures authorized to process them by
            reason of their respective duties, as well as to external subjects
            to whom it is necessary to communicate the data. These recipients,
            should they process data on behalf of the Data Controller, will be
            designated as data processors with a specific contract or other
            legal act.
            <br />
            For more details, please refer to the information sheets prepared
            for particular services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className=" font-semibold uppercase">
            Data Transfer to a Third Country and/or an International
            Organization
          </h2>
          <p className="text-base leading-relaxed">
            Your personal data will not be transferred to non-European third
            countries.
          </p>
        </section>

        <section className="mb-8">
          <h2 className=" font-semibold  uppercase">
            Rights of the Interested Parties
          </h2>
          <p className="text-base leading-relaxed">
            It is your right to ask the Data Controller to access your personal
            data and to rectify them if they are inaccurate, to delete them or
            limit their processing if the conditions are met, to oppose their
            processing for legitimate interests pursued by the Data Controller,
            as well as to obtain the portability of the data personally provided
            only if subject to automated processing based on consent or
            contract. You also have the right to revoke the consent given for
            the processing purposes that require it, without prejudice to the
            lawfulness of the processing carried out up to the time of
            revocation. To exercise your rights, you can use the form available{" "}
            <a href="/data-request-form" className=" hover:underline">
              here
            </a>{" "}
            and forward it to the following address:{" "}
            <a
              href="mailto:info@bulm-italian-cuisine.com"
              className=" hover:underline"
            >
              info@bulm-italian-cuisine.com
            </a>
            . Finally, we remind you that you also have the right to lodge a
            complaint with the relevant supervisory authority, the Guarantor for
            the protection of personal data (
            <a
              href="https://www.garanteprivacy.it/"
              className=" hover:underline"
            >
              www.garanteprivacy.it
            </a>
            ).
          </p>
        </section>

        <section className="mb-8">
          <p className="text-base  mb-4">
            Last updated: June {new Date().getFullYear()}.
          </p>
          <p className="text-base leading-relaxed">
            This information may be subject to changes: we therefore recommend
            that you check the date of the last revision.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
