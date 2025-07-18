import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import React from "react";
import { useTranslation } from "react-i18next";

const socials = [
  {
    icon: <FaLinkedinIn />,
  },
  {
    icon: <AiOutlineYoutube />,
  },
  {
    icon: <FiInstagram />,
  },
  {
    icon: <FaFacebookF />,
  },
];

const LeftPin = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed start-1 md:start-6 bottom-6 flex z-[22] flex-col-reverse gap-4 justify-center items-center">
      <p className="uppercase [writing-mode:vertical-rl] rotate-180 tracking-widest text-sm font-medium">
        {t("leftPin.followUs")}
      </p>

      {socials.map((social, index) =>
        React.cloneElement(social.icon, {
          className: "cursor-pointer",
          key: index,
        })
      )}
    </div>
  );
};

export default LeftPin;
