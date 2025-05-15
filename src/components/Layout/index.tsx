import React from 'react';
import { Navbar } from '../';
import { Footer } from '../';
import './index.scss';

interface LayoutProps {
  children: React.ReactNode;
  userName?: string;
  avatar?: string;
  onLogout?: () => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  userName,
  avatar,
  onLogout,
}) => {
  return (
    <div className="td-layout">
      <Navbar
        userName={userName}
        avatar={avatar}
        onLogout={onLogout}
      />
      <main className="td-layout__content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;