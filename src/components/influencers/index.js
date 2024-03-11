import React from "react";
import "./index.css";
import { Row, Col, Button } from "antd";
import SalesImg from "../../assets/salesmarketimg.webp";
import infImg from "../../assets/influencers-x2.webp";
const SalesAndMarketing = () => {
  return (
    <div className="salesAndMarketing-container">
      <Row gutter={[26, 26]}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <img
            src={infImg}
            width={"90%"}
            height={"90%"}
            style={{ marginLeft: "0px" }}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <span className="salesTitle">Influencers</span>
          <p
            className="salesPara"
            style={{ fontSize: "18px", color: "#2c4166", margin: "30px 0px " }}
          >
            Email signatures serve as effective means to bolster brand
            visibility, nurture connections with your audience, showcase
            expertise, and inject a touch of personality. Integrating compelling
            calls-to-action and eye-catching banners into your email signature
            empowers recipients to interact with your content, visit your
            website, join your newsletter, or connect with you across social
            media platforms.
          </p>
          <p
            className="salesPara"
            style={{ fontSize: "18px", color: "#2c4166", margin: "30px 0px " }}
          >
            Leveraging email signatures can greatly amplify brand exposure,
            foster meaningful connections, demonstrate authority in your field,
            and infuse a sense of individuality into your correspondence.
          </p>
          <Button type="primary" size="large">
            Create Signature
          </Button>{" "}
        </Col>
      </Row>
    </div>
  );
};

export default SalesAndMarketing;
