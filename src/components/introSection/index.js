import React from "react";
import { Row, Col, Button, Typography } from "antd";
import "./index.css"; // Make sure to create this CSS file for additional styling
import IntroImage from "../../assets/introImg.svg";

const YourComponent = () => {
  return (
    <Row align="" gutter={[16, 16]} className="hero-section">
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <p
          style={{
            fontSize: "48px",
            fontWeight: "400",
            lineHeight: "1.2",
            color: "#000000",
            marginBottom: "40px",
          }}
        >
          Email signature for personal branding enhancement.{" "}
        </p>
        <p style={{ width: "23em", fontSize: "20px" }}>
          Utilize your email signature as a marketing tool, promoting key
          services, events, or products to drive business growth
        </p>
        <Button type="primary" size="large">
          Create Signature
        </Button>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        {/* You can place your image here. Use an img tag or a background image in CSS */}
        <div className="image-container">
          <img
            src={IntroImage}
            style={{ width: "95%", height: "fit-content", marginLeft: "90px" }}
          />
        </div>
      </Col>
    </Row>
  );
};

export default YourComponent;
