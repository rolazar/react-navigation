import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Views/Home";
import { Contact } from "./Views/Contact";
import { Gallery } from "./Views/Gallery";

let rootPath = "";
const hostname = window.location.hostname;
if (hostname === "rolazar.github.io") rootPath = "/react-navigation";

const react = createRoot(window.bodyTag);
react.render(
  <BrowserRouter>
    <Routes>
      <Route path={`${rootPath}/`} element={<Home />} />
      <Route path={`${rootPath}/contact`} element={<Contact />} />
      <Route path={`${rootPath}/gallery`} element={<Gallery />} />
    </Routes>
  </BrowserRouter>
);
