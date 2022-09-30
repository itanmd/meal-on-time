// import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Counter from "./Counter/Counter";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./components/Order/Order";

function App() {
  return (
    // <Counter initCounter={1000} />
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu defaultDisplay="list" />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;