import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import BoxesFooter from "../components/common/BoxesFooter";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import { FaChevronDown, FaChevronRight, FaFilter } from "react-icons/fa";

interface Product {
  name: string;
  description: string;
  model: string;
  image: string;
}

interface Filter {
  title: string;
  options: string[];
}

interface Banner {
  category: string;
  title: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    name: "Classic",
    description: "Static gas freestanding cooker",
    model: "CCX 9642",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-classic-freestanding-cooker-cxx-9642-bg.png.webp",
  },
  {
    name: "Modern",
    description: "Dual fuel oven with induction hob",
    model: "DFI 7500",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-classic-freestanding-cooker-cxx-6631-m.png.webp",
  },
];

const filters: Filter[] = [
  {
    title: "Color",
    options: ["Burgundy", "White", "Cream", "Black", "Slate gray", "Stainless steel", "Anthracite"],
  },
  {
    title: "Width",
    options: ["60", "90", "100", "120"],
  },
  {
    title: "Collection",
    options: ["Vintage", "Classic", "Fusion", "Excellence"],
  },
  {
    title: "Cooktop Type",
    options: ["gas", "electric", "mixed"],
  },
  {
    title: "Oven Type",
    options: ["electric", "gas"],
  },
];

const categories: string[] = ["cookers", "ovens", "hobs", "hoods", "compact-products"];

const banners: Banner[] = [
  {
    category: "cookers",
    title: "Italian for Cooking",
    description:
      "Designed to impress and built to last, all Elba Cookers are freestanding, make a strong style statement and deliver on performance.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-collections-freestanding-cookers.jpg.webp",
  },
  {
    category: "ovens",
    title: "Built-in ovens with distinctive Italian design and technology",
    description:
      "Experience culinary excellence with Elba Ovens, crafted for precision and consistent performance in every dishElba ovens, available in two widths, 60cm and 90cm, are gas or electric multifunction, offering a safe and efficient way to cook with special functions such as Easy Steam, Master Pizza, true fan cooking, rotisserie and many others.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-professional-built-in-ovens.jpg.webp",
  },
  {
    category: "hobs",
    title: "Elba hobs combine quality materials with cutting-edge technology.",
    description:
      "Available in different shapes, sizes and cooking methods, choose from gas on glass, gas on metal, induction, vitroceramic Elba hobs. Every Elba hob is designed to work in harmony with the Elba ovens.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-elio-gas-matik-hobs.jpg.webp",
  },
  {
    category: "hoods",
    title: "Chimney and under cabinet Hoods",
    description:
      "Elba hoods are the preferred choice of those in search of a more enjoyable cooking experience and a kitchen free from odors, humidity and steam damage.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-hoods-1.jpg.webp",
  },
  {
    category: "compact-products",
    title: "Compact appliances",
    description:
      "Designed to complement our cooking range, Elba compact appliances meet your needs and unique cooking style.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-compact-appliances.jpg.webp",
  },
];

const ProductCategory = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const activeCategory = query.keys().next().value || "cookers";

  const [showFilters, setShowFilters] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});

  const activeBanner = banners.find((banner) => banner.category === activeCategory) || banners[0];

  const toggleAccordion = (title: string) => {
    setOpenAccordions((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="bg-[#eaeaea]">
      <div className="flex flex-col lg:flex-row items-center justify-between bg-[#30505b] text-white">
        <div className="lg:w-1/2 flex max-md:flex-col justify-between items-center mb-10 lg:mb-0 py-16 px-8">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 self-start leading-snug min-h-[3.5rem] sm:min-h-[4rem] lg:min-h-[5rem]">
  {activeBanner.title}
</p>

          <p className="text-sm lg:w-1/2 leading-relaxed">
            {activeBanner.description}
          </p>
        </div>
        <div className="lg:w-1/3">
          <img
            src={activeBanner.image}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="container py-20">
        <Breadcrumbs
          activeColor="#1d1d1b"
          linkColor="#1d1d1b"
          separatorColor="#1d1d1b"
        />

        {/* Mobile Accordions */}
        <div className="lg:hidden mb-4">
          <div>
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="w-full bg-[#6b8793] text-white px-4 py-3 flex justify-between items-center"
            >
              <span className="font-bold">Categories</span>
              <FaChevronDown size={14} />
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden bg-white border px-4 ${showCategories ? "max-h-96 py-2" : "max-h-0 py-0"}`}
            >
              {categories.map((cat) => (
                <li key={cat} className="list-none">
                  <Link
                    to={`/product-category?${cat}`}
                    className={`block py-2 capitalize ${
                      activeCategory === cat
                        ? "font-bold border-b-2 border-[#30505b]"
                        : "hover:font-bold hover:border-b-2 hover:border-[#30505b]"
                    }`}
                  >
                    {cat.replace("-", " ")}
                  </Link>
                </li>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full bg-white border px-4 py-3 flex justify-between items-center"
            >
              <span className="font-bold flex items-center gap-2">
                <FaFilter size={14} /> Filters
              </span>
              <FaChevronDown size={14} />
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden bg-white border ${showFilters ? "max-h-[999px] py-4" : "max-h-0 py-0"}`}
            >
              {filters.map((filter) => (
                <div key={filter.title} className="border-t">
                  <button
                    onClick={() => toggleAccordion(filter.title)}
                    className="w-full text-left px-4 py-2 font-bold flex justify-between items-center"
                  >
                    {filter.title}
                    <FaChevronRight className={`transform transition-transform duration-300 ${openAccordions[filter.title] ? "rotate-90" : "rotate-0"}`} />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden px-4 ${openAccordions[filter.title] ? "max-h-96" : "max-h-0"}`}
                  >
                    {filter.options.map((option) => (
                      <label key={option} className="block py-1">
                        <input type="radio" name={filter.title} value={option} className="mr-2" />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block col-span-1 space-y-6">
            <ul className="space-y-2 bg-white p-4 shadow">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/product-category?${cat}`}
                    className={`capitalize block py-1 px-2 transition-all duration-200 ${
                      activeCategory === cat
                        ? "font-bold border-b-2 border-[#30505b]"
                        : "hover:font-bold hover:border-b-2 hover:border-[#30505b]"
                    }`}
                  >
                    {cat.replace("-", " ")}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="bg-white p-4 shadow space-y-4">
              {filters.map((filter) => (
                <div key={filter.title}>
                  <button
                    onClick={() => toggleAccordion(filter.title)}
                    className="w-full text-left font-bold py-2 flex justify-between items-center"
                  >
                    {filter.title}
                    <FaChevronRight className={`transform transition-transform duration-300 ${openAccordions[filter.title] ? "rotate-90" : "rotate-0"}`} />
                  </button>
                  <div
                    className={`pl-4 overflow-hidden transition-all duration-300 ${openAccordions[filter.title] ? "max-h-96" : "max-h-0"}`}
                  >
                    {filter.options.map((option) => (
                      <label key={option} className="block py-1">
                        <input type="radio" name={filter.title} value={option} className="mr-2" />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {products.map((product, index) => (
              <div
                key={index}
                className="w-40 h-60 relative group overflow-hidden cursor-pointer text-[#30505b] rounded flex items-center justify-center"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 group-hover:h-full bg-white transition-all duration-300 z-0"></span>
                <div className="relative z-10 flex flex-col items-center text-center space-y-2 px-2">
                  <div className="w-32 h-32">
                    <img
                      className="h-full w-full hover:scale-110 transition-transform duration-300 object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <p className="font-bold text-sm">{product.name}</p>
                  <p className="font-medium text-xs">{product.description}</p>
                  <p className="font-bold text-sm">{product.model}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <BoxesFooter />
      </div>
    </div>
  );
};

export default ProductCategory;
