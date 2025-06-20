import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Dealers = () => {
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
    <div>
      <div className="container py-1">
        <div className=" p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.687583305424!2d11.758377315576224!3d45.81870497910672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4778f3b7c9b7e7b7%3A0x8c6b7e7c9b7e7b7!2sVia%20Fabbian%20Matteo%2C%207%2C%2031030%20Borso%20del%20Grappa%20TV%2C%20Italy!5e0!3m2!1sen!2sit!4v1750354296114!5m2!1sen!2sit"
            width="100%"
            height="500px"
            className="w"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Elba Italy S.p.A Location"
          ></iframe>
          <div className="bg-[#1d1d1b] text-white p-4 flex justify-between items-center ">
            <p className="text-lg font-bold">Where do you want to search?</p>

            <div className="relative">
              <input
                type="text"
                className="border-white border p-2 pe-20 text-white placeholder:text-md placeholder:text-white "
                placeholder="Search the dealar"
              />
              <CiSearch
                size={25}
                cursor={"pointer"}
                className="absolute end-3 bottom-1/2  translate-y-1/2"
              />
            </div>
          </div>
        </div>
        <div className="Dealers-contact p-4 flex gap-4  justify-between items-start  max-md:flex-col">
          <div className="flex-1 flex justify-between   w-full  ">
            <div className="image h-100 flex-1 max-md:hidden">
              <img
                src="https://www.elba-cookers.com/wp-content/uploads/2022/01/paesaggio-1280x625.jpg.webp"
                alt="fsdf"
                className="h-full object-cover"
              />
            </div>
            <div className="bg-[#30505b] text-white p-4 flex-1 h-100 flex column space-between">
              <div className="text-xs gap-2 flex justify-center items-start flex-col space-y-4">
                <p>
                  Via Fabbian Matteo, 7
                  <br />
                  31030 Borso del Grappa (TV) - Italy
                </p>
                <p>
                  T.
                  <a className="underline m-1" href="tel:+3904239121 ">+39 0423 9121</a>{" "}
                  <br />
                  F.
                  <a className="underline m-1" href="tel:+3904239121">+39 0423 9121</a>
                  <div className="contact flex flex-col gap-2 self-end mt-32">
                    <a href="mailto:mailto:support@elba-coockers.com">
                      support@elba-coockers.com
                    </a>
                    <a href="https://www.elba-coockers.com" target="_blank">
                      www.elba-coockers.com
                    </a>
                  </div>
                </p>
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
                    placeholder="Name"
                    className="placeholder:text-[#1d1d1b] border p-3 outline-none"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    className="border placeholder:text-[#1d1d1b] p-3 outline-none"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    className="border placeholder:text-[#1d1d1b] p-3 outline-none"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    className="border placeholder:text-[#1d1d1b] p-3 outline-none"
                    value={formData.role}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border placeholder:text-[#1d1d1b] p-3 outline-none"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="border placeholder:text-[#1d1d1b] p-3 outline-none"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
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
                      We treat your personal data with care; view our{" "}
                      <Link to="/privacy-policy" className="underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </span>
                  <button
                    type="submit"
                    className="hover:bg-[#1d1d1b] text-sm border-[#1d1d1b] border-b-2 hover:text-white transition-colors px-8 py-2 cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
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
`