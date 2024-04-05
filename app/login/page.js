import telegramImg from "@/assets/images/telegram.png";
import discordImg from "@/assets/images/Discord.png";
import "./page.css";
import logoImg from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button, Navbar } from "@/components";
import Input from "@/components/input/input";
const navItems = [
  { navItem: "Contact" },
  { navItem: telegramImg },
  { navItem: discordImg },
];
const Login = () => {
  return <div className="col-sm-6 col-md-7 col-lg-7 col-xl-7">
    <div className="auth-right">
      <div className="auth-logo">
        <Image src={logoImg} alt="img" />
      </div>
      <div className="auth-toggle">
        <div className="tab-lists">
          <ul className="nav nav-tabs" id="myTabs" role="tablist" data-bs-tabs="tabs">
            <li className="nav-item" role="presentation">
              <Link
                className="nav-link active"
                aria-current="true"
                data-bs-toggle="tab"
                href="#dhcp"
              >
                Log in
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link className="nav-link" data-bs-toggle="tab" href="#static">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
        <form className="card-body tab-content">
          <div className="tab-pane active" id="dhcp">
            <Input type="text" placeholder="Enter Name" />
            <Input type="password" placeholder="Enter Password" />
            <div className="checked">
              <div className="checkbox_wrapper">
                <Input type="checkbox" name="Remember" id="horns"/>
                <label htmlFor="horns">Remember me</label>
              </div>

              <h5 className="" data-bs-toggle="modal" data-bs-target="#myModal">
                Forgot password
              </h5>
            </div>
            <Link href="/home"><Button type="submit" className="w-100">
              Login
            </Button></Link>

            <Link href="/home"> <Button type="submit" className="google-with w-100">
              Sign in with google
            </Button>
            </Link>
          </div>
          <div className="tab-pane " id="static">
            <Input type="text" placeholder="Enter User Name" />
            <Input type="email" placeholder="Enter User Email" />
            <Input type="password" placeholder="Enter Password" />
            <Link href="/home"><Button type="submit" className="w-100">
              Sign Up
            </Button></Link>

            <Link href="/home"> <Button type="submit" className="google-with w-100">
              Sign in with google
            </Button>
            </Link>
          </div>
        </form>
        <Navbar navItems={navItems}/>
        {/* <div className="auth-links">
          <div className="profile-list">
            <ul>
              <li>
                <Link href="">contact</Link>
              </li>
              <li>
                <Link href="">
                  <Image src={telegramImg} alt="img" />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Image src={discordImg} alt="img" />
                </Link>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  </div>
};

export default Login;
