import React from "react";

function Hero() {
  return (
    <section className="text-light py-5" style={{ backgroundColor: "#387ed1" }}>
      <div className="container">
        {/* Top Row: Support Title and Ticket Link */}
        <div className="row align-items-center mb-4">
          <div className="col-md-6 text-start px-4">
            <h4 className="fs-5">Support Portal</h4>
          </div>
          <div className="col-md-6 text-end px-4">
            <a href="/" className="text-white text-decoration-underline fs-6">
              Track tickets
            </a>
          </div>
        </div>

        {/* Middle Row: Search & Quick Links */}
        <div className="row">
          <div className="col-lg-6 px-4 mb-5">
            <h4 className="fs-5 mb-4">
              Search for an answer or browse help topics to create a ticket
            </h4>

            {/* Search Form */}
            <form className="mb-4">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control p-3 rounded-0"
                  placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
                  aria-label="Search"
                />
                {/* Optional icon if needed:
                <span className="input-group-text bg-white rounded-0">
                  <i className="fas fa-search text-dark"></i>
                </span> */}
              </div>
            </form>

            {/* Quick Help Links */}
            <div className="d-flex flex-wrap gap-3">
              {[
                "Track account opening",
                "Track segment activation",
                "Intraday margins",
                "Kite user manual",
              ].map((label, idx) => (
                <a
                  key={idx}
                  href="/"
                  className="text-white text-decoration-underline"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Featured Notices */}
          <div className="col-lg-6 px-4">
            <h4 className="fs-5 mb-4">Featured</h4>
            <ol className="text-white ps-3">
              <li className="mb-3 fs-6">
                <a href="/" className="text-white text-decoration-underline">
                  Trading holiday on account of Maha Shivaratri on February 26,
                  2025
                </a>
              </li>
              <li className="mb-3 fs-6">
                <a href="/" className="text-white text-decoration-underline">
                  Offer for sale (OFS) - February 2025
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
