
interface Section {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface IProps {
  sections: Section[];
}

const BlocksGap = ({ sections }: IProps) => {
  return (
    <div className="w-full py-8 space-y-20">
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
          
          >
            <div
              className={`flex flex-col justify-center py-10 gap-10 p-10 md:p-20`}
            >
              <h2 className="text-3xl font-bold">{section.title}</h2>
              <p className="text-base leading-relaxed font-medium">{section.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlocksGap;
