import React from "react";
import { Link } from "react-router";

export function Navbar() {
  return (
    <nav>
      <Link to="/">HOME | </Link>
      <Link to="/gallery">GALLERY | </Link>
      <Link to="/contact">CONTACT</Link>
    </nav>
  );
}
