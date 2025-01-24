import React from "react";
import { Link } from "react-router";

const hostname = window.location.hostname;
console.log(`hostname: ${hostname}`);

export function Navbar() {
  return (
    <nav>
      <Link to="/">HOME | </Link>
      <Link to="/gallery">GALLERY | </Link>
      <Link to="/contact">CONTACT</Link>
    </nav>
  );
}
