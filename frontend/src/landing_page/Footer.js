import React from "react";

function Footer() {
  return (
    <footer className="border-top bg-light text-dark pt-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {/* Logo & Copyright */}
          <div className="col">
            <img
              src={`/images/logo.svg`}
              alt="ZClone Logo"
              style={{ width: "60%", maxWidth: "200px" }}
            />
            <p className="mt-4 small">
              © 2010 - 2025, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Company Section */}
          <div className="col">
            <h5 className="mb-3 fw-semibold">Company</h5>
            <ul className="list-unstyled small">
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Referral Programme</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Zerodha.tech</a>
              </li>
              <li>
                <a href="/">Open Source</a>
              </li>
              <li>
                <a href="/">Press & Media</a>
              </li>
              <li>
                <a href="/">Zerodha Cares (CSR)</a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="col">
            <h5 className="mb-3 fw-semibold">Support</h5>
            <ul className="list-unstyled small">
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Support Portal</a>
              </li>
              <li>
                <a href="/">Z-Connect Blog</a>
              </li>
              <li>
                <a href="/">List of Charges</a>
              </li>
              <li>
                <a href="/">Downloads & Resources</a>
              </li>
              <li>
                <a href="/">Videos</a>
              </li>
              <li>
                <a href="/">Market Overview</a>
              </li>
              <li>
                <a href="/">How to File a Complaint?</a>
              </li>
              <li>
                <a href="/">Status of Your Complaints</a>
              </li>
            </ul>
          </div>

          {/* Account Section */}
          <div className="col">
            <h5 className="mb-3 fw-semibold">Account</h5>
            <ul className="list-unstyled small">
              <li>
                <a href="/">Open an Account</a>
              </li>
              <li>
                <a href="/">Fund Transfer</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Compliance Information */}
        <div
          className="mt-5 mb-4 small text-muted"
          style={{ fontSize: "0.8rem" }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633. Depository services: IN-DP-431-2019.
          </p>
          <p>
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India.
          </p>
          <p>
            For complaints, write to{" "}
            <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>
            or <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>.
          </p>
          <p>
            Please read all risk disclosures, SEBI notices, and terms before
            investing.
          </p>
          <p>
            "Prevent unauthorized transactions by updating your email and mobile
            number. Check your holdings via NSDL/CDSL monthly statements."
          </p>
        </div>

        {/* Quick Links */}
        <div className="d-flex flex-wrap justify-content-center gap-3 border-top pt-3 pb-4 small">
          {[
            "NSE",
            "BSE",
            "MCX",
            "Terms & Conditions",
            "Policies & Procedures",
            "Privacy Policy",
            "Disclosure",
            "For Investors' Attention",
            "Investor Charter",
          ].map((text, idx) => (
            <a key={idx} href="/" className="text-decoration-none text-muted">
              {text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
