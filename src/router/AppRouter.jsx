import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SearcBar from "../components/SearcBar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <>
      <SearcBar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
