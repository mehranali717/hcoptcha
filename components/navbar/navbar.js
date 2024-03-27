import Link from "next/link";
import "./Navbar.css"

const Navbar = ({ navItems }) => (
  <ul className="navbar-nav mx-auto" id="menu">
    {navItems.map((item, index) => (
      <li className="nav-item" key={index}>
        <Link className="nav-link" aria-current="page" href="">
          {typeof item.navItem === "string" ? (
            item.navItem
          ) : (
            <img src={item.navItem.src}></img>
          )}
        </Link>
      </li>
    ))}
  </ul>
);
export default Navbar;
