import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Views/Home";
import { Contact } from "./Views/Contact";

const githubRoot = "/react-navigation";

const root = createRoot(window.bodyTag);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={githubRoot} element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path={githubRoot + "/contact"} element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
