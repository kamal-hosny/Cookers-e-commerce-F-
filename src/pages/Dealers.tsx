import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const Dealers = () => {
  const { t } = useTranslation();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      alert("Please agree to the privacy policy.");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <main>
      <Helmet>
        <title>Dealers | BULM</title>
      </Helmet>
      <div className="container py-1">
        <div className="Dealers-contact p-4 flex gap-4 justify-between items-start max-md:flex-col">
          <div className="flex-1 flex justify-between w-full">
            <div className="image h-100 flex-1 max-md:hidden">
              <img
                src="https://cms.bulm.it/wp-content/uploads/2025/07/newsletter-primavera.webp"
                alt="dealers"
                className="h-full object-cover"
              />
            </div>
            <div className="bg-[#30505b] text-white p-4 flex-1 h-100 flex flex-col justify-between">
              <div className="text-xs gap-2 flex justify-center items-start flex-col space-y-4">
                <p>{t("dealers.intro")}</p>
                <div className="contact flex flex-col gap-2 self-start mt-12">
                  <a href="mailto:info@bulm.it">info@bulm.it</a>
                  <a
                    href="http://www.bulm.it"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.bulm.it
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="section-contact flex-1 py-10">
            <div className="w-full">
              <form className="space-y-4 w-full" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder={t("dealers.name")}
                    className="placeholder:text-[#1d1d1b] border p-3 outline-none"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="surname"
                    placeholder={t("dealers.surname")}
                    className="border placeholder:text-[#1d1d1b] p-3 outline-none"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder={t("dealers.company")}
                    className="border placeholder:text-[#1d1d1b] p-3 outline-none"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="role"
                    placeholder={t("dealers.role")}
                    className="border placeholder:text-[#1d1d1b] p-3 outline-none"
                    value={formData.role}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={t("dealers.email")}
                    className="border placeholder:text-[#1d1d1b] p-3 outline-none"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t("dealers.phone")}
                    className="border placeholder:text-[#1d1d1b] p-3 outline-none"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <textarea
                  name="message"
                  placeholder={t("dealers.message")}
                  className="border p-3 placeholder:text-[#1d1d1b] outline-none w-full min-h-28"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-3">
                    <StyledWrapper>
                      <label className="custom-checkbox-container-dealers">
                        <input
                          type="checkbox"
                          className="custom-checkbox-input-dealers"
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
                    <label htmlFor="privacy-checkbox" className="ms-2 text-xs">
                      {t("dealers.privacy")}{" "}
                      <Link rel="prefetch" to="/privacy-policy" className="underline">
                        {t("dealers.privacyLink")}
                      </Link>
                    </label>
                  </span>
                  <button
                    type="submit"
                    className="hover:bg-[#1d1d1b] text-sm border-[#1d1d1b] border-b-2 hover:text-white transition-colors px-8 py-2 cursor-pointer"
                  >
                    {t("dealers.submit")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dealers;

const StyledWrapper = styled.div`
  .custom-checkbox-container-dealers {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    position: relative;
  }

  .custom-checkbox-input-dealers {
    display: none;
  }

  .custom-checkbox-container-dealers svg {
    overflow: visible;
    width: 24px;
    height: 24px;
  }

  .custom-checkbox-path {
    fill: none;
    stroke: black;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;
    stroke-dasharray: 241 9999999;
    stroke-dashoffset: 0;
  }

  .custom-checkbox-input-dealers:checked + svg .custom-checkbox-path {
    stroke-dasharray: 70.5096664428711 9999999;
    stroke-dashoffset: -262.2723388671875;
  }
`;
