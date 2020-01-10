import React from "react";
import { FaInstagram, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="SocialNetworks">
        <ul className="social">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/andproducciones/"
            >
              <FaInstagram className="instagram" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/andproduccionesoficial/"
            >
              <FaFacebookSquare className="facebook" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/andproducciones/"
            >
              <FaTwitterSquare className="twitter" />
            </a>
          </li>
        </ul>
      </div>
      <h3 id="h3Footer">
        Copyright 2019 AND Producciones All Rights Reserved - San Miguel de
        Tucumán
      </h3>
      <br />
      <p id="pFooter">
        Desarrollo:{" "}
        <a
          target="_blank"
          className="stefano"
          rel="noopener noreferrer"
          href="https://www.instagram.com/StefanoFerrari0"
        >
          Stefano Ferrari
        </a>
      </p>
    </footer>
  );
}
