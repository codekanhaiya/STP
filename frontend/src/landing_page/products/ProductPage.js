import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="/images/kite.png"
        productName="Kite"
        productDescription="Ultra-fast trading platform with market data, charts, elegant UI—available on Android & iOS."
        tryDemo="/"
        learnMore="/"
        googlePlay="https://play.google.com/"
        appStore="https://apps.apple.com/"
      />
      <RightSection
        productName="Console"
        productDescription="Central dashboard for your account with visual trade/investment insights."
        learnMore="/"
        imageURL="/images/console.png"
      />
      <LeftSection
        imageURL="/images/coin.png"
        productName="Coin"
        productDescription="Commission-free direct mutual funds delivered to your Demat account."
        tryDemo="/"
        learnMore="/"
        googlePlay="https://play.google.com/"
        appStore="https://apps.apple.com/"
      />
      <RightSection
        productName="Kite Connect API"
        productDescription="HTTP/JSON APIs to build trading platforms or investment apps."
        learnMore="/"
        imageURL="/images/kiteconnect.png"
      />
      <LeftSection
        imageURL="/images/varsity.png"
        productName="Varsity mobile"
        productDescription="Stock market lessons in cards—learn on the go with illustrations."
        tryDemo="/"
        learnMore="/"
        googlePlay="https://play.google.com/"
        appStore="https://apps.apple.com/"
      />
      <p className="text-center fs-5 p-5 text-muted">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;
