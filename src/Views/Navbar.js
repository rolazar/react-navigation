import React from "react";
import { Link } from "react-router";
import { getRootPath } from "../modules/getRootPath";

export function Navbar() {
  const rootPath = getRootPath();

  return (
    <nav>
      <Link to={`${rootPath}/`}>HOME | </Link>
      <Link to={`${rootPath}/gallery`}>GALLERY | </Link>
      <Link to={`${rootPath}/contact`}>CONTACT</Link>
    </nav>
  );
}
