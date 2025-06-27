import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Category from "./components/Category";
import ApiProducts from "./components/ApiProducts";
import ProductCards from "./components/ProductCards";
import Discounts from "./components/Discounts";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Products />
      <Category />
      <ApiProducts />
      <ProductCards />
      <Discounts />
      <Banner />
      <Footer />
    </>
  );
};

export default App;
