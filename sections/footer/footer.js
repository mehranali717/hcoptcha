import Image from "next/image";
import LogoImg from "@/assets/images/logo.png";
import Link from "next/link";
import "./footer.css"
import telegramImg from "@/assets/images/telegram.png";
import discordImg from "@/assets/images/Discord.png";
import { Navbar } from "@/components";
const navItems = [
  { navItem: "Contact" },
  { navItem: telegramImg },
  { navItem: discordImg },
];
const Footer = () => (
  <footer>
    <div className="container">
      <div className="inner">
        <div className="row">
          <div className="col-12 col-sm-4 col-md-4 col-lg-4">
            <div className="footer-logo">
              <Image src={LogoImg} alt="img" />
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="footer-links">
             
              <Navbar navItems={navItems}/>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="footer-links">
              <h3>legal</h3>
              <ul>
                <li>
                  <Link href="">Terms of Services</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12">
            <div className="footer-copy">
              <p>Copyrights © 2020 - 2023 All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
