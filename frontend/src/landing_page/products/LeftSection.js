import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center p-5">
        <div className="col-md-6">
          <img src={imageURL} alt={productName} style={{ width: "80%" }} />
        </div>
        <div className="col-md-6 text-muted mt-4 mt-md-0">
          <h1 className="fs-1">{productName}</h1>
          <p className="mt-4">{productDescription}</p>
          <p className="mt-4">
            <a href={tryDemo}>
              Try demo <i className="fa fa-long-arrow-right"></i>
            </a>{" "}
            &nbsp;&nbsp;
            <a href={learnMore}>
              Learn more <i className="fa fa-long-arrow-right"></i>
            </a>
          </p>
          <div className="mt-4">
            <a href={googlePlay}>
              <img
                src="/images/googlePlayBadge.svg"
                alt="Google Play"
                style={{ height: "40px" }}
              />
            </a>
            &nbsp;&nbsp;
            <a href={appStore}>
              <img
                src="/images/appstoreBadge.svg"
                alt="App Store"
                style={{ height: "40px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
