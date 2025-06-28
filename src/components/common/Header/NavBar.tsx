import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [showCollectionsMenu, setShowCollectionsMenu] = useState(false);
  const [showProductsMenu, setShowProductsMenu] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setShowCollectionsMenu(false);
    setShowProductsMenu(false);
  }, [location]);

  return (
    <div className="relative">
      <div className="flex justify-between items-center gap-x-4 px-6 py-4 bg-white ">
        <nav>
          <ul className="flex gap-6 items-center max-md:hidden">
            {/* Collections */}
            <li
              onMouseEnter={() => setShowCollectionsMenu(true)}
              onMouseLeave={() => setShowCollectionsMenu(false)}
              className="relative"
            >
              <Link
                className={`uppercase  hover:underline relative z-[10] ${showCollectionsMenu && "text-white"} ${showProductsMenu && "text-white"}`}
                to="/"
              >
                Collections
              </Link>

              {showCollectionsMenu && (
                <div
                  className="absolute top-full left-0 w-screen"
                  onMouseEnter={() => setShowCollectionsMenu(true)}
                  onMouseLeave={() => setShowCollectionsMenu(false)}
                >
                  <div className="bg-[#1d1d1b] fixed flex justify-center items-center z-[5] text-white top-0 left-0 h-[80vh] w-screen p-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                      <div>
                        <p className="font-bold mb-4 uppercase text-[#7ba7b8]">
                          <Link to={'/collections/collections-cookers'}>Collections Cookers</Link>
                        </p>
                        <ul className="space-y-4">
                          <li><Link to="/collections/collections-cookers/classic">Vintage</Link></li>
                          <li><Link to="/collections/collections-cookers/excellence">Excellence</Link></li>
                          <li><Link to="/collections/collections-cookers/fusion">Fusion</Link></li>
                          <li><Link to="/collections/collections-cookers/classic">Classic</Link></li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-bold mb-4 uppercase text-[#7ba7b8]">
                          <Link to={"/collections/collections-ovens"}>Collections Ovens</Link>
                        </p>
                        <ul className="space-y-4">
                          <li><Link to="/collections/collections-ovens/elio-ovens">Elio</Link></li>
                          <li><Link to="/collections/collections-ovens/elio-giant-ovens">Elio Giant</Link></li>
                          <li><Link to="/collections/collections-ovens/country-ovens">Country</Link></li>
                          <li><Link to="/collections/collections-ovens/professional-ovens">Professional</Link></li>
                          <li><Link to="/collections/collections-ovens/alterum-ovens">Alterum</Link></li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-bold mb-4 uppercase text-[#7ba7b8]">
                          <Link to={"/collections/collections-hobs"}>Collections Hobs</Link>
                        </p>
                        <ul className="space-y-4">
                          <li><Link to="/collections/collections-hobs/elio-hobs">Elio Collection</Link></li>
                          <li><Link to="/collections/collections-hobs/country-hobs">Country Collection</Link></li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-bold mb-4 uppercase text-[#7ba7b8]">
                          <Link to="/collections/black-line-collection">Black Line Collection</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Products */}
            <li
              onMouseEnter={() => setShowProductsMenu(true)}
              onMouseLeave={() => setShowProductsMenu(false)}
              className="relative"
            >
              <Link
                className={`uppercase  hover:underline relative z-[10] ${showProductsMenu && "text-white"} ${showCollectionsMenu && "text-white"}`}
                to="/product-category?cookers"
              >
                Products
              </Link>

              {showProductsMenu && (
                <div
                  className="absolute top-full left-0 w-screen"
                  onMouseEnter={() => setShowProductsMenu(true)}
                  onMouseLeave={() => setShowProductsMenu(false)}
                >
                  <div className="bg-[#1d1d1b] fixed flex justify-center items-center z-[5] text-white top-0 left-0 h-[80vh] w-screen p-20">
                    {/* Left Image */}
                    <div className="w-2/3 h-5/6 self-end">
                      <img
                        src="https://www.elba-cookers.com/wp-content/uploads/2023/09/Big-menu-cookers-V2.jpg"
                        alt="Product Preview"
                        loading="eager"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Right Links */}
                    <div className="w-1/3 flex flex-col justify-center px-10 space-y-6 font-semibold text-2xl text-[#7ba7b8]">
                      <Link to="/product-category?cookers" className="hover:underline">Cookers</Link>
                      <Link to="/product-category?ovens" className="hover:underline">Ovens</Link>
                      <Link to="/product-category?hobs" className="hover:underline">Hobs</Link>
                      <Link to="/product-category?hoods" className="hover:underline">Hoods</Link>
                      <Link to="/product-category?compact-products" className="hover:underline">Compact products</Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>

        {/* Search Icon */}
        <CiSearch
          size={25}
          className={`cursor-pointer ${showCollectionsMenu || showProductsMenu ? "text-white" : "text-black"}`}
        />
      </div>
    </div>
  );
};

export default NavBar;
