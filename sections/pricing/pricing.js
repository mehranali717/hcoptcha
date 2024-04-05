import { Button } from "@/components";
import sellixImg from "@/assets/images/sellix.png";
import paymentImg from "@/assets/images/payment.png";
import Image from "next/image";
import "./pricing.css";
import Title from "@/components/title/title";
const Pricing = () => (
  <section className="pricing">
    <div className="container">
      <div className="inner">
        <div className="row">
          <div className="col-12">
            <Title title="Our Pricing"/>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <div className="pricing-box card">
              <div className="box-inner">
                <h4>
                  <span className="sky-fill">Cheapest</span> prices on the
                  Market !
                </h4>
                <h3>0.002$</h3>
                <h5>Per captcha solved</h5>

                <p>What are you waiting for ?</p>
                <Button>Subscribe now</Button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7">
            <div className="pricing-card card">
              <h3>Our Payment Service Provider</h3>
              <p>
                We are working with a renowned payment service provider in order
                to bring you the
                <span className="sky-fill">best customer experience</span>
                possible and ensure that all your
                <span className="sky-fill">crypto payments</span> toward our
                service are made easy,
                <span className="sky-fill">secured</span> and straight forward !
              </p>

              <div className="pricing-card-media sellax-image-wrapper">
                <Image src={sellixImg} alt="image" />
              </div>
            </div>
            <div className="pricing-card card">
              <h3>Our Payment Service Provider</h3>
              <div className="pricing-card-media payment-image-wrapper">
                <Image src={paymentImg} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Pricing;
