import React from "react";
import "./payments.css";
const OfferLetter = () => {
  return (
    <div className="payment-wrapper">
      <h2>Payments</h2>
      <div className="body">
        <div className="content col1">
          <h4> Payment Navigations</h4>
          <button>Invoices</button>
          <button>Bank Details</button>
        </div>
        <div className="content col2">
          <div>
            Payment Date:<b>Nov. 19, 2022, 7:00 p.m.</b>
          </div>
          <div>Payment for:</div>
          <div>Items:</div>
        </div>
        <div className="content col3">
          <div>
            Lifetime Earning <b>$100</b>
          </div>
          <div>
            Spend Amount <b>$10</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferLetter;
