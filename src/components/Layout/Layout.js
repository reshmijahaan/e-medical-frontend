import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";


const Layout = ({ children, title}) => {
  return (
    <div>
       <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>
      <Toaster />
        {children}
        
        </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "E-Medical Pharmacy - shop now"
  
};

export default Layout;

