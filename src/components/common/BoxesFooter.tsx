import { useNavigate } from "react-router-dom";

const BoxesFooter = () => {
  const navigate = useNavigate();

  const card = [
    {
      title: "BULM around you",
      description:
        "Explore our product range and locate certified BULM dealers near you.",
      button: "Find dealers",
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/01/mondo-tech-1280x465.jpg.webp",
      className: "bg-[#30505b] text-white",
      link: "/dealers",
    },
    {
      title: "Partner access",
      description:
        "Restricted access for authorized BULM distributors and service providers.",
      button: "Access area",
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2022/01/Schermata-1-1280x465.jpg.webp",
      className: "bg-[#1d1d1b] text-white",
      link: "/reserved-area",
    },
    {
      title: "Discover BULM",
      description: "Get to know BULM’s story and our dedication to excellence.",
      button: "Learn more",
      image:
        "https://www.elba-cookers.com/wp-content/uploads/2023/06/elba-italy-1280x704.jpg.webp",
      className: "bg-[#72909a] text-white",
      link: "/about-us",
    },
  ];

  const handleNavigate = (path: string) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {card.map((item, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden transition-all duration-300"
          >
            <div className={`p-8 h-48 ${item.className}`}>
              <h3
                className={`text-2xl font-bold mb-6 ${
                  index === 1 ? "text-[#72909a]" : ""
                }`}
              >
                {item.title}
              </h3>
              <p className="mb-4">{item.description}</p>
            </div>

            <div className="relative group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <button
                onClick={() => item.link && handleNavigate(item.link)}
                disabled={!item.link}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold w-3/4 px-4 py-2 transition-transform bg-white underline cursor-pointer group-hover:scale-105`}
              >
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxesFooter;
