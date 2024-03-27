import { Button } from "@/components";
import aboutImg from "@/assets/images/about.png";
import rebortImg from "@/assets/images/rebot.png";
import Image from "next/image";
import "./aboutus.css"
const AboutUs = () => (
  <section class="about">
    <div class="container">
      <div class="inner">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-7 col-xl-6 col-xxl-7">
            <div class="about-media">
              <Image src={aboutImg} alt="img" />
              <div class="about-rebot">
                <Image src={rebortImg} alt="img" />
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-5 col-xl-6 col-xxl-5">
            <div class="about-left-side">
              <h3>
                Best <span class="sky-fill">Captcha</span> Solver
              </h3>
              <p>
                We develop an affordable service that allows you to solve
                captchas easily and quickly. By connecting to our intuitive API,
                you can solve any captcha that you want, on the website of your
                choice, may it be Discord, Epic Games, etc. By subscribing to
                our product, you get access to a software that is updated every
                day and thus that is always usable and up-to-date for the new
                captcha technologies.
              </p>
              <Button>Get started</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default AboutUs;
