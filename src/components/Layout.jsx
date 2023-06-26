import React from 'react';
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return <div className="layout-container">{children}</div>;
};

export default Layout;