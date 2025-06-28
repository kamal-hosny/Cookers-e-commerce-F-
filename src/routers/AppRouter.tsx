import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Lazy load components

import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home";
import AboutBulm from "../pages/AboutBulm";
import SingleProduct from "../pages/SingleProduct";
const ProductCategory = lazy(() => import("../pages/ProductCategory"));
const Collections = lazy(() => import("../pages/collections/Collections"));
const CollectionsCookers = lazy(() => import("../pages/collections/collections-cookers/CollectionsCookers"));
const Classic = lazy(() => import("../pages/collections/collections-cookers/children/Classic"));
const Excellence = lazy(() => import("../pages/collections/collections-cookers/children/Excellence"));
const Fusion = lazy(() => import("../pages/collections/collections-cookers/children/Fusion"));
const Vintage = lazy(() => import("../pages/collections/collections-cookers/children/Vintage"));
const CollectionsHobs = lazy(() => import("../pages/collections/collections-hobs/CollectionsHobs"));
const CountryHobs = lazy(() => import("../pages/collections/collections-hobs/children/CountryHobs"));
const ElioHobs = lazy(() => import("../pages/collections/collections-hobs/children/ElioHobs"));
const BlackLineCollection = lazy(() => import("../pages/collections/black-line-collection/BlackLineCollection"));
const CollectionsOvens = lazy(() => import("../pages/collections/collections-ovens/CollectionsOvens"));
const AlterumOvens = lazy(() => import("../pages/collections/collections-ovens/children/AlterumOvens"));
const CountryOvens = lazy(() => import("../pages/collections/collections-ovens/children/CountryOvens"));
const ElioGiantOvens = lazy(() => import("../pages/collections/collections-ovens/children/ElioGiantOvens"));
const ElioOvens = lazy(() => import("../pages/collections/collections-ovens/children/ElioOvens"));
const ProfessionalOvens = lazy(() => import("../pages/collections/collections-ovens/children/ProfessionalOvens"));

const Catalogues = lazy(() => import("../pages/Catalogues"));
const CompanyInfo = lazy(() => import("../pages/CompanyInfo"));
const Contacts = lazy(() => import("../pages/Contacts"));
const Dealers = lazy(() => import("../pages/Dealers"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const ReasonsToChooseFreestandigCooker = lazy(() => import("../pages/ReasonsToChooseFreestandigCooker"));
const ReservedArea = lazy(() => import("../pages/ReservedArea"));
const Login = lazy(() => import("../pages/collections/ita/Login"));

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
          path: "product-category",
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
          path: "/product-category?cookers",
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
        {
          path: "/about-bulm",
          element: <AboutBulm />,
        },
        {
          path: "/product",
          element: <SingleProduct />,
        },
      ],
    },
    {
      path: "/ita/login",
      element: <Login />,
    },
  ]);

  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;