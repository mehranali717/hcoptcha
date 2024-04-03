import { Button, Navbar } from "@/components";
import logoImg from "@/assets/images/logo.png";
import telegramImg from "@/assets/images/telegram.png";
import discordImg from "@/assets/images/Discord.png";
const navItems = [
  { navItem: "Contact" },
  { navItem: telegramImg },
  { navItem: discordImg },
];
import "./header.css";
import Image from "next/image";
import Link from "next/link";
const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg">
      <div className="container-lg">
        <Link className="navbar-brand header-logo" href="/">
          <Image src={logoImg} alt="logo" />
        </Link>
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
          <Navbar navItems={navItems} />
          <div className="header-btns">
          <Link href="/"> <Button>
              Login In
            </Button></Link>
            <Link href="/profile"> <Button>
              Sign Up
            </Button></Link>
          </div>
        </div>
      </div>
    </nav>
  </header>
);
export default Header;
