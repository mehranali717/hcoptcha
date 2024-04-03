import { AboutUs, Analytics, Footer, Hero, Joinus, Pricing } from "@/sections";
import MainLayout from "../layouts/mainLayout";

const dHome = () => {
  return (
    <MainLayout>
      <Hero />
      <AboutUs />
      <Analytics />
      <Pricing />
      <Joinus />
      <Footer />
    </MainLayout>
  );
};
export default dHome;
