import React from "react";
import Navber from "./Navber";
import Banner from "./Banner";
import Service from "./Service";
import Advertisements from "./Advertisements";
import Delivery from "./Delivery";
import Testimonials from "./Testimonials";
import Form from "./Form";
import Find from "./Find";
import Updates from "./Updates";
import Links from "./Links";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <div className={`font-["Raleway"]`}>
        <Navber />
        <Banner />
        <Service />
        <Advertisements />
        <Delivery />
        <Testimonials />
        <Form />
        <Find />
        <Updates />
        <Links />
        <Footer />
      </div>
    </>
  );
};

export default App;
