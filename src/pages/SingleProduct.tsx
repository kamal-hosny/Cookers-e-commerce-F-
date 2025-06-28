import { useState, useRef, useEffect } from "react";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

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

  const sections = [
    {
      title: "Overall dimensions",
      content: (
        <ul className="space-y-2">
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Platform Width (cm)</span>
            <span className="font-medium">90</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Platform Depth (cm)</span>
            <span className="font-medium">60</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Width (mm)</span>
            <span className="font-medium">900</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Depth (mm)</span>
            <span className="font-medium">600</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Height Min (mm)</span>
            <span className="font-medium">895</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Height Max (mm)</span>
            <span className="font-medium">922</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Cooktop",
      content: (
        <ul className="space-y-2">
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Glass Lid</span>
            <span className="font-medium">Yes</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Control Zone",
      content: (
        <ul className="space-y-2">
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Control Type</span>
            <span className="font-medium">Knobs</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Knobs finishing</span>
            <span className="font-medium">Nickel finishing with inner bezel</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Controls position</span>
            <span className="font-medium">Front</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Programmer</span>
            <span className="font-medium">Minute minder</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Programmer controls</span>
            <span className="font-medium">Knob</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Door",
      content: (
        <ul className="space-y-2">
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Handle</span>
            <span className="font-medium">Brushed metal</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Design</span>
            <span className="font-medium">Full glass</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Glass door</span>
            <span className="font-medium">Mirrored</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Glass number</span>
            <span className="font-medium">2</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Oven",
      content: (
        <ul className="space-y-2">
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Fuel</span>
            <span className="font-medium">Gas</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Cooling fan</span>
            <span className="font-medium">Yes</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Safety devices</span>
            <span className="font-medium">Included</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Cavity 1",
      content: (
        <ul className="space-y-2">
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Type</span>
            <span className="font-medium">Static gas</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Position</span>
            <span className="font-medium">Left</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Net Volume</span>
            <span className="font-medium">76</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Shelves Support</span>
            <span className="font-medium">Side racks</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Thermostat</span>
            <span className="font-medium">Included</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Grill element fuel</span>
            <span className="font-medium">Gas</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Functions</span>
            <span className="font-medium text-right max-w-[200px]">Light oven, rotisserie, gas grilling, gas cooking</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Oven light</span>
            <span className="font-medium">1</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Cleaning system</span>
            <span className="font-medium">Easy to clean enamel</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Other",
      content: (
        <ul className="space-y-2">
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Lower compartment</span>
            <span className="font-medium">Drawer</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Side compartment</span>
            <span className="font-medium">Yes</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Adjustable feet</span>
            <span className="font-medium">Yes</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Made in</span>
            <span className="font-medium">Italy</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Electric connection",
      content: (
        <ul className="space-y-2">
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Total electric absorption (W)</span>
            <span className="font-medium">2530</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Gas connection",
      content: (
        <ul className="space-y-2">
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Total gas absorption (W)</span>
            <span className="font-medium">12200</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Regulation</span>
            <span className="font-medium">G30/G31 - LPG</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Accessories",
      content: (
        <ul className="space-y-2">
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Accessory 1</span>
            <span className="font-medium">Shelf</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Accessory 2</span>
            <span className="font-medium">Tray</span>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <main className="font-sans bg-[#e2eaeb] min-h-screen py-4">

      <div className="container ">
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
            Back_
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
              Classic
              </p>
              <h1 className="text-2xl md:text-3xl font-bold text-[#30505b] mb-3">
                Classic single cavity static gas freestanding cooker
              </h1>
              <div className="inline-flex items-center bg-[#30505b] text-white text-sm px-3 py-1 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                CXX 9642 BG
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="bg-[#f5f9fa] px-3 py-2 rounded-lg border border-[#d0d8da]">
                  <div className="text-xs text-[#30505b] opacity-80">Model</div>
                  <div className="font-medium text-[#30505b]">CXX 9642 BG</div>
                </div>
                <div className="bg-[#f5f9fa] px-3 py-2 rounded-lg border border-[#d0d8da]">
                  <div className="text-xs text-[#30505b] opacity-80">Dimensions</div>
                  <div className="font-medium text-[#30505b]">900×600×895-922 mm</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-[#d0d8da]">
              <img
                src="https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-classic-freestanding-cooker-cxx-9642-bg.png.webp"
                alt="Elba Classic Cooker"
                className="w-80 h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Aesthetics Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8 border border-[#d0d8da]">
          <div className="bg-[#30505b] px-6 py-4">
            <h2 className="text-lg font-bold text-white">Aesthetics</h2>
          </div>
          <div className="px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col p-4 border border-[#e2eaeb] bg-[#f5f9fa] rounded-lg">
                <span className="text-sm text-[#30505b] opacity-80 mb-1">Line</span>
                <span className="font-medium text-[#30505b]">Classic</span>
              </div>
              <div className="flex flex-col p-4 border border-[#e2eaeb] bg-[#f5f9fa] rounded-lg">
                <span className="text-sm text-[#30505b] opacity-80 mb-1">Colour</span>
                <span className="font-medium text-[#30505b]">Stainless steel</span>
              </div>
              <div className="flex flex-col p-4 border border-[#e2eaeb] bg-[#f5f9fa] rounded-lg">
                <span className="text-sm text-[#30505b] opacity-80 mb-1">Installation mode</span>
                <span className="font-medium text-[#30505b]">Freestanding</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#d0d8da]">
          <div className="bg-[#30505b] px-6 py-4">
            <h2 className="text-lg font-bold text-white">Technical Specifications</h2>
          </div>
          
          <div className="divide-y divide-[#e2eaeb]">
            {sections.map(({ title, content }) => (
              <div
                key={title}
                className="transition-colors hover:bg-[#f5f9fa] cursor-pointer"
                onClick={() => toggleSection(title)}
              >
                <div className="flex justify-between items-center px-6 py-4">
                  <h3 className="font-medium text-[#30505b]">{title}</h3>
                  <div className="transform transition-transform duration-300">
                    {activeSection === title ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#30505b]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#30505b]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                {activeSection === title && (
                  <div className="px-6 pb-4 pt-1 bg-[#f5f9fa] animate-fadeIn">
                    {content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
      
      </div>

      {/* Footer */}
     
    </main>
  );
};

export default SingleProduct;