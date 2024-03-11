import React from "react";
import "./index.css";
import { Row, Col, Button } from "antd";
import SalesImg from "../../assets/salesmarketimg.webp";
const SalesAndMarketing = () => {
  return (
    <div className="salesAndMarketing-container">
      <Row gutter={[26, 26]}>
        <Col xs={24} sm={24} md={12} lg={12} style={{ textAlign: "" }}>
          <span className="salesTitle">Sales and Marketing</span>
          <p
            className="salesPara"
            style={{ fontSize: "18px", color: "#2c4166", margin: "30px 0px " }}
          >
            Explore MySignature's features including add-ons, banners, and
            buttons for effective content promotion. Monitor email performance
            with real-time analytics for better follow-up strategies.
          </p>
          <p
            className="salesPara"
            style={{ fontSize: "18px", color: "#2c4166", margin: "30px 0px " }}
          >
            Explore MySignature's features including add-ons, banners, and
            buttons for effective content promotion. Monitor email performance
            with real-time analytics for better follow-up strategies.
          </p>
          <Button type="primary" size="large">
            Create Signature
          </Button>{" "}
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <img
            src={SalesImg}
            width={"80%"}
            height={"90%"}
            style={{ marginLeft: "70px" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SalesAndMarketing;
