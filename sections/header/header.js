import { Button, Navbar } from "@/components";
import logoImg from "@/assets/images/logo.png";
import telegramImg from "@/assets/images/telegram.png";
import discordImg from "@/assets/images/Discord.png";
const navItems = [
    {navItem:"Contact"},
    {navItem:telegramImg},
    {navItem:discordImg},
]
import "./header.css";
import Image from "next/image";
const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg">
      <div className="container-lg">
        <a className="navbar-brand header-logo" href="#">
          <Image src={logoImg} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse toggle-menu"
          id="navbarSupportedContent"
        >
          <Navbar navItems={navItems}/>
          <div className="header-btns">
            <Button>Login In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  </header>
);
export default Header;
