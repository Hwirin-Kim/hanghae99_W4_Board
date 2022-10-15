import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import Detail from "../pages/detail";
import Home from "../pages/home";
import Write from "../pages/write";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
