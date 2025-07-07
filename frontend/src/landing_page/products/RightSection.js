import React from "react";

function RightSection({
  productName,
  productDescription,
  learnMore,
  imageURL,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center p-5">
        <div className="col-md-6 text-muted mt-4 mt-md-0">
          <h1 className="fs-1">{productName}</h1>
          <p className="mt-4">{productDescription}</p>
          <a href={learnMore} className="mt-4 d-inline-block">
            Learn more <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
        <div className="col-md-6 text-center">
          <img src={imageURL} alt={productName} style={{ width: "80%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
