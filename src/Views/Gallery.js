import React from "react";
import { Navbar } from "./Navbar";
import { Banner } from "./Banner";

export function Gallery() {
  return (
    <>
      <header>
        <Banner />
        <Navbar />
      </header>
      <main>
        <h1>Gallery</h1>
        <table>
          <tr>
            <td>
              <img
                width="300px"
                src="https://cache.marriott.com/content/dam/marriott-renditions/SFODT/sfodt-terrace-0152-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=375px:*"
              />
            </td>
            <td>
              <img
                width="300px"
                src="https://cache.marriott.com/content/dam/marriott-renditions/SFODT/sfodt-lobby-9705-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=375px:*"
              />
            </td>
            <td>
              <img
                width="300px"
                src="https://cache.marriott.com/content/dam/marriott-renditions/SFODT/sfodt-lobby-9706-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=375px:*"
              />
            </td>
          </tr>
          <tr>
            <td>
              <img
                width="300px"
                src="https://cache.marriott.com/content/dam/marriott-renditions/SFODT/sfodt-guest-bathroom-9719-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=750px:*"
              />
            </td>
            <td>
              <img
                width="300px"
                src="https://cache.marriott.com/content/dam/marriott-renditions/SFODT/sfodt-guest-room-3179-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=375px:*"
              />
            </td>
            <td>
              <img
                width="300px"
                src="https://cache.marriott.com/content/dam/marriott-renditions/SFODT/sfodt-guestroom-3175-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=375px:*"
              />
            </td>
          </tr>
        </table>
      </main>
    </>
  );
}
