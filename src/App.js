import React from "react";
import Pack from "./components/pack/Pack";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const App = () => {
  function sum (a,b) {
    return a+b;
  }
  return (
    <div className="container mx-auto px-2 bg-gray-200">
      <Header />
      <Pack />
      <Footer name="Prince Varti" />
    </div>
  );
};

export default App;
