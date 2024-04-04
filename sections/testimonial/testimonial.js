import { Slider } from "@/components";
import classes from "./testimonial.module.css"
import data from "@/data/data.json";
const Testimonial = () => (
  <section className="testimonail">
    <div className="container-fluid">
      <div className="inner">
        <div className="row">
          <div className="col-12">
            <h2 className={classes.section_heading}>
              Our Customers <span className="sky-fill">Speak Best !</span>
            </h2>
          </div>
          <Slider data={data} />
        </div>
      </div>
    </div>
  </section>
);
export default Testimonial;
