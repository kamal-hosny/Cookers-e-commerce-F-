import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <nav>
        <ul className="flex justify-between items-center max-md:hidden">
            <li>
                <Link className="uppercase pe-5" to={"/"}>
                collections
                </Link>
            </li>
            <li>
                <Link className="uppercase pe-5" to={"/product-category"}>
                products
                </Link>
            </li>
        </ul>
      </nav>
      <CiSearch size={25} cursor={"pointer"} />
    </div>
  );
};

export default NavBar;
