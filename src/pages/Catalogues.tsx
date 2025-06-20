import { Link } from "react-router-dom";
import BoxesFooter from "../components/common/BoxesFooter";

const cataloguesImage = [
  {
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/Cover-company-profile.jpg.webp",
  },
  {
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/05/Cover-Catalogo-Elba-export-2022.jpg.webp",
  },
  {
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/Cover-Giant.jpg.webp",
  },
];

const Catalogues = () => {
  return (
    <div className="">
      <div className="bg-[#30505b]">
      <div className=" py-10 container ">
        <div className="head-catalogues text-white ">
          <div className="flex justify-between items-center max-md:items-start gap-1.5 max-md:flex-col">
            <span className="text-4xl w-72  max-md:w-full">
              Request an{" "}
              <strong>
                Elba  Catalogue
              </strong>{" "}
            </span>
            <span className="w-96 font-semibold">
              If you are looking for inspiration or are considering purchasing
              an Elba appliance, our brochures are available as a PDF for you to
              browse at your leisure.
            </span>
          </div>
          <div className="mt-15 text-sm font-medium breadcrumb">
            {" "}
            <Link to={"/"}>{`<`} Home</Link> {`/`} Catalogues
          </div>
        </div>
      </div>
      </div>
      

      <div className="cards flex items-center gap-4 container py-24">
        {cataloguesImage.map((item, index) => (
          <div key={index} >
            <img className="h-80 w-60 fit" src={item.image} alt="pdfs" />
          </div>
        ))}
      </div>
      <BoxesFooter />
    </div>
  );
};

export default Catalogues;
