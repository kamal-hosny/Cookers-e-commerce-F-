import { useTranslation } from "react-i18next";

const ReservedArea = () => {
  const { t } = useTranslation();

  return (
    <main className="py-10 bg-[#1d1d1b]">
      <div className="container">
        <div className="main-title">
          <p className="relative text-[#30505b] mb-10 text-[32px] font-bold after:content-[''] after:absolute after:left-0 after:-bottom-4 after:w-14 after:h-1 after:bg-[#30505b]">
            {t("reserved.title")}
          </p>

          <p className="text-white font-medium">
            {t("reserved.subtitle")}
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
          <form className="flex-1 bg-white py-20 px-12 flex flex-col gap-5 max-w-lg min-w-[350px]">
            <div className="user-name flex flex-col gap-1">
              <label htmlFor="username" className="text-md font-medium">
                {t("reserved.form.username")}
              </label>
              <input
                id="username"
                name="username"
                className="px-2 py-1.5 border border-black"
                type="text"
                autoComplete="username"
              />
            </div>
            <div className="password flex flex-col gap-1">
              <label htmlFor="password" className="text-md font-medium">
                {t("reserved.form.password")}
              </label>
              <input
                id="password"
                name="password"
                className="px-2 py-1.5 border border-black"
                type="password"
                autoComplete="current-password"
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <a href="#" className="underline text-[#1d1d1b] w-fit">
                {t("reserved.form.forgotPassword")}
              </a>
              <button
                type="submit"
                className="capitalize text-white py-2 px-4 bg-[#1d1d1b] transition-colors"
              >
                {t("reserved.form.login")}
              </button>
            </div>
          </form>
          <div className="flex-1 flex flex-col justify-center gap-3 items-start text-white max-w-md mt-10 md:mt-0">
            <p className="text-[#30505b] font-bold text-lg mb-2">
              {t("reserved.register.title")}
            </p>
            <p className="text-white text-base font-medium mb-2">
              {t("reserved.register.description")}{" "}
              <a href="#" className="underline">
                {t("reserved.register.link")}
              </a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReservedArea;
