import React from "react";

function Brokerage() {
  return (
    <div className="container mt-5 mb-5 border-top">
      <div className="row mt-5">
        <div className="col-8 p-4">
          <h3 className="text-center text-primary fs-5 pb-3">
            Brokerage calculator
          </h3>
          <ul>
            <li className="pb-2 pt-3 text-muted">
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li className="pb-2 pt-3 text-muted">
              Digital contract notes will be sent via e-mail.
            </li>
            <li className="pb-2 pt-3 text-muted">
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li className="pb-2 pt-3 text-muted">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li className="pb-2 pt-3 text-muted">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="pb-2 pt-3 text-muted">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-2 p-4">
          <h3 className="text-center text-primary fs-5">List of charges</h3>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
