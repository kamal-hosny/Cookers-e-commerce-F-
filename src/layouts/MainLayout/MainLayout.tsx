
import { Outlet } from "react-router-dom";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
import LeftPin from "../../components/LeftPin";
import RightPin from "../../components/RightPin";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="pt-[160px]">
      <Outlet />
      </main >
      <Footer />

      <LeftPin />
      <RightPin />
    </>
  );
};

export default MainLayout;
