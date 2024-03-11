import React from "react";
import "./index.css"; // Import our custom CSS module
import { Collapse } from "antd";

import useResponsive from "../../hooks/useResponsive";

const { Panel } = Collapse;

const Footer = () => {
  const { isMobileSmall } = useResponsive();

  const infoLinks = [
    "About us",
    "Contact us",
    "Terms",
    "Privacy Policy",
    "Cookies Policy",
  ];
  const resourceLinks = [
    "Knowledge base",
    "Blog",
    "Email signature examples",
    "Professional email signatures",
  ];
  const toolLinks = [
    "Google Workspace",
    "Email signature generator",
    "Email tracking",
    "Handwritten signature generator",
    "Font signature generator",
  ];
  const languages = ["Portuguese", "Español", "Deutsch"];

  const renderLinks = (links) =>
    links.map((link, index) => <li key={index}>{link}</li>);

  const renderSection = (title, content) => {
    return isMobileSmall ? (
      <Collapse bordered={false}>
        <Panel header={title} key={title}>
          <ul>{renderLinks(content)}</ul>
        </Panel>
      </Collapse>
    ) : (
      <div className="column">
        <h3>{title}</h3>
        <ul>{renderLinks(content)}</ul>
      </div>
    );
  };

  return (
    <footer className="footer">
      <div className={isMobileSmall ? "container-mobile" : "container"}>
        {renderSection("Info", infoLinks)}
        {renderSection("Resources", resourceLinks)}
        {renderSection("Tools", toolLinks)}
        {renderSection("Languages", languages)}
        {isMobileSmall && <div className="social-media"></div>}
      </div>
      {!isMobileSmall && <div className="social-media"></div>}
      <div className="bottomBar">{/* Bottom bar content here */}</div>
    </footer>
  );
};

export default Footer;
