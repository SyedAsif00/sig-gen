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
    title: "Marketing Consulting",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    icon: <SettingOutlined />,
  },
  {
    title: "Market Analysis",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    icon: <ShoppingCartOutlined />,
  },
  {
    title: "Easy Purchase",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    icon: <SyncOutlined />,
  },
  {
    title: "Free Updates",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    icon: <SmileOutlined />,
  },

  {
    title: "Easy Plugin",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    icon: <SettingOutlined />,
  },
  {
    title: "Easy Plugin",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    icon: <SettingOutlined />,
  },
];

const Features = () => {
  return (
    <div className="" style={{ marginTop: "100px" }}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "30px", color: "#696969", fontWeight: "300" }}>
          Imagine Features
        </h1>
        <p style={{ fontSize: "20px", color: "#C0C0C0" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos
          quaerat sapiente nam, id vero.
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
