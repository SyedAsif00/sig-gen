import React from "react";
import { Row, Col, Card } from "antd";
import CommunicateTwoImg from "../../assets/communicate-two.svg";
import { Meta } from "antd/es/list/Item";
import "./index.css";
const Communicate = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Row gutter={[30, 30]}>
        <Col xs={24} sm={24} md={12} lg={10} style={{}}>
          <h1>Easy to customize your Email Signature</h1>
          <p style={{ fontSize: "20px", margin: "30px 0px 0px 0px" }}>
            Facilitate client engagement via various channels like website and
            social networks. Enhance brand promotion by incorporating clickable
            banners, landing page links, and interactive CTA buttons.
          </p>

          <Card
            className="custom-card"
            hoverable
            style={{
              width: "100%",
              borderLeft: "4px solid #4285f4",
              marginTop: "50px",
            }} // The blue border is set here as well
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <img
                src={CommunicateTwoImg}
                style={{
                  borderRadius: "100%",
                  height: "30px",
                  width: "30px",
                }}
              />
              <Meta title="Grey Simpson" description="Co-Founder, XYZ Inc." />
            </div>
            <p style={{ fontStyle: "italic", marginTop: "10px" }}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ducimus
              vitae ipsa asperiores inventore aperiam iure?”
            </p>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={14}>
          <img
            className=""
            src={CommunicateTwoImg}
            width="100%"
            height="fit-content"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Communicate;
