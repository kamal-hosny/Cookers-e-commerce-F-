import { Suspense, lazy, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout/MainLayout";
import AboutBulm from "../pages/AboutBulm";
import Home from "../pages/Home";
import SingleProduct from "../pages/SingleProduct";
import i18n from "../language";

// Lazy Imports
const ProductCategory = lazy(() => import("../pages/ProductCategories/ProductCategory"));
const CompanyInfo = lazy(() => import("../pages/CompanyInfo"));
const Collections = lazy(() => import("../pages/collections/Collections"));
const CollectionsCookers = lazy(() => import("../pages/collections/collections-cookers/CollectionsCookers"));
const Elegant = lazy(() => import("../pages/collections/collections-cookers/children/Elegant"));
const Perfection = lazy(() => import("../pages/collections/collections-cookers/children/Perfection"));
const Mixture = lazy(() => import("../pages/collections/collections-cookers/children/Mixture"));
const Antique = lazy(() => import("../pages/collections/collections-cookers/children/Antique"));
const CollectionsHobs = lazy(() => import("../pages/collections/collections-hobs/CollectionsHobs"));
const LandHobs = lazy(() => import("../pages/collections/collections-hobs/children/LandHobs"));
const EnzoHobs = lazy(() => import("../pages/collections/collections-hobs/children/EnzoHobs"));
const BlackLineCollection = lazy(() => import("../pages/collections/black-line-collection/BlackLineCollection"));
const CollectionsOvens = lazy(() => import("../pages/collections/collections-ovens/CollectionsOvens"));
const AlterumOvens = lazy(() => import("../pages/collections/collections-ovens/children/AlterumOvens"));
const LandOvens = lazy(() => import("../pages/collections/collections-ovens/children/LandOvens"));
const EnzoTitanOvens = lazy(() => import("../pages/collections/collections-ovens/children/EnzoTitanOvens"));
const EnzoOvens = lazy(() => import("../pages/collections/collections-ovens/children/EnzoOvens"));
const ExpertOvens = lazy(() => import("../pages/collections/collections-ovens/children/ExpertOvens"));

const Contacts = lazy(() => import("../pages/Contacts"));
const Dealers = lazy(() => import("../pages/Dealers"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const ReasonsToChooseFreestandigCooker = lazy(() => import("../pages/ReasonsToChooseFreestandigCooker"));
const ReservedArea = lazy(() => import("../pages/ReservedArea"));
const Login = lazy(() => import("../pages/collections/ita/Login"));


const AppRouter = () => {

  // Handle language changes
  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLang);
    document.documentElement.lang = savedLang;
    document.documentElement.dir = i18n.dir(savedLang);

    const handleLanguageChange = (lng: string) => {
      localStorage.setItem("language", lng);
      document.documentElement.lang = lng;
      document.documentElement.dir = i18n.dir(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);


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
        { path: "collections/collections-cookers", element: <CollectionsCookers /> },
        { path: "collections/collections-cookers/elegant", element: <Elegant /> },
        { path: "collections/collections-cookers/perfection", element: <Perfection /> },
        { path: "collections/collections-cookers/mixture", element: <Mixture /> },
        { path: "collections/collections-cookers/antique", element: <Antique /> },
        //-- collections-hobs
        { path: "collections/collections-hobs", element: <CollectionsHobs /> },
        { path: "collections/collections-hobs/land-hobs", element: <LandHobs /> },
        { path: "collections/collections-hobs/enzo-hobs", element: <EnzoHobs /> },
        //-- collections-ovens
        { path: "collections/collections-ovens", element: <CollectionsOvens /> },
        { path: "collections/collections-ovens/alterum-ovens", element: <AlterumOvens /> },
        { path: "collections/collections-ovens/land-ovens", element: <LandOvens /> },
        { path: "collections/collections-ovens/enzo-titan-ovens", element: <EnzoTitanOvens /> },
        { path: "collections/collections-ovens/enzo-ovens", element: <EnzoOvens /> },
        { path: "collections/collections-ovens/expert-ovens", element: <ExpertOvens /> },
        // other routes
        { path: "/contacts", element: <Contacts /> },
        { path: "/dealers", element: <Dealers /> },
        { path: "/privacy-policy", element: <PrivacyPolicy /> },
        { path: "/product-category/:categoryName", element: <ProductCategory /> },
        { path: "/reasons-to-choose-freestandig-cooker", element: <ReasonsToChooseFreestandigCooker /> },
        { path: "/reserved-area", element: <ReservedArea /> },
        { path: "/company-info", element: <CompanyInfo /> },
        { path: "/about-bulm", element: <AboutBulm /> },
        { path: "/product", element: <SingleProduct /> },
        { path: "/product/:sku", element: <SingleProduct /> },
      ],
    },
    {
      path: "/ita/login",
      element: <Login />,
    },
  ]);

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
