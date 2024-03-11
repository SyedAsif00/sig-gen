import React from "react";
import { Row, Col, Card, Button } from "antd";
import CommunicateImg from "../../assets/communicate.svg";
import { Meta } from "antd/es/list/Item";
import "./index.css";
const Communicate = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Row gutter={[30, 30]}>
        <Col xs={24} sm={24} md={12} lg={14}>
          <img
            className=""
            src={CommunicateImg}
            width="100%"
            height="fit-content"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={10} style={{}}>
          <h1>Variety of templates to choose from</h1>
          <p style={{ fontSize: "20px", margin: "30px 0px 0px 0px" }}>
            Access a range of professionally crafted email signature templates
            on MySignature. Tailor formatting, element arrangement, and colors
            to craft a signature amplifying your business growth.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button type="primary" size="large" style={{ marginTop: "60px" }}>
              Create Signature
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Communicate;
