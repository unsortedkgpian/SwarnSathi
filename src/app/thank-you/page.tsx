// pages/thank-you.js
export default function ThankYou() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
         <h1>Thank you for applying!</h1>
      <p>We will get back to you soon.</p>
        <div className="col-lg-12 d-none d-sm-block">
            <div className="d-flex justify-content-center">
                <img
                src="/images/sign-in-up-bg.png"
                className="imagewel"
                alt="welcome"
                 />
            </div>
        </div>
      {/* <h1>Thank you for applying!</h1>
      <p>We will get back to you soon.</p> */}
    </div>
  );
}
