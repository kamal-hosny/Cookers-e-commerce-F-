import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, privacy: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacy) {
      alert(t("contact.form.privacyError"));
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mwpqvndp", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          surname: formData.surname,
          company: formData.company,
          role: formData.role,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert(t("contact.form.successMessage"));
        setFormData({
          name: "",
          surname: "",
          company: "",
          role: "",
          email: "",
          phone: "",
          message: "",
          privacy: false,
        });
      } else {
        alert(result.error || t("contact.form.errorMessage"));
      }
    } catch (error) {
      alert(t("contact.form.errorMessage"));
    }
  };

  return (
    <main className="pt-10">
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("contact.meta.title")}</title>
        <meta name="description" content={t("contact.meta.description")} />
        <meta name="keywords" content={t("contact.meta.keywords")} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bulm.it/contact" />
        <link rel="alternate" href="https://bulm.it/contact" hrefLang="en" />
        <link rel="alternate" href="https://bulm.it/it/contact" hrefLang="it" />
        <link
          rel="alternate"
          href="https://bulm.it/contact"
          hrefLang="x-default"
        />
        <meta property="og:title" content={t("contact.meta.ogTitle")} />
        <meta
          property="og:description"
          content={t("contact.meta.ogDescription")}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bulm.it/contact" />
        <meta property="og:image" content="/logo/BULMlogo.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={t("contact.meta.twitterTitle")} />
        <meta
          name="twitter:description"
          content={t("contact.meta.twitterDescription")}
        />
      </Helmet>

      <div>
        <div className="pb-10 container section-title flex justify-between items-start">
          <div>
            <p className="mb-10">
              <strong>{t("contact.company.title")}</strong>
            </p>
            <p className="mb-10">{t("contact.company.email")}</p>
          </div>
        </div>

        <div className="section-contact bg-[#30505b] text-white py-10">
          <div className="container flex justify-between items-center">
            <form className="flex-1 space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder={t("contact.form.name")}
                  className="border-white placeholder:text-white text-white border p-3 outline-none"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="surname"
                  placeholder={t("contact.form.surname")}
                  className="border-white placeholder:text-white text-white border p-3 outline-none"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder={t("contact.form.company")}
                  className="border-white placeholder:text-white text-white border p-3 outline-none"
                  value={formData.company}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="role"
                  placeholder={t("contact.form.role")}
                  className="border-white placeholder:text-white text-white border p-3 outline-none"
                  value={formData.role}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("contact.form.email")}
                  className="border-white placeholder:text-white text-white border p-3 outline-none"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t("contact.form.phone")}
                  className="border-white placeholder:text-white text-white border p-3 outline-none"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <textarea
                name="message"
                placeholder={t("contact.form.message")}
                className="border-white placeholder:text-white text-white border p-3 outline-none w-full min-h-28"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <div className="flex justify-between items-center">
                <span className="flex items-center gap-3">
                  <StyledWrapper>
                    <label className="custom-checkbox-container">
                      <input
                        type="checkbox"
                        className="custom-checkbox-input"
                        id="privacy-checkbox"
                        checked={formData.privacy}
                        onChange={handleCheckboxChange}
                        required
                      />
                      <svg viewBox="0 0 64 64" height="2em" width="2em">
                        <path
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                          pathLength="575.0541381835938"
                          className="custom-checkbox-path"
                        />
                      </svg>
                    </label>
                  </StyledWrapper>
                  <label htmlFor="privacy-checkbox" className="ms-2">
                    {t("contact.form.privacyLabel")}{" "}
                    <Link
                      rel="prefetch"
                      to="/privacy-policy"
                      className="underline"
                    >
                      {t("contact.form.privacyLink")}
                    </Link>
                  </label>
                </span>
                <button
                  type="submit"
                  className="bg-[#30505b] hover:bg-white border-white hover:border-[#30505b] hover:text-[#30505b] transition-colors border px-8 py-2"
                >
                  {t("contact.form.submit")}
                </button>
              </div>
            </form>
            <span className="flex-1 max-md:hidden"></span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contacts;

const StyledWrapper = styled.div`
  .custom-checkbox-container {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
  }

  .custom-checkbox-input {
    display: none;
  }

  .custom-checkbox-container svg {
    overflow: visible;
    width: 24px;
    height: 24px;
  }

  .custom-checkbox-path {
    fill: none;
    stroke: white;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;
    stroke-dasharray: 241 9999999;
    stroke-dashoffset: 0;
  }

  .custom-checkbox-input:checked ~ svg .custom-checkbox-path {
    stroke-dasharray: 70.5096664428711 9999999;
    stroke-dashoffset: -262.2723388671875;
  }
`;
