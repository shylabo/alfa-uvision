import { FC, ReactNode } from 'react';
import MarketplaceHeader from './components/MarketplaceHeader';

interface MarketplaceLayoutProps {
  children: ReactNode;
}

const MarketplaceLayout: FC<MarketplaceLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen">
      <MarketplaceHeader />
      <main className="container mx-auto h-[calc(100vh-64px)] p-2">{children}</main>
    </div>
  );
};

export default MarketplaceLayout;
