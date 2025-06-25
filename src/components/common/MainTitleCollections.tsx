import { type ReactNode } from 'react';

interface IProps {
  title: string;
  children: ReactNode;
}

const MainTitleCollections = ({ title, children }: IProps) => {
  return (
    <div className="text-container flex flex-col gap-6 mt-8 pb-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
      <div className="main-title">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-medium">
          {title}
        </p>
      </div>
      <div className="text text-sm sm:text-base md:text-lg leading-relaxed">
        {children}
      </div>
    </div>
  );
};


export default MainTitleCollections;
