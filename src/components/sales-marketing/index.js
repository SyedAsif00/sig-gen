import React from "react";
import "./index.css";
import { Row, Col, Button } from "antd";
import SalesImg from "../../assets/salesmarketimg.webp";
import useResponsive from "../../hooks/useResponsive";
const SalesAndMarketing = () => {
  const { isMobileSmall, isMobileMedium, isTablet, isDesktop } =
    useResponsive();

  const isSmallOrMediumDevice = isMobileSmall || isMobileMedium;

  return (
    <div style={{ marginTop: isSmallOrMediumDevice ? "70px" : "100px" }}>
      <Row gutter={[26, 26]} align={"middle"}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <span
            style={{
              fontSize: isSmallOrMediumDevice ? "22px" : "24px",
              fontWeight: "500",
              lineHeight: "1.3",
            }}
          >
            Sales and Marketing
          </span>
          <p
            className="salesPara"
            style={{
              fontSize: isSmallOrMediumDevice ? "16px" : "20px",
              color: "#2c4166",
              margin: "30px 0px ",
            }}
          >
            Explore MySignature's features including add-ons, banners, and
            buttons for effective content promotion. Monitor email performance
            with real-time analytics for better follow-up strategies.
          </p>
          <p
            className="salesPara"
            style={{
              fontSize: isSmallOrMediumDevice ? "16px" : "20px",
              color: "#2c4166",
              margin: "30px 0px ",
            }}
          >
            Explore MySignature's features including add-ons, banners, and
            buttons for effective content promotion. Monitor email performance
            with real-time analytics for better follow-up strategies.
          </p>
          <Button
            type="primary"
            size={isSmallOrMediumDevice ? "small" : "large"}
          >
            Create Signature
          </Button>{" "}
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <img
            src={SalesImg}
            width={"80%"}
            height={"90%"}
            style={{
              marginLeft: isSmallOrMediumDevice ? "" : "70px",
              marginTop: isSmallOrMediumDevice ? "20px" : "",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SalesAndMarketing;
