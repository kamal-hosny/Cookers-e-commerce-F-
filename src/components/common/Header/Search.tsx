import React, { useState, useEffect, useRef } from "react";
import { FaTimes, FaSearch, FaArrowRight } from "react-icons/fa";
import { useSearchProducts } from "../../../Hooks/useSearchProducts ";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  sku: string;
  images: { src: string }[];
  short_description?: string;
  price: string;
}

interface SearchProps {
  openSearch: boolean;
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const Search = ({ openSearch, setOpenSearch }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const accentColor = "#6b8793";

  const { data: searchResults = [], isLoading } = useSearchProducts(searchQuery);

  // Focus input + Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenSearch(false);
    };

    if (openSearch) {
      document.addEventListener("keydown", handleEsc);
      setTimeout(() => inputRef.current?.focus(), 100);
    }

    return () => document.removeEventListener("keydown", handleEsc);
  }, [openSearch]);

  // Reset on close
  useEffect(() => {
    if (!openSearch) setSearchQuery("");
  }, [openSearch]);

  // Prevent scroll
  useEffect(() => {
    document.body.style.overflow = openSearch ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openSearch]);

  if (!openSearch) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-white flex flex-col"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.98)" }}
      onClick={() => setOpenSearch(false)}
    >
      <div
        className="container mx-auto px-4 py-6 flex flex-col h-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <FaSearch className="text-gray-500" size={20} />
            <h2 className="text-2xl font-light text-gray-800">Search Products</h2>
          </div>
          <button
            className="text-gray-500 hover:text-gray-800 transition-colors p-1"
            onClick={() => setOpenSearch(false)}
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Input */}
        <div className="relative mb-10">
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type product name or keywords..."
            className="w-full py-4 px-4 text-xl border-b focus:outline-none"
            style={{ borderBottom: `2px solid ${accentColor}` }}
          />
        </div>

        {/* Results */}
        <div className="flex-grow overflow-y-auto pb-4">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-40">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2" style={{ borderColor: accentColor }}></div>
              <p className="text-gray-600 mt-3">Searching products...</p>
            </div>
          ) : searchQuery && searchResults.length === 0 ? (
            <div className="text-center py-10">
              <div className="text-gray-300 mb-6">
                <FaSearch size={60} />
              </div>
              <h3 className="text-xl font-normal text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                We couldn't find any products matching "{searchQuery}"
              </p>
            </div>
          ) : searchQuery ? (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-normal text-gray-700">
                  {searchResults.length} {searchResults.length === 1 ? "product" : "products"} found
                </h3>
              </div>

              <div className="space-y-6">
                {searchResults.map((product: Product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-6 p-4 hover:bg-gray-50 transition cursor-pointer"
                    onClick={() => {
                      setOpenSearch(false);
                      navigate(`/product/${product.id}`);
                    }}
                  >
                    {/* Product Image */}
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-100 flex items-center justify-center">
                      <img
                        src={product.images?.[0]?.src || "/placeholder.png"}
                        alt={product.name}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-grow">
                      <h4 className="text-lg font-normal text-gray-800 mb-1">{product.name}</h4>
                      <p className="text-sm text-gray-500 mb-2">
                        SKU: {product.sku || "N/A"}
                      </p>
                      
                      {product.short_description && (
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {product.short_description.replace(/<[^>]*>/g, "")}
                        </p>
                      )}
                      
                      <div className="mt-2 flex items-center">
                        <button className="flex items-center gap-1 text-sm font-medium" style={{ color: accentColor }}>
                          View details
                          <FaArrowRight size={12} />
                        </button>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="flex-shrink-0 text-lg font-light" style={{ color: accentColor }}>
                      {product.price || "$999.99"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-200 mb-6">
                <FaSearch size={60} />
              </div>
              <h3 className="text-xl font-normal text-gray-700 mb-2">Search our catalog</h3>
              <p className="text-gray-500 max-w-md mx-auto mb-8">
                Find appliances by name, category, or keywords
              </p>
              
              <div className="mt-8 max-w-md mx-auto">
                <h4 className="text-left font-normal text-gray-700 mb-4 px-2">Popular Searches:</h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  {["Electric multifunction oven", "Ovens", "Hobs", "Hoods", "Microwave", "Dishwasher"].map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="px-4 py-2 rounded-full text-sm font-light border hover:bg-gray-50 transition"
                      style={{ borderColor: accentColor, color: accentColor }}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 pb-2 mt-auto">
          <div className="flex justify-center">
            <p className="text-gray-500 text-sm">
              Press <span className="px-2 py-1 rounded border text-gray-600">ESC</span> to close
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;