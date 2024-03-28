import "./analytics.css";
const Analytics = () => (
  <section className="analytics">
    <div className="container">
      <div className="inner">
        <div className="row">
          <div className="col-12">
            <h2>Unveiling Our Unique Attributes</h2>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <div className="analytics-box">
              <h5>Trusted</h5>
              <h3>
                <span id="number1">1000</span>+
              </h3>
              <p>Happy Customers</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <div className="analytics-box">
              <h5>Efficient</h5>
              <h3>
                <span id="number2">400000</span>
              </h3>
              <p>Captcha solved every day</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <div className="analytics-box">
              <h5>Fast</h5>
              <h3>
                <span id="number3">13</span>Sec
              </h3>
              <p>In average to solve a Captcha</p>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <div className="analytics-box">
              <h5>Stable</h5>
              <h3>
                <span id="number4">460</span>
              </h3>
              <p>Captcha solved every minute</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Analytics;
