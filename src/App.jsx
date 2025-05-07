import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className="m-0 p-0 bg-[#FFF8E1] w-full min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
