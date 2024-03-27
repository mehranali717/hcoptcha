import { Button } from "@/components";
import heroImg from "@/assets/images/hero-bg.png";
import "./hero.css";
import Image from "next/image";

const Hero = () => (
  <section class="hero">
    <div class="container">
      <div class="inner">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6 col-xl-7 col-xxl-6">
            <div class="hero-content">
              <h1>
                Seamless <span class="sky-fill">Captcha</span>
                <span class="pink-fill">Solutions,</span> Anytime, Anywhere
              </h1>

              <p>
                Unlock the Full Potential of Websites and Apps with Our
                Cutting-Edge Service
              </p>
              <Button>Our solution</Button>
              <Button>Pricing</Button>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-6 col-xl-5 col-xxl-6">
            <div class="hero-media">
              <Image src={heroImg} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Hero;
