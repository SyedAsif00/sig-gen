import React from "react";
import { Row, Col, Button, Typography } from "antd";
import "./index.css"; // Make sure to create this CSS file for additional styling
import IntroImage from "../../assets/introImg.svg";
import useResponsive from "../../hooks/useResponsive";

const YourComponent = () => {
  const { isMobileSmall, isMobileMedium, isTablet, isDesktop } =
    useResponsive();
  const isSmallorMediumDevice = isMobileSmall || isMobileMedium;
  return (
    <Row
      gutter={[16, 16]}
      className="hero-section"
      align={"middle"}
      style={{ marginTop: isSmallorMediumDevice ? "20px" : "" }}
    >
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <p
          style={{
            fontSize: isMobileSmall ? "35px" : "48px",
            fontWeight: "400",
            lineHeight: "1.2",
            color: "#000000",
            marginBottom: "40px",
          }}
        >
          Email signature for personal branding enhancement.{" "}
        </p>
        <p
          style={{
            width: isMobileSmall ? "" : "23em",
            fontSize: isMobileSmall ? "16px" : "20px",
            color: "#2c4166",
          }}
        >
          Utilize your email signature as a marketing tool, promoting key
          services, events, or products to drive business growth
        </p>
        <Button
          type="primary"
          size={isMobileSmall ? "small" : "large"}
          style={{ marginBottom: isMobileSmall ? "10px" : "" }}
        >
          Create Signature
        </Button>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        {/* You can place your image here. Use an img tag or a background image in CSS */}
        <div className="image-container">
          <img
            src={IntroImage}
            style={{
              width: isMobileSmall ? "100%" : "95%",
              height: "fit-content",
              marginLeft: isMobileSmall ? "" : "90px",
            }}
          />
        </div>
      </Col>
    </Row>
  );
};

export default YourComponent;
