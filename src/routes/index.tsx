import React from "react";
import { Routes, Route } from "react-router-dom";

import { Adoptions } from "../pages/Adoptions";
import { Checkout } from "../pages/Checkout";
import { Dogs } from "../pages/Dogs";


function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dogs />} />
        <Route path="/adoptions" element={<Adoptions />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export { AppRoutes };