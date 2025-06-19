import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../Router/Routers";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div>
      <Header />
      <ToastContainer />
      <Routers />
      <Footer />
    </div>
  );
};

export default Layout;
