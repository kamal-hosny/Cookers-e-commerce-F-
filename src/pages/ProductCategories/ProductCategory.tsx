import { useState, useEffect, useCallback, useMemo, memo } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaChevronDown,
  FaChevronRight,
  FaFilter,
  FaTimes,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import BoxesFooter from "../../components/common/BoxesFooter";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import { banners } from "./data";
import { useProductsByCategory } from "../../Hooks/useProductsByCategory";

interface Filter {
  title: string;
  options: string[];
}

// Define filters for each category
const categoryFilters: Record<string, Filter[]> = {
  cookers: [
    {
      title: "color",
      options: [
        "anthracite",
        "burgundy",
        "white",
        "cream",
        "black",
        "slate_gray",
        "stainless_steel",
      ],
    },
    {
      title: "width",
      options: ["60", "90", "100", "120"],
    },
    {
      title: "collection",
      options: ["antique", "elegant", "mixture", "perfection"],
    },
    {
      title: "cooktop_type",
      options: ["gas", "electric", "mixed"],
    },
    {
      title: "oven_type",
      options: ["electric", "gas"],
    },
  ],
  ovens: [
    {
      title: "color",
      options: [
        "anthracite",
        "avena",
        "mirror",
        "white",
        "black",
        "stainless_steel",
      ],
    },
    {
      title: "width",
      options: ["45", "60", "90"],
    },
    {
      title: "collection",
      options: [
        "expert",
        "enzo_titan",
        "land",
        "elementum",
        "nero",
        "enzo",
        "alterum",
      ],
    },
    {
      title: "oven_type",
      options: [
        "gas_with_fan",
        "gas",
        "electric",
        "electric_multifunction",
        "electric_static",
        "electric_fan",
      ],
    },
    {
      title: "special_function",
      options: [
        "rotisserie",
        "true_fan_cooking",
        "pizza_300°c",
        "leavening_40°c",
        "easy_steam",
        "idroclean",
        "booster",
        "leavening",
      ],
    },
  ],
  hobs: [
    {
      title: "color",
      options: ["anthracite", "avena", "white", "black", "stainless_steel"],
    },
    {
      title: "width",
      options: ["30", "60", "75", "80", "90"],
    },
    {
      title: "collection",
      options: ["land", "elementum", "domino", "enzo", "alterum"],
    },
    {
      title: "cooking_zone",
      options: [
        "electric_solid_plates",
        "mixed",
        "gas_burners",
        "induction",
        "ceramic",
      ],
    },
  ],
  hoods: [
    {
      title: "color",
      options: ["brown", "white", "nero", "stainless_steel"],
    },
    {
      title: "width",
      options: ["60", "90", "120"],
    },
    {
      title: "collection",
      options: ["enzo", "elegant", "nero"],
    },
    {
      title: "installation_mode",
      options: ["under_cabinet", "wall"],
    },
  ],
};

// Categories structure with name and path
const categories = [
  { name: "Cookers", path: "cookers" },
  { name: "Ovens", path: "ovens" },
  { name: "Hobs", path: "hobs" },
  { name: "Hoods", path: "hoods" },
  { name: "Compact Products", path: "compact-products" },
];

interface MetaDataItem {
  id: number;
  key: string | null;
  value: string | null;
}

interface ProductImage {
  id: number;
  src: string | null;
  name: string | null;
  alt: string | null;
}

interface Product {
  id: number | null;
  name: string;
  images: ProductImage[] | null;
  sku: string | null;
  meta_data: MetaDataItem[] | null;
}

interface RealProduct {
  id: number;
  name: string | null;
  images: string | null;
  sku: string | null;
  color: string | null;
  width: string | null;
  collection: string | null;
  cooktop_type: string | null;
  oven_type: string | null;
}

// Enhanced Product Card Component
const ProductCard = memo(({ product }: { product: RealProduct }) => (
  <Link rel="prefetch" to={`/product/${product.sku}`}>
    <div className="w-full max-w-[260px] h-full bg-white rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl border border-gray-100">
      <div className="relative h-[200px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

        <img
          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          src={product.images || "/placeholder-image.jpg"}
          alt={product.name || "Product image"}
          loading="lazy"
        />

        {product.collection && (
          <span className="bg-[#e8f2f0] text-[#30505b] absolute top-3 right-3 uppercase text-xs font-bold px-2 py-1 rounded whitespace-nowrap">
            {product.collection.replace(/_/g, " ")}
          </span>
        )}

        <div className="absolute bottom-0 left-0 w-full py-2 px-3 bg-gradient-to-t from-black/70 to-transparent z-10">
          <p className="text-white font-bold text-sm">{product.sku}</p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3
            className="font-semibold text-gray-800 text-sm line-clamp-2"
            title={product.name || ""} 
          >
            {product.name}
          </h3>
        </div>
      </div>
    </div>
  </Link>
));

// Custom Filter Option Component
const FilterOption = ({
  option,
  isSelected,
  onClick,
}: {
  option: string;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 cursor-pointer rounded-full text-sm font-medium transition-all duration-200 ${
      isSelected
        ? "bg-[#30505b] text-white shadow-md"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
  >
    {option.replace(/_/g, " ")}
  </button>
);

const ProductCategory = () => {
  const { categoryName } = useParams<{ categoryName?: string }>();
  const activeCategory = categoryName || "cookers";

  const [showFilters, setShowFilters] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>(
    {}
  );
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string | null>
  >({});
  const [activeFilters, setActiveFilters] = useState<
    { filter: string; option: string }[]
  >([]);

  // Get current category filters
  const currentFilters = useMemo(() => {
    return categoryFilters[activeCategory] || categoryFilters.cookers;
  }, [activeCategory]);

  // Helper function to format filter titles for display
  const formatFilterTitle = useCallback((title: string) => {
    return title.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  }, []);

  // Initialize selected filters
  useEffect(() => {
    const initialFilters: Record<string, string | null> = {};
    currentFilters.forEach((filter) => {
      initialFilters[filter.title] = null;
    });
    setSelectedFilters(initialFilters);
    setActiveFilters([]);
    setOpenAccordions({});
  }, [activeCategory, currentFilters]);

  const activeBanner = useMemo(
    () =>
      banners.find((banner) => banner.category === activeCategory) ||
      banners[0],
    [activeCategory]
  );

  const toggleAccordion = useCallback((title: string) => {
    setOpenAccordions((prev) => ({ ...prev, [title]: !prev[title] }));
  }, []);

  const { data, isLoading, error } = useProductsByCategory(activeCategory);

  // Get meta value helper
  const getMetaValue = useCallback(
    (metaData: MetaDataItem[], key: string): string | null => {
      if (!metaData) return null;
      const entry = metaData.find((item) => item.key === key);
      return entry ? entry.value : null;
    },
    []
  );

  // Transform products to RealProduct format
  const extractRealProduct = useCallback(
    (data: Product): RealProduct => ({
      id: data.id || 0,
      name: data.name,
      images: data.images?.[0]?.src || null,
      sku: data.sku,
      color: getMetaValue(data.meta_data || [], "color"),
      width: getMetaValue(data.meta_data || [], "width"),
      collection: getMetaValue(data.meta_data || [], "collection"),
      cooktop_type: getMetaValue(data.meta_data || [], "cooktop_type"),
      oven_type: getMetaValue(data.meta_data || [], "oven_type"),
    }),
    [getMetaValue]
  );

  // Memoized product transformation
  const realProducts = useMemo(() => {
    if (!data) return [];
    return data.map(extractRealProduct);
  }, [data, extractRealProduct]);

  // Update active filters when selectedFilters changes
  useEffect(() => {
    const newActiveFilters: { filter: string; option: string }[] = [];
    Object.entries(selectedFilters).forEach(([filterKey, option]) => {
      if (option) {
        newActiveFilters.push({
          filter: filterKey,
          option: option,
        });
      }
    });
    setActiveFilters(newActiveFilters);
  }, [selectedFilters]);

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    return realProducts.filter((product: RealProduct) => {
      return Object.entries(selectedFilters).every(
        ([filterKey, selectedValue]) => {
          if (!selectedValue) return true;

          switch (filterKey) {
            case "color":
              return product.color === selectedValue;
            case "width":
              return product.width === selectedValue;
            case "collection":
              return product.collection === selectedValue;
            case "cooktop_type":
              return product.cooktop_type === selectedValue;
            case "oven_type":
              return product.oven_type === selectedValue;
            // Add other filter cases as needed
            default:
              return true;
          }
        }
      );
    });
  }, [realProducts, selectedFilters]);

  const handleFilterChange = useCallback(
    (filterTitle: string, option: string) => {
      setSelectedFilters((prev) => {
        // Toggle selection: if already selected, unselect it
        if (prev[filterTitle] === option) {
          return { ...prev, [filterTitle]: null };
        }
        // Otherwise select the new option
        return { ...prev, [filterTitle]: option };
      });
    },
    []
  );

  const removeFilter = useCallback((filterTitle: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterTitle]: null,
    }));
  }, []);

  const resetFilters = useCallback(() => {
    const resetFilters: Record<string, string | null> = {};
    currentFilters.forEach((filter) => {
      resetFilters[filter.title] = null;
    });
    setSelectedFilters(resetFilters);
  }, [currentFilters]);

  // SEO meta data
  const seoTitle = `Premium ${activeBanner.title.replace(
    "Premium ",
    ""
  )} | Kitchen Appliances`;
  const seoDescription = `Discover our collection of high-quality ${activeBanner.title.replace(
    "Premium ",
    ""
  )}. ${activeBanner.description.substring(0, 150)}...`;

  if (isLoading)
    return (
      <div className="min-h-screen bg-[#eaeaea] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#30505b] mx-auto"></div>
          <p className="mt-4 text-[#30505b] font-medium">Loading products...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-[#eaeaea] flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
          <h2 className="text-xl font-bold text-red-600 mb-4">
            Error Loading Products
          </h2>
          <p className="text-gray-700 mb-6">
            Please try again later or contact support.
          </p>
          <button
            className="px-6 py-3 bg-[#30505b] text-white rounded-lg hover:bg-[#1d3a43] transition-colors flex items-center justify-center mx-auto"
            onClick={() => window.location.reload()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              />
            </svg>
            Reload Page
          </button>
        </div>
      </div>
    );

  return (
    <main className="bg-[#eaeaea] min-h-screen">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={activeBanner.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href={`https://yourdomain.com/product-category/${activeCategory}`}
        />
      </Helmet>

      <div className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#1d3a43] to-[#30505b] text-white">
        <div className="lg:w-1/2 flex max-md:flex-col justify-between items-center mb-10 lg:mb-0 py-16 px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 self-start leading-snug min-h-[3.5rem] sm:min-h-[4rem] lg:min-h-[5rem]">
            {activeBanner.title}
          </h1>

          <p className="text-sm lg:w-1/2 leading-relaxed opacity-90">
            {activeBanner.description}
          </p>
        </div>
        <div className="lg:w-1/3 flex justify-center">
          <div className="relative h-80 overflow-hidden">
            <img
              src={activeBanner.image}
              className="w-full h-full object-cover"
              alt={activeBanner.title}
            />
          </div>
        </div>
      </div>

      <div className="container py-12">
        <Breadcrumbs
          activeColor="#1d1d1b"
          linkColor="#1d1d1b"
          separatorColor="#1d1d1b"
        />

        {/* Active Filters Bar */}
        {activeFilters.length > 0 && (
          <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-gray-700">Active filters:</span>
              {activeFilters.map(({ filter, option }) => (
                <div
                  key={`${filter}-${option}`}
                  className="flex items-center bg-gray-100 rounded-full pl-3 pr-2 py-1"
                >
                  <span className="text-sm font-medium">
                    <span className="text-[#30505b] font-semibold">
                      {formatFilterTitle(filter)}:
                    </span>{" "}
                    {option.replace(/_/g, " ")}
                  </span>
                  <button
                    onClick={() => removeFilter(filter)}
                    className="ml-1 text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <FaTimes size={12} />
                  </button>
                </div>
              ))}
              <button
                onClick={resetFilters}
                className="ml-auto text-sm text-red-600 font-medium hover:text-red-800 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}

        {/* Mobile Accordions */}
        <div className="lg:hidden mb-6">
          <div>
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="w-full bg-[#6b8793] text-white px-4 py-3 flex justify-between items-center rounded-t-lg"
            >
              <span className="font-bold">Categories</span>
              <FaChevronDown
                size={14}
                className={`transition-transform duration-300 ${
                  showCategories ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden bg-white border border-t-0 rounded-b-lg ${
                showCategories ? "max-h-96 py-2" : "max-h-0 py-0"
              }`}
            >
              {categories.map((category) => (
                <li key={category.path} className="list-none">
                  <Link rel="prefetch"
                    to={`/product-category/${category.path}`}
                    className={`block py-2 px-4 ${
                      activeCategory === category.path
                        ? "font-bold text-[#30505b] bg-gray-50"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full bg-white border px-4 py-3 flex justify-between items-center rounded-t-lg"
            >
              <span className="font-bold flex items-center gap-2">
                <FaFilter size={14} /> Filters
              </span>
              <FaChevronDown
                size={14}
                className={`transition-transform duration-300 ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden bg-white border border-t-0 rounded-b-lg ${
                showFilters ? "max-h-[999px] py-4" : "max-h-0 py-0"
              }`}
            >
              {currentFilters.map((filter) => (
                <div
                  key={filter.title}
                  className="border-b last:border-b-0 px-4 pb-4 mb-4 last:mb-0 last:pb-0"
                >
                  <button
                    onClick={() => toggleAccordion(filter.title)}
                    className="w-full text-left py-2 font-bold flex justify-between items-center "
                  >
                    {formatFilterTitle(filter.title)}
                    <FaChevronRight
                      className={`transform transition-transform duration-300 ${
                        openAccordions[filter.title] ? "rotate-90" : "rotate-0"
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openAccordions[filter.title] ? "max-h-96 mt-2" : "max-h-0"
                    }`}
                  >
                    <div className="flex flex-wrap gap-2 ">
                      {filter.options.map((option) => (
                        <FilterOption
                          key={option}
                          option={option}
                          isSelected={selectedFilters[filter.title] === option}
                          onClick={() =>
                            handleFilterChange(filter.title, option)
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-[#6b8793] text-white px-4 py-3 font-bold">
                Categories
              </div>
              <ul className="space-y-1 p-2">
                {categories.map((category) => (
                  <li key={category.path}>
                    <Link rel="prefetch"
                      to={`/product-category/${category.path}`}
                      className={`block py-2 px-3 rounded transition-colors ${
                        activeCategory === category.path
                          ? "font-bold text-[#30505b] bg-gray-100"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex items-center gap-2 bg-[#6b8793] text-white px-4 py-3 font-bold">
                <FaFilter />
                <span>Filters</span>
              </div>
              <div className="p-4 space-y-6">
                {currentFilters.map((filter) => (
                  <div key={filter.title}>
                    <button
                      onClick={() => toggleAccordion(filter.title)}
                      className="w-full text-left font-bold py-2  flex justify-between items-center"
                    >
                      {formatFilterTitle(filter.title)}
                      <FaChevronRight
                        className={`transform transition-transform  duration-300 ${
                          openAccordions[filter.title]
                            ? "rotate-90"
                            : "rotate-0"
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openAccordions[filter.title]
                          ? "max-h-96 mt-2"
                          : "max-h-0"
                      }`}
                    >
                      <div className="flex flex-wrap gap-2">
                        {filter.options.map((option) => (
                          <FilterOption
                            key={option}
                            option={option}
                            isSelected={
                              selectedFilters[filter.title] === option
                            }
                            onClick={() =>
                              handleFilterChange(filter.title, option)
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="col-span-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-xl font-bold text-[#30505b]">
                {filteredProducts.length} Products Found
              </h2>

              {activeFilters.length > 0 && (
                <button
                  className="px-4 py-2 bg-white text-[#30505b] rounded-lg border border-[#30505b] hover:bg-[#30505b] hover:text-white transition-colors text-sm flex items-center"
                  onClick={resetFilters}
                >
                  <FaTimes className="mr-1" size={12} />
                  Clear All Filters
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="col-span-full text-center py-12 bg-white rounded-lg shadow-sm">
                <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No products match your filters
                </h3>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  Try adjusting your filters or browse other categories
                </p>
                <div className="flex justify-center gap-3">
                  <button
                    className="px-5 py-2 cursor-pointer bg-[#30505b] text-white rounded-lg hover:bg-[#1d3a43] transition-colors"
                    onClick={resetFilters}
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
                {filteredProducts.map((product: any) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>

        <BoxesFooter />
      </div>
    </main>
  );
};

export default ProductCategory;
