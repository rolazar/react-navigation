import React from "react";
import { Link } from "react-router";

export function Navbar() {
  const domain = window.location.hostname;
  let rootPath = "";
  if (domain === "rolazar.github.io") rootPath = "/react-navigation";

  return (
    <nav>
      <Link to={`${rootPath}/`}>HOME | </Link>
      <Link to={`${rootPath}/gallery`}>GALLERY | </Link>
      <Link to={`${rootPath}/contact`}>CONTACT</Link>
    </nav>
  );
}
