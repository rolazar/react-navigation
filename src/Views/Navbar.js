import React from "react";
import { Link } from "react-router";
import { getRoot } from "../modules/root";

export function Navbar() {
  const root = getRoot();

  return (
    <nav>
      <Link to={root + "/"}>HOME | </Link>
      <Link to={root + "/gallery"}>GALLERY | </Link>
      <Link to={root + "/contact"}>CONTACT</Link>
    </nav>
  );
}
