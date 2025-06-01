// components/ThankYou.js
import React from 'react';

const ThankYou = ({ leadId }) => {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1>Thank you for applying!</h1>
      <p>We will get back to you shortly.</p>
      {leadId && (
        <p style={{ fontWeight: 'bold', marginTop: '20px' }}>
          Your reference no. is: <span style={{ color: '#007bff' }}>{leadId}</span>
        </p>
      )}
      <div className="col-lg-12 d-none d-sm-block">
        <div className="d-flex justify-content-center">
          <img
            src="/images/sign-in-up-bg.png"
            className="imagewele"
            alt="welcome"
          />
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
