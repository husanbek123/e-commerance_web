import React from "react";
import c from "../footer/footer.module.scss"
function Footer() {
  return (
    <div>
      <footer>
        <div className={c.sec1}>
          <h1>Get in touch</h1>
          <ul>
            <li>
              <a href="/about">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Press Releases</a>
              <a href="/Blog">Blog</a>
            </li>
          </ul>
        </div>
        <div className={c.sec1}>
          <h1>Connections</h1>
          <ul>
            <li>
              <a href="https://www.facebook.com/">Facebook</a>
              <a href="https://twitter.com/">Twitter</a>
              <a href="https://www.instagram.com/_aziz3007/">Instagram</a>
              <a href="https://www.youtube.com/">Youtube</a>
            </li>
          </ul>
        </div>
        <div className={c.sec1}>
          <h1>Earnings</h1>
          <ul>
            <li>
              <a href="#">Become an Affiliate</a>
              <a href="#">Advertise your product</a>
              <a href="#">nimadir</a>
              <a href="#">Sell on Market</a>
            </li>
          </ul>
        </div>
        <div className={c.sec1}>
          <h1>Account</h1>
          <ul>
            <li>
              <a href="#">Your account</a>
              <a href="#">Returns Centre</a>
              <a href="#">Chat with us</a>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
