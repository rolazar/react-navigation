import React from "react";
import { Navbar } from "./Navbar";
import { Banner } from "./Banner";

export function Home() {
  const domain = window.location.hostname;
  console.log(`Domain: ${domain}`);

  return (
    <>
      <header>
        <Banner />
        <Navbar />
      </header>
      <main>
        <h1>The Venue</h1>
        <h2 id="interior">Interior</h2>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus
          sollicitudin ridiculus cras tincidunt ultricies efficitur nec.
          Ullamcorper potenti sodales mi accumsan ornare venenatis justo.
          Interdum aptent vulputate dignissim suspendisse sollicitudin. Sociosqu
          pharetra egestas risus; sollicitudin auctor sollicitudin penatibus
          condimentum. Augue pulvinar aptent; taciti ut consequat nunc. Proin
          leo accumsan id congue suspendisse; viverra orci. Vulputate ipsum
          sociosqu nunc felis aliquam facilisis hac consectetur nibh. Iaculis
          habitant at aliquet nec aptent, maecenas torquent aptent. Nunc urna
          porttitor nisi, ullamcorper neque tempor in nostra.
        </p>
        <h2 id="exterior">Exterior</h2>
        <p>
          Eros tempus fusce proin class hac cubilia conubia suspendisse.
          Tincidunt rhoncus ipsum morbi, lacus sagittis ipsum! Magna conubia
          montes ultricies faucibus integer metus leo cursus montes. Mus
          torquent class ligula consectetur proin ex ut ac. Viverra quam massa
          parturient etiam vestibulum montes. Habitant tempus curabitur cursus
          at sem lacinia; habitasse molestie fringilla. Viverra proin leo eget
          tempus cursus enim. Tempor urna conubia sapien magna vel iaculis.
          Porttitor facilisi curabitur suscipit facilisi id fermentum. Sed
          scelerisque magna hendrerit sodales ligula fermentum finibus ipsum.
        </p>
        <h2 id="events">Events</h2>
        <p>
          Senectus magna ultricies finibus vehicula maecenas tempus pulvinar
          pulvinar pulvinar. Metus porttitor maecenas dignissim facilisi at per
          ac. Quam donec himenaeos interdum eget ad, eget nisl faucibus. Feugiat
          primis potenti torquent eget mattis sem. Etiam eget tempus leo tellus
          nibh hendrerit erat. Suscipit finibus curae sed sagittis tempor
          sociosqu fusce diam. Fermentum proin purus; praesent tempor fringilla
          at aenean. Lobortis ad fusce tempor feugiat nunc senectus nostra?
        </p>
      </main>
      <footer>
        <hr />
        <p>
          <b>Sitemap</b>
        </p>
        <nav>
          <a href="#interior">Interior</a>
          <br />
          <a href="#exterior">Exterior</a>
          <br />
          <a href="#events">Events</a>
          <br />
        </nav>
        <p>Website created by Rolazar Aberin</p>
      </footer>
    </>
  );
}
