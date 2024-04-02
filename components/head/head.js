import Image from "next/image";
import classes from "./head.module.css";
import logoImg from "@/assets/images/logo.png"
const Head =()=>{
    return <div className={classes.head_Title}>
    <h3>User Panel</h3>
    <div className={classes.user_logo}>
      <Image src={logoImg} alt="img" />
    </div>
  </div>
}
export default Head