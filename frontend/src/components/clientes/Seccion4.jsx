import React, { useState } from "react";
import { Link } from "react-router-dom";

const Seccion4 = () => {
  return (
    <section
      className="u-clearfix u-container-align-left u-image u-shading u-section-4"
      id="sec-5cb4"
      data-image-width={1380}
      data-image-height={920}
    >
      <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <h2
          className="u-align-left u-text u-text-default u-text-1 titulo-nosotros"
          data-animation-name="customAnimationIn"
          data-animation-duration={1500}
          data-animation-delay={500}
        >
          Plan Your Camping Trip
        </h2>
        <ul
          className="u-align-left u-custom-list u-file-icon u-large-text u-text u-text-body-alt-color u-text-variant u-text-2"
          data-animation-name="customAnimationIn"
          data-animation-duration={1250}
          data-animation-delay={500}
        >
          <li style={{ paddingLeft: "11px" }} className="p-nosotros">
            <div className="u-list-icon u-text-palette-2-base">
              <svg
                className="u-svg-content"
                viewBox="0 0 512 512"
                id="svg-acb8"
                style={{ fontSize: "0.9em", margin: "-0.9em" }}
              >
                <path
                  d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z"
                  fill="currentColor"
                />
              </svg>
            </div>
            Lorem ipsum dolor sit amet
          </li>
          <li style={{ paddingLeft: "11px" }} className="p-nosotros">
            <div className="u-list-icon u-text-palette-2-base">
              <svg
                className="u-svg-content"
                viewBox="0 0 512 512"
                id="svg-acb8"
                style={{ fontSize: "0.9em", margin: "-0.9em" }}
              >
                <path
                  d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z"
                  fill="currentColor"
                />
              </svg>
            </div>
            Ut enim ad minim veniam
          </li>
          <li style={{ paddingLeft: "11px" }} className="p-nosotros">
            <div className="u-list-icon u-text-palette-2-base">
              <svg
                className="u-svg-content"
                viewBox="0 0 512 512"
                id="svg-acb8"
                style={{ fontSize: "0.9em", margin: "-0.9em" }}
              >
                <path
                  d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z"
                  fill="currentColor"
                />
              </svg>
            </div>
            Excepteur sint occaecat cupidatat
          </li>
        </ul>
        <Link
          to="/experiencias"
          className="u-align-left u-border-2 p-nosotros u-border-palette-2-base u-btn u-btn-round u-button-style u-palette-2-base u-radius-50 u-btn-2"
          data-animation-name="customAnimationIn"
          data-animation-duration={1500}
          data-animation-delay={500}
        >
          Book now
        </Link>
      </div>
    </section>
  );
};

export default Seccion4;
