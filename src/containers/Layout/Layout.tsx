import * as React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AppRouter from '../AppRouter';

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <AppRouter />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
