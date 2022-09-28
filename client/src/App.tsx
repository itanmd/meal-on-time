// import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Counter from "./Counter/Counter";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    // <Counter initCounter={1000} />
    <>
      <Header />

      <Menu defaultDisplay="list" />
    </>
  );
}

export default App;
