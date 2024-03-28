import { Button } from "@/components";
import heroImg from "@/assets/images/hero-bg.png";
import "./hero.css";
import Image from "next/image";

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="inner">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-7 col-xxl-6">
            <div className="hero-content">
              <h1>
                Seamless <span className="sky-fill">Captcha</span>
                <span className="pink-fill">Solutions,</span> Anytime, Anywhere
              </h1>

              <p>
                Unlock the Full Potential of Websites and Apps with Our
                Cutting-Edge Service
              </p>
              <Button>Our solution</Button>
              <Button>Pricing</Button>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-5 col-xxl-6">
            <div className="hero-media">
              <Image src={heroImg} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Hero;
