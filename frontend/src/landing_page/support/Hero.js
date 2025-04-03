import React from "react";

function Hero() {
  return (
    <div className="text-light p-5" style={{ backgroundColor: "#387ed1" }}>
      <div className="container">
        <div className="row">
          <div className="col-6 ps-5 pe-5">
            <h4 className="fs-5 mb-5 ms-5">Support Portal</h4>
          </div>
          <div className="col-6 ps-5 pe-5 text-end">
            <a href="/" style={{ textDecoration: "underline", color: "#fff" }}>
              <p className="fs-6">Track tickets</p>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-6 ps-5 pe-5">
            <h4 className="fs-5 mb-5 ms-5">
              Search for an answer or browse help topics to create a ticket
            </h4>
            <form className="form-inline  mb-5 ms-5">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control p-3 rounded-0"
                  placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                {/* <div className="input-group-prepend">
                  <span className="input-group-text rounded-0" id="basic-addon1">
                    <i className="fas fa-search m-3"></i>
                  </span>
                </div> */}
              </div>
            </form>
            <div className=" mb-5 ms-5">
              <a
                href="/"
                style={{ textDecoration: "underline", color: "#fff" }}
              >
                <span className="me-5">Track account opening</span>
              </a>
              <a
                href="/"
                style={{ textDecoration: "underline", color: "#fff" }}
              >
                <span className="me-5">Track segment activation</span>
              </a>
              <a
                href="/"
                style={{ textDecoration: "underline", color: "#fff" }}
              >
                <span className="me-5">Intraday margins</span>
              </a>
              <a
                href="/"
                style={{ textDecoration: "underline", color: "#fff" }}
              >
                <span className="me-5">Kite user manual</span>
              </a>
            </div>
          </div>
          <div className="col-6 ps-5 pe-5">
            <h4 className="fs-5 mb-5 ms-5">Featured</h4>
            <ol className=" mb-5 ms-5">
              <li className="fs-6 m-2">
                <a
                  href="/"
                  style={{ textDecoration: "underline", color: "#fff" }}
                >
                  Trading holiday on account of Maha Shivaratri on February 26,
                  2025
                </a>
              </li>
              <li className="fs-6 m-2">
                <a
                  href="/"
                  style={{ textDecoration: "underline", color: "#fff" }}
                >
                  Offer for sale (OFS) - February 2025
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
