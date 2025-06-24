import { type ReactNode } from 'react';

interface IProps {
  title: string;
  children: ReactNode;
}

const MainTitleCollections = ({ title, children }: IProps) => {
  return (
    <div className="text-container flex flex-col gap-10 mt-8 pb-30 px-36">
      <div className="main-title">
        <p className="text-4xl font-medium">{title}</p>
      </div>
      <div className="text">
        {children}
      </div>
    </div>
  );
};

export default MainTitleCollections;
