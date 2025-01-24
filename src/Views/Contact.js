import React from "react";
import { Banner } from "./Banner";
import { Navbar } from "./Navbar";

export function Contact() {
  return (
    <>
      <header>
        <Banner />
        <Navbar />
      </header>
      <main>
        <h1>Contact</h1>
        <form>
          <p>
            Your email
            <br />
            <input type="text" />
          </p>
          <p>
            Comments
            <br />
            <textarea></textarea>
          </p>
          <button>Submit</button>
        </form>
      </main>
    </>
  );
}
