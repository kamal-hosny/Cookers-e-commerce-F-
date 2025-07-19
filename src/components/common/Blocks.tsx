import { Link } from "react-router-dom";

interface Section {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  bgColor: string;
  textColor?: string;
}

interface IProps {
  sections: Section[];
}

const Blocks = ({ sections }: IProps) => {
  return (
    <div className="w-full py-8">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`max-w-7xl mx-auto flex flex-col ${
            index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
          } h-auto md:h-[400px] overflow-hidden`}
        >
          {/* الصورة */}
          <div className="flex-1">
            <img
              className="w-full h-full object-cover"
              src={section.image}
              alt={section.title}
            />
          </div>

          {/* النص */}
          <div
            className={`flex-1 bg-opacity-80 relative`}
            style={{ backgroundColor: section.bgColor }}
          >
            <div
              className={`flex flex-col justify-center py-10 gap-6 p-10 md:p-20 ${
                section.textColor || "text-white"
              }`}
            >
              <h2 className="text-3xl font-bold">{section.title}</h2>
              <p className="text-base leading-relaxed">{section.description}</p>
              <Link
              rel="prefetch"
                to={section.link}
                className="text-sm font-semibold underline underline-offset-4 w-fit hover:text-gray-300 transition"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blocks;
