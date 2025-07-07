import React from "react";

function Brokerage() {
  return (
    <div className="container mt-5 mb-5 border-top pt-5">
      <div className="row">
        <div className="col-md-8 mb-4">
          <h3 className="text-primary text-center mb-4">
            Brokerage Calculator & Terms
          </h3>
          <ul className="text-muted">
            <li className="mb-3">
              Call & Trade / RMS auto square-off: ₹50 + GST per order.
            </li>
            <li className="mb-3">Contract notes are emailed digitally.</li>
            <li className="mb-3">
              Physical contract notes: ₹20 per note + courier charges.
            </li>
            <li className="mb-3">
              NRI (non-PIS): 0.5% or ₹100 per executed equity order (whichever
              is lower).
            </li>
            <li className="mb-3">
              NRI (PIS): 0.5% or ₹200 per executed equity order (whichever is
              lower).
            </li>
            <li className="mb-3">
              If account is in debit balance, orders incur ₹40 per execution.
            </li>
          </ul>
        </div>
        <div className="col-md-4 text-center">
          <h4 className="text-primary mb-4">Need full charges list?</h4>
          <a href="/" className="btn btn-outline-primary">
            View All Charges
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
