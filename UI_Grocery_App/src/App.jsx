import { useState } from "react";
import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
function App() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
