import React from "react";

function RightSection({
  productName,
  productDescription,
  learnMore,
  imageURL,
}) {
  return (
    <div className="container mt-5">
      <div className="row p-5 m-5">
        <div className="col-6 p-3 mt-5 text-muted">
          <h1 className="fs-1">{productName}</h1>
          <p className="mt-4">{productDescription}</p>
          <p className="mt-4">
            <a href={learnMore}>
              Learn more <i className="fa fa-long-arrow-right"></i>
            </a>
          </p>
        </div>

        <div className="col-6 p-3">
          <img src={imageURL} alt="Left" style={{ width: "80%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
