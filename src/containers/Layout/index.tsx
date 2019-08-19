import * as React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import IntentionList from "../IntentionList";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <IntentionList />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
