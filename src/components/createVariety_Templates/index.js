import React from "react";
import { Row, Col, Card, Button } from "antd";
import CommunicateImg from "../../assets/communicate.svg";
import { Meta } from "antd/es/list/Item";
import "./index.css";
import useResponsive from "../../hooks/useResponsive";

const Communicate = () => {
  const { isMobileSmall, isMobileMedium } = useResponsive();
  const isSmallOrMediumDevice = isMobileSmall || isMobileMedium;

  return (
    <div style={{ marginTop: isSmallOrMediumDevice ? "70px" : "100px" }}>
      <Row gutter={[30, 30]}>
        {/* Column order for small and medium devices */}
        {isSmallOrMediumDevice ? (
          <>
            <Col xs={24} sm={24} md={12} lg={10} style={{}}>
              <span
                style={{
                  fontSize: isSmallOrMediumDevice ? "22px" : "24px",
                  fontWeight: "500",
                  lineHeight: "1.3",
                }}
              >
                Variety of templates to choose from
              </span>
              <p
                style={{
                  fontSize: isSmallOrMediumDevice ? "16px" : "20px",
                  margin: "30px 0px 0px 0px",
                  color: "#2c4166",
                }}
              >
                Access a range of professionally crafted email signature
                templates on MySignature. Tailor formatting, element
                arrangement, and colors to craft a signature amplifying your
                business growth.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: isSmallOrMediumDevice ? "flex-start" : "center",
                  justifyContent: isSmallOrMediumDevice
                    ? "flex-start"
                    : "center",
                }}
              >
                <Button
                  type="primary"
                  size={isSmallOrMediumDevice ? "small" : "large"}
                  style={{
                    marginTop: isSmallOrMediumDevice ? "20px" : "60px",
                    marginBottom: isSmallOrMediumDevice ? "30px" : "0px",
                  }}
                >
                  Create Signature
                </Button>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={14}>
              <img
                className=""
                src={CommunicateImg}
                width="100%"
                height="fit-content"
              />
            </Col>
          </>
        ) : (
          // Column order for large devices
          <>
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
                Access a range of professionally crafted email signature
                templates on MySignature. Tailor formatting, element
                arrangement, and colors to craft a signature amplifying your
                business growth.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  type="primary"
                  size="large"
                  style={{ marginTop: "60px" }}
                >
                  Create Signature
                </Button>
              </div>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};

export default Communicate;
