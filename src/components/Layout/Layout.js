import React from 'react';
import Sidebar from "../Sidebar";
import Header from "../Header";

const Layout = ({children}) => {
  return (
      <div className="flex min-h-screen">
        <div className="navbar-left columns-xs">
          <Sidebar/>
        </div>
        <div className="w-full">
          <Header/>
          <div className="p-4">
            {children}
          </div>
        </div>
      </div>
  );
};

export default Layout;