import Blocks from "../components/common/Blocks";
import Breadcrumbs from "../components/ui/Breadcrumbs";

interface Section {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  bgColor: string;
  textColor?: string;
}

interface LayoutProps {
  title: string;
  subtitle: string;
  description: string;
  sections?: Section[];
  bgColor?: string;
  textColor?: string;
}

const CollectionsLayout = ({
  title,
  subtitle,
  description,
  sections,
  bgColor = "#30505b",
  textColor = "#ffffff",
}: LayoutProps) => {
  return (
    <div>
      <div
        className="absolute w-screen h-[680px] top-0 left-0"
        style={{ backgroundColor: bgColor, color: textColor }}
      ></div>
      <div className="relative">
        <div className="container">
          <div
            className="main-title flex max-md:flex-col gap-5 items-center justify-between pt-10 pb-10 "
            style={{ color: textColor }}
          >
            <p className="max-w-92 max-md:w-full font-semibold text-3xl">
              {title} <br /> <b>{subtitle}</b>
            </p>
            <p className="max-w-92 max-md:w-full md:me-16">{description}</p>
          </div>
          <Breadcrumbs
            linkColor={textColor}
            activeColor={textColor}
            separatorColor={textColor}
          />
          {sections && <Blocks sections={sections} />}
        </div>
      </div>
    </div>
  );
};

export default CollectionsLayout;
