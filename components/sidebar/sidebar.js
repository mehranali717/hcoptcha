import sidebarImg from "@/assets/images/Visual.png";
import Image from "next/image";
const Sidebar = () => (
  <div className="col-sm-6 col-md-5 col-lg-5 col-xl-5">
    <div className="auth-media">
      <Image src={sidebarImg} alt="img" />
    </div>
  </div>
);
export default Sidebar;
