import React from "react";
import "./index.css";
import { Row, Col, Button } from "antd";
import SalesImg from "../../assets/salesmarketimg.webp";
const SalesAndMarketing = () => {
  return (
    <div className="salesAndMarketing-container">
      <Row gutter={[26, 26]}>
        <Col xs={24} sm={24} md={12} lg={12} style={{ textAlign: "" }}>
          <span className="salesTitle">Freelancers</span>
          <p
            className="salesPara"
            style={{ fontSize: "18px", color: "#2c4166", margin: "30px 0px " }}
          >
            You never get a second shot at a first impression! Utilize your
            email signature as a prime space to showcase your portfolio links,
            social media profiles, such as Dribble or Behance. Enhance
            accessibility for potential clients by including an appointment
            scheduling link, streamlining the connection process.
          </p>
          <p
            className="salesPara"
            style={{ fontSize: "18px", color: "#2c4166", margin: "30px 0px " }}
          >
            Remember, first impressions matter! Transform your email signature
            into a dynamic hub for your portfolio links, social media handles
            like Dribble or Behance.
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
