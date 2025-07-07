import React from "react";

function Universe() {
  const partners = [
    {
      img: "/images/zerodhaFundhouse.png",
      desc: "Our asset management venture creating transparent index funds.",
    },
    {
      img: "/images/sensibullLogo.svg",
      desc: "Options trading platform with strategy tools and analytics.",
    },
    {
      img: "/images/tijori.svg",
      desc: "Investment research platform with insights on stocks and sectors.",
    },
    {
      img: "/images/streakLogo.png",
      desc: "No-code strategy creation and backtesting platform.",
    },
    {
      img: "/images/smallcaseLogo.png",
      desc: "Invest in curated baskets of stocks and ETFs.",
    },
    {
      img: "/images/dittoLogo.png",
      desc: "Insurance advisory platform with honest, spam-free advice.",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="fs-2">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div
        className="row text-muted text-center mt-4"
        style={{ fontSize: "0.85rem" }}
      >
        {partners.map((partner, idx) => (
          <div key={idx} className="col-md-4 p-5">
            <img src={partner.img} alt="partner" style={{ width: "50%" }} />
            <p className="mt-3">{partner.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mb-5">
        <a href="/signup">
          <button className="btn btn-primary fs-5 px-4 py-2 mt-4">
            Sign up for free
          </button>
        </a>
      </div>
    </div>
  );
}

export default Universe;
