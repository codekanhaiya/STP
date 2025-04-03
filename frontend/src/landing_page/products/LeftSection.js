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
      <div className="row p-5 m-5">
        <div className="col-6 p-3">
          <img src={imageURL} alt="Left" style={{ width: "80%" }} />
        </div>
        <div className="col-6 p-3 mt-5 text-muted">
          <h1 className="fs-1">{productName}</h1>
          <p className="mt-4">{productDescription}</p>
          <p className="mt-4">
            <a href={tryDemo}>
              Try demo <i className="fa fa-long-arrow-right"></i>
            </a>
            &nbsp; &nbsp; &nbsp;
            <a href={learnMore}>
              Learn more <i className="fa fa-long-arrow-right"></i>
            </a>
          </p>
          <p className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="google" />
            </a>
            &nbsp; &nbsp; &nbsp;
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="apple" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
