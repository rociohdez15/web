import React, { useState } from "react";
import { Link } from "react-router-dom";

const Seccion3 = () => {
  return (
    <section
      className="u-align-center u-clearfix u-container-align-center u-palette-2-base u-section-3"
      id="sec-4bf5"
    >
      <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1">
        <h2
          className="text-center u-text u-text-default u-text-1 titulo-nosotros"
          data-animation-name="customAnimationIn"
          data-animation-duration={1500}
          data-animation-delay={0}
        >
          Find your next getaway
        </h2>
        <p
          className="text-center u-text texto2 p-nosotros"
          data-animation-name="customAnimationIn"
          data-animation-duration={1500}
          data-animation-delay={250}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="container py-5">
          <div className="row">
            {/* Card 1 */}
            <div className="col-12 col-md-4 mb-4">
              <div className="card position-relative">
                <img
                  alt="RV camping with a white camper van in a forest setting"
                  className="card-img-top"
                  src="https://storage.googleapis.com/a1aa/image/Xwnbcc0VwAim7ib4uM7_HnkgN-Il11uVY6c-5gY-Ilk.jpg"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <div
                    className="bg-dark bg-opacity-50 p-3"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                    }}
                  >
                    <h5 className="card-title titulo-nosotros2">
                      Best RV camping
                    </h5>
                    <p className="card-text p-nosotros">
                      Sample text. Click to select the Text Element.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-12 col-md-4 mb-4">
              <div className="card position-relative">
                <img
                  alt="Person camping by a lake with a tent and camping gear"
                  className="card-img-top"
                  src="https://storage.googleapis.com/a1aa/image/tJ6FDfTlVTSIIA0N17jFgIkrTd3WRNbyEl8cWrMkx_Q.jpg"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <div
                    className="bg-dark bg-opacity-50 p-3"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                    }}
                  >
                    <h5 className="card-title titulo-nosotros2">
                      Lake camping
                    </h5>
                    <p className="card-text p-nosotros">
                      Sample text. Click to select the Text Element.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-12 col-md-4 mb-4">
              <div className="card position-relative">
                <img
                  alt="Person reading a book on a beach with camping gear"
                  className="card-img-top"
                  src="https://storage.googleapis.com/a1aa/image/9zr58Zb3EsJpqnn8MH8t9VOy__fXtlmDrmmNEcj4opM.jpg"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <div
                    className="bg-dark bg-opacity-50 p-3"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                    }}
                  >
                    <h5 className="card-title titulo-nosotros2">Beach stays</h5>
                    <p className="card-text p-nosotros">
                      Sample text. Click to select the Text Element.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seccion3;
