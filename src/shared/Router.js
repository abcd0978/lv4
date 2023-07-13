import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import SpecPage from "../pages/SpecPage";
import FormPage from "../pages/FormPage";
import PostingsPage from "../pages/PostingsPage";
const Router = () => {
  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/spec/:id" element={<SpecPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/postings" element={<PostingsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
