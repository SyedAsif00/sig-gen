import React from "react";
import "./index.css"; // This will be your stylesheet

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Features", path: "/features" },
  { title: "About Us", path: "/about" },
  { title: "Testimonials", path: "/testimonials" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand-title">
          SigGEN
          <span className="brandTitle-dot">.</span>
        </div>
        <ul className="nav-menu">
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <a href={link.path} className="nav-links">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
