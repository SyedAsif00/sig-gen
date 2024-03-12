import React, { useState, useEffect } from "react";
import "./index.css"; // This will be your stylesheet
import useResponsive from "../../hooks/useResponsive";
const navLinks = [
  { title: "Home", path: "/" },
  { title: "Features", path: "/features" },
  { title: "About Us", path: "/about" },
  { title: "Testimonials", path: "/testimonials" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const { isMobileSmall, isMobileMedium, isTablet, isDesktop } =
    useResponsive();

  const isSmallOrMediumDevice = isMobileSmall || isMobileMedium;

  const [shadow, setShadow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${shadow ? "shadow" : ""}`}>
      <div className="navbar-container">
        <div style={{ fontSize: isSmallOrMediumDevice ? "20px" : "24px" }}>
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
