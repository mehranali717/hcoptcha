import { AboutUs, Analytics, Footer, Hero, Joinus, Pricing, Testimonial } from "@/sections";
import MainLayout from "../layouts/mainLayout";

const dHome = () => {
  return (
    <MainLayout>
      <Hero />
      <AboutUs />
      <Analytics />
      <Pricing />
      <Testimonial />
      <Joinus />
      <Footer />
    </MainLayout>
  );
};
export default dHome;
