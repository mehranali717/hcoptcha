import joinusImg from "@/assets/images/help.png";
import joinusbgImg from "@/assets/images/help-bg.png";
import "./joinus.css";
import Image from "next/image";
import { Button } from "@/components";
const Joinus = () => (
  <section className="about help">
    <div className="container">
      <div className="inner">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <div className="about-media">
              <Image src={joinusImg} alt="img" />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7">
            <div className="about-left-side">
              <h3>
                Need any <span className="sky-fill">help ?</span>
              </h3>
              <p>
                We are here for you ! Customer satisfaction is what we value the
                most. You can join our telegram group to ask us any question or
                talk to us about any issue you encountered. Our team is devoted
                and very responsive and will be glad to help you as best as we
                can. We offer support in English and French !
              </p>
              <Button>Join us on telegram</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="help-bg">
      <Image src={joinusbgImg} alt="img" />
    </div>
  </section>
);
export default Joinus;
