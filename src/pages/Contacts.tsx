import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Contacts = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    // Add API call or further form handling here
  };
  
  return (
    <main className="pt-10">
      <div>
        <div className="pb-10 container section-title flex justify-between items-start">
          <div>
            <p className="mb-10">
              <strong>Elba Italy S.p.A</strong>
            </p>
            <p className="mb-10">
              Via Fabbian Matteo, 7
              <br /> 31030 Borso del Grappa (TV) – Italy
            </p>
            <p>
              T. +39 0423 9121
              <br />
              F. +39 0423 912440
              <br />
              info@elba-cookers.it
            </p>
          </div>

          <div className="w-full relative md:w-1/2 p-3 max-md:hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.687583305424!2d11.758377315576224!3d45.81870497910672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4778f3b7c9b7e7b7%3A0x8c6b7e7c9b7e7b7!2sVia%20Fabbian%20Matteo%2C%207%2C%2031030%20Borso%20del%20Grappa%20TV%2C%20Italy!5e0!3m2!1sen!2sit!4v1750354296114!5m2!1sen!2sit"
              width="100%"
              height="300"
              className="w-11/12 h-[660px] absolute -top-6 right-0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elba Italy S.p.A Location"
            ></iframe>
          </div>
        </div>
        <div className="section-contact bg-[#30505b] text-white py-10">
          <div className="container flex justify-between items-center">
            <form className="flex-1 space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="border-white placeholder:text-white text-white border p-3 outline-none"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  className="border-white placeholder:text-white text-white border p-3 outline-none"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  className="border-white placeholder:text-white text-white border p-3 outline-none"
                  value={formData.company}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Role"
                  className="border-white placeholder:text-white text-white border p-3 outline-none"
                  value={formData.role}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border-white placeholder:text-white text-white border p-3 outline-none"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="border-white placeholder:text-white text-white border p-3 outline-none"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
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
                    We treat your personal data with care; view our{" "}
                    <Link to="/privacy-policy" className="underline">Privacy Policy</Link>{" "}
                  </label>
                </span>
                <button
                  type="submit"
                  className="bg-[#30505b] hover:bg-white border-white hover:border-[#30505b] hover:text-[#30505b] transition-colors border px-8 py-2"
                >
                  Submit
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