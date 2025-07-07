import React from "react";

const ticketData = [
  {
    icon: "fa fa-plus-circle",
    title: "Account Opening",
    links: [
      "Getting started",
      "Online",
      "Offline",
      "Charges",
      "Company, Partnership and HUF",
      "Non Resident Indian (NRI",
    ],
  },
  {
    icon: "fa-regular fa-user",
    title: "Your Zerodha Account",
    links: [
      "Login credentials",
      "Your Profile",
      "Account modification and segment addition",
      "CMR & DP ID",
      "Nomination",
      "Transfer and conversion of shares",
    ],
  },
  {
    icon: "fa-solid fa-chart-simple",
    title: "Trading and Markets",
    links: [
      "Trading FAQs",
      "Kite",
      "Margins",
      "Product and order types",
      "Corporate actions",
      "Kite features",
    ],
  },
  {
    icon: "fa-solid fa-file",
    title: "Funds",
    links: [
      "Fund withdrawal",
      "Adding funds",
      "Adding bank accounts",
      "eMandates",
    ],
  },
  {
    icon: "fa-regular fa-square",
    title: "Console",
    links: [
      "IPO",
      "Portfolio",
      "Funds statement",
      "Profile",
      "Reports",
      "Referral program",
    ],
  },
  {
    icon: "fa-regular fa-circle",
    title: "Coin",
    links: [
      "Understanding mutual funds and Coin",
      "Coin app",
      "Coin web",
      "Transactions and reports",
      "National Pension Scheme (NPS)",
    ],
  },
];

function CreateTicket() {
  return (
    <section className="container my-5">
      <h1 className="fs-5 text-muted mb-4">
        To create a ticket, select a relevant topic
      </h1>

      <div className="row">
        {ticketData.map((section, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-5">
            <h2 className="fs-6 fw-bold mb-4">
              <i className={`me-2 ${section.icon}`}></i>
              {section.title}
            </h2>
            <ul className="ps-3">
              {section.links.map((link, i) => (
                <li key={i} className="mb-2">
                  <a href="/" className="text-decoration-none text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CreateTicket;
