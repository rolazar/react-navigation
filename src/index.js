import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Views/Home";
import { Contact } from "./Views/Contact";
// import { getRoot } from "./modules/root";

// const root = getRoot();

const react = createRoot(window.bodyTag);
react.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/react-navigation" element={<Home />} />
      <Route path="/react-navigation/" element={<Home />} />
      {/* <Route path={root + "/"} element={<Home />} /> */}
      {/* <Route path={githubRoot} element={<Home />} /> */}
      <Route path="/contact" element={<Contact />} />
      {/* <Route path={root + "/contact"} element={<Contact />} /> */}
      {/* <Route path={githubRoot + "/contact"} element={<Contact />} /> */}
    </Routes>
  </BrowserRouter>
);
