import { useState, useRef, useEffect } from "react";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleProductBySku } from "../Hooks/useGetSingleProductBySku";
import { useTranslation } from "react-i18next";

// Define TypeScript interfaces
interface MetaData {
  id: number;
  key: string;
  value: string;
}

interface ProductImage {
  id: number;
  src: string;
  name: string;
  alt: string;
}

interface Product {
  id: number;
  name: string;
  sku: string;
  short_description: string;
  meta_data: MetaData[];
  images: ProductImage[];
}

const SingleProduct = () => {
  const { t, i18n } = useTranslation();
  const { sku } = useParams<{ sku: string }>();
  const navigate = useNavigate();

  const {
    data: products,
    isLoading,
    error,
  } = useGetSingleProductBySku(sku || "");

  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Get product based on current language
  const getCurrentProduct = (): Product | undefined => {
    if (!products || products.length === 0) return undefined;

    const lang = i18n.language;
    const targetLanguage = lang === "it" ? "italian" : "english";

    return (
      products.find((product: any) =>
        product.meta_data.some(
          (meta: any) =>
            meta.key === "Language" &&
            meta.value.toLowerCase() === targetLanguage
        )
      ) || products[0]
    );
  };

  const currentProduct = getCurrentProduct();

  // Helper to get meta data value
  const getMetaDataValue = (key: string): string => {
    if (!currentProduct) return "";
    const meta = currentProduct.meta_data.find((m) => m.key === key);
    return meta ? meta.value : "";
  };

  const toggleSection = (section: string) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setIsSticky(window.scrollY > headerRef.current.offsetHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define sections dynamically
  const sections = [
    {
      title: t("product.overallDimensions"),
      key: "overall_dimensions",
    },
    {
      title: t("product.cooktop"),
      key: "cooktop",
    },
    {
      title: t("product.controlZone"),
      key: "control_zone",
    },
    {
      title: t("product.door"),
      key: "door",
    },
    {
      title: t("product.oven"),
      key: "oven",
    },
    {
      title: t("product.cavity"),
      key: "cavity",
    },
    {
      title: t("product.other"),
      key: "other",
    },
    {
      title: t("product.electricConnection"),
      key: "electric_connection",
    },
    {
      title: t("product.gasConnection"),
      key: "gas_connection",
    },
    {
      title: t("product.accessories"),
      key: "accessories",
    },
  ];

  if (isLoading) return <div>{t("common.loading")}</div>;
  if (error)
    return (
      <div>
        {t("common.error")}: {error.message}
      </div>
    );
  if (!currentProduct) return <div>{t("product.notFound")}</div>;

  return (
    <main className="font-sans bg-[#e2eaeb] min-h-screen py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <Breadcrumbs
            linkColor={"#000000"}
            activeColor={"#000000"}
            separatorColor={"#000000"}
          />
          <button
            onClick={() => navigate(-1)}
            className="text-xl font-bold cursor-pointer"
          >
            {t("common.back")}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`max-w-6xl mx-auto px-4 ${isSticky ? "pt-20" : "pt-6"}`}>
        {/* Product Header */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-[#d0d8da]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
              <p className="text-xl font-semibold text-[#30505b] mb-3">
                {getMetaDataValue("collection") || t("product.classic")}
              </p>
              <h1 className="text-2xl md:text-3xl font-bold text-[#30505b] mb-3">
                {currentProduct.name}
              </h1>
              
              {/* Short Description */}
              {currentProduct.short_description && (
                <div 
                  className="prose prose-sm text-[#30505b] mb-4"
                  dangerouslySetInnerHTML={{ __html: currentProduct.short_description }} 
                />
              )}
              
              <div className="inline-flex items-center bg-[#30505b] text-white text-sm px-3 py-1 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {currentProduct.sku}
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="bg-[#f5f9fa] px-3 py-2 rounded-lg border border-[#d0d8da]">
                  <div className="text-xs text-[#30505b] opacity-80">
                    {t("product.model")}
                  </div>
                  <div className="font-medium text-[#30505b]">
                    {currentProduct.sku}
                  </div>
                </div>
                <div className="bg-[#f5f9fa] px-3 py-2 rounded-lg border border-[#d0d8da]">
                  <div className="text-xs text-[#30505b] opacity-80">
                    {t("product.dimensions")}
                  </div>
                  <div className="font-medium text-[#30505b]">
                    {getMetaDataValue("overall_dimensions")}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-[#d0d8da]">
              {currentProduct.images.length > 0 ? (
                <img
                  src={currentProduct.images[0].src}
                  alt={currentProduct.images[0].alt || currentProduct.name}
                  className="w-80 h-auto object-contain"
                />
              ) : (
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-80 h-80 flex items-center justify-center">
                  {t("product.noImage")}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Aesthetics Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8 border border-[#d0d8da]">
          <div className="bg-[#30505b] px-6 py-4">
            <h2 className="text-lg font-bold text-white">
              {t("product.aesthetics")}
            </h2>
          </div>
          <div className="px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col p-4 border border-[#e2eaeb] bg-[#f5f9fa] rounded-lg">
                <span className="text-sm text-[#30505b] opacity-80 mb-1">
                  {t("product.line")}
                </span>
                <span className="font-medium text-[#30505b]">
                  {getMetaDataValue("collection")}
                </span>
              </div>
              <div className="flex flex-col p-4 border border-[#e2eaeb] bg-[#f5f9fa] rounded-lg">
                <span className="text-sm text-[#30505b] opacity-80 mb-1">
                  {t("product.color")}
                </span>
                <span className="font-medium text-[#30505b]">
                  {getMetaDataValue("color")}
                </span>
              </div>

              {getMetaDataValue("installation_mode") !== "-- Choose --:" && (
                <div className="flex flex-col p-4 border border-[#e2eaeb] bg-[#f5f9fa] rounded-lg">
                  <span className="text-sm text-[#30505b] opacity-80 mb-1">
                    {t("product.installationMode")}
                  </span>
                  <span className="font-medium text-[#30505b]">
                    {getMetaDataValue("installation_mode")}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#d0d8da]">
          <div className="bg-[#30505b] px-6 py-4">
            <h2 className="text-lg font-bold text-white">
              {t("product.technicalSpecifications")}
            </h2>
          </div>

          <div className="divide-y divide-[#e2eaeb]">
            {sections.map(({ title, key }) => {
              const value = getMetaDataValue(key);
              if (!value) return null;

              return (
                <div
                  key={key}
                  className="transition-colors hover:bg-[#f5f9fa] cursor-pointer"
                  onClick={() => toggleSection(key)}
                >
                  <div className="flex justify-between items-center px-6 py-4">
                    <h3 className="font-medium text-[#30505b]">{title}</h3>
                    <div className="transform transition-transform duration-300">
                      {activeSection === key ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-[#30505b]"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-[#30505b]"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  {activeSection === key && (
                    <div className="px-6 pb-4 pt-1 bg-[#f5f9fa] animate-fadeIn">
                      <div className="space-y-2">
                        {value.split(" – ").map((item, index) => {
                          const [keyPart, ...valueParts] = item.split(":");
                          const valuePart = valueParts.join(":").trim();

                          return (
                            <div
                              key={index}
                              className="flex justify-between py-1"
                            >
                              <span className="text-gray-600">
                                {keyPart.trim()}
                              </span>
                              <span className="font-medium text-right max-w-[200px]">
                                {valuePart || item}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
