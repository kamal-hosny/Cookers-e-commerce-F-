import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home";
import ProductCategory from "../pages/ProductCategory";
import Collections from "../pages/collections/Collections";
import CollectionsCookers from "../pages/collections/collections-cookers/CollectionsCookers";
import Classic from "../pages/collections/collections-cookers/children/Classic";
import Excellence from "../pages/collections/collections-cookers/children/Excellence";
import Fusion from "../pages/collections/collections-cookers/children/Fusion";
import Vintage from "../pages/collections/collections-cookers/children/Vintage";
import CollectionsHobs from "../pages/collections/collections-hobs/CollectionsHobs";
import CountryHobs from "../pages/collections/collections-hobs/children/CountryHobs";
import ElioHobs from "../pages/collections/collections-hobs/children/ElioHobs";
import BlackLineCollection from "../pages/collections/black-line-collection/BlackLineCollection";
import CollectionsOvens from "../pages/collections/collections-ovens/CollectionsOvens";
import AlterumOvens from "../pages/collections/collections-ovens/children/AlterumOvens";
import CountryOvens from "../pages/collections/collections-ovens/children/CountryOvens";
import ElioGiantOvens from "../pages/collections/collections-ovens/children/ElioGiantOvens";
import ElioOvens from "../pages/collections/collections-ovens/children/ElioOvens";
import ProfessionalOvens from "../pages/collections/collections-ovens/children/ProfessionalOvens";
import About from "../pages/About";
import Catalogues from "../pages/Catalogues";
import CompanyInfo from "../pages/CompanyInfo";
import Contacts from "../pages/Contacts";
import Dealers from "../pages/Dealers";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ReasonsToChooseFreestandigCooker from "../pages/ReasonsToChooseFreestandigCooker";
import ReservedArea from "../pages/ReservedArea";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: "error",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "product-category/:id",
          element: <ProductCategory />,
        },
        // collections
        {
          path: "collections",
          element: <Collections />,
        },
        // black-line-collection
        {
          path: "collections/black-line-collection",
          element: <BlackLineCollection />,
        },
        //-- collections-cookers
        {
          path: "collections/collections-cookers",
          element: <CollectionsCookers />,
        },
        {
          path: "collections/collections-cookers/classic",
          element: <Classic />,
        },
        {
          path: "collections/collections-cookers/excellence",
          element: <Excellence />,
        },
        {
          path: "collections/collections-cookers/fusion",
          element: <Fusion />,
        },
        {
          path: "collections/collections-cookers/vintage",
          element: <Vintage />,
        },
        //-- collections-hobs
        {
          path: "collections/collections-hobs",
          element: <CollectionsHobs />,
        },
        {
          path: "collections/collections-hobs/country-hobs",
          element: <CountryHobs />,
        },
        {
          path: "collections/collections-hobs/elio-hobs",
          element: <ElioHobs />,
        },
        //-- collections-ovens
        {
          path: "collections/collections-ovens",
          element: <CollectionsOvens />,
        },
        {
          path: "collections/collections-ovens/alterum-ovens",
          element: <AlterumOvens />,
        },
        {
          path: "collections/collections-ovens/country-ovens",
          element: <CountryOvens />,
        },
        {
          path: "collections/collections-ovens/elio-giant-ovens",
          element: <ElioGiantOvens />,
        },
        {
          path: "collections/collections-ovens/elio-ovens",
          element: <ElioOvens />,
        },
        {
          path: "collections/collections-ovens/professional-ovens",
          element: <ProfessionalOvens />,
        },
        // other routes
        {
          path: "/about",
          element: <About />,
        },

        {
          path: "/catalogues",
          element: <Catalogues />,
        },

        {
          path: "/company-info",
          element: <CompanyInfo />,
        },

        {
          path: "/contacts",
          element: <Contacts />,
        },

        {
          path: "/dealers",
          element: <Dealers />,
        },

        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/product-category",
          element: <ProductCategory />,
        },
        {
          path: "/reasons-to-choose-freestandig-cooker",
          element: <ReasonsToChooseFreestandigCooker />,
        },
        {
          path: "/reserved-area",
          element: <ReservedArea />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
