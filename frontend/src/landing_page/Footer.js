import React from "react";

function Footer() {
  return (
    <footer className="border-top bg-light">
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              style={{ width: "50%" }}
            />
            <p className="mt-4">
              © 2010 - 2025, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>
          <div className="col">
            <h3 className="fs-5 mb-4">Comapny</h3>

            <a href="/">About</a>
            <br />

            <a href="/">Products</a>
            <br />

            <a href="/">Pricing</a>
            <br />

            <a href="/">Referral programme</a>
            <br />

            <a href="/">Careers</a>
            <br />

            <a href="/">Zerodha.tech</a>
            <br />

            <a href="/">Open source</a>
            <br />

            <a href="/">Press & media</a>
            <br />

            <a href="/">Zerodha Cares (CSR)</a>
            <br />
          </div>

          <div className="col">
            <h3 className="fs-5 mb-4">Support</h3>

            <a href="/">Contact us</a>
            <br />

            <a href="/">Support portal</a>
            <br />

            <a href="/">Z-Connect blog</a>
            <br />

            <a href="/">List of charges</a>
            <br />

            <a href="/">Downloads & resources</a>
            <br />

            <a href="/">Videos</a>
            <br />

            <a href="/">Market overview</a>
            <br />

            <a href="/">How to file a complaint?</a>
            <br />

            <a href="/">Status of your complaints</a>
            <br />
          </div>

          <div className="col">
            <h3 className="fs-5 mb-4">Account</h3>

            <a href="/">Open an account</a>
            <br />

            <a href="/">Fund transfer</a>
            <br />
          </div>
        </div>
        <div
          className="mt-5 mb-5 text-muted text-justify"
          style={{ fontSize: "0.80rem" }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>

          <div className="d-flex justify-content-center">
            <a className="p-3 pb-0" href="/">
              NSE
            </a>
            <a className="p-3 pb-0" href="/">
              BSE
            </a>
            <a className="p-3 pb-0" href="/">
              MCX
            </a>
            <a className="p-3 pb-0" href="/">
              Terms & conditions
            </a>
            <a className="p-3 pb-0" href="/">
              Policies & procedures
            </a>
            <a className="p-3 pb-0" href="/">
              Privacy policy
            </a>
            <a className="p-3 pb-0" href="/">
              Disclosure{" "}
            </a>
            <a className="p-3 pb-0" href="/">
              For investor's attention{" "}
            </a>
            <a className="p-3 pb-0" href="/">
              Investor charter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
