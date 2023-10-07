import { FC, ReactNode } from 'react';
import StudioHeader from './studio/components/StudioHeader';

interface StudioLayoutProps {
  children: ReactNode;
}

const StudioLayout: FC<StudioLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen">
      <StudioHeader />
      <div className="flex h-[calc(100vh-64px)]">{children}</div>
    </div>
  );
};

export default StudioLayout;
