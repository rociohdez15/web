import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="u-align-center u-clearfix u-container-align-center u-footer u-grey-80 u-footer"
      id="footer"
    >
      <section className="u-backlink u-clearfix u-grey-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <p className="u-text">
                <span>This site was created with the </span>
                <a
                  className="u-link"
                  href="https://nicepage.com/"
                  target="_blank"
                  rel="nofollow"
                >
                  <span>Nicepage</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
