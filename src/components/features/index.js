import React from "react";
import { Card, Row, Col } from "antd";
import {
  SettingOutlined,
  ShoppingCartOutlined,
  SyncOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import "./index.css"; // make sure to create this CSS file

const featureData = [
  {
    title: "Personalized Branding",
    description:
      "Customize your email signature for consistent brand recognition across communications.",
    icon: <SettingOutlined />,
  },
  {
    title: "Contact Information",
    description:
      "Essential details ensure seamless communication, facilitating connections with recipients.",
    icon: <ShoppingCartOutlined />,
  },
  {
    title: "Social Media Links",
    description:
      "Integrate links, connecting across platforms, enhancing online presence.",
    icon: <SyncOutlined />,
  },
  {
    title: "Professional Design",
    description:
      "Opt for clean, appealing layout, leaving positive impression, reinforcing",
    icon: <SmileOutlined />,
  },

  {
    title: "Legal Disclaimers",
    description: "Ensure compliance, maintaining transparency and credibility.",
    icon: <SettingOutlined />,
  },
  {
    title: "Promotional Banners",
    description:
      "Showcase services, events, products, leveraging signature for effective marketing",
    icon: <SettingOutlined />,
  },
];

const Features = () => {
  return (
    <div className="" style={{ marginTop: "100px" }}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "30px", color: "#696969", fontWeight: "300" }}>
          SigGen<span style={{ color: "#4285f4", fontSize: "30px" }}>.</span>{" "}
          Features
        </h1>
        <p style={{ fontSize: "20px", color: "#C0C0C0", marginTop: "10px" }}>
          Elevate your email signature with captivating design and essential
          information.
        </p>
      </div>
      <Row gutter={[16, 16]} className="features-row">
        {featureData.map((feature, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card className="feature-card" hoverable>
              <div className="feature-icon">{feature.icon}</div>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <a href="#learn-more" className="learn-more-link">
                  Learn More
                </a>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Features;
