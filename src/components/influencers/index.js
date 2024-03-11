import React from "react";
import "./index.css";
import { Row, Col, Button } from "antd";
import SalesImg from "../../assets/salesmarketimg.webp";
import infImg from "../../assets/influencers-x2.webp";
import useResponsive from "../../hooks/useResponsive";

const SalesAndMarketing = () => {
  const { isMobileSmall, isMobileMedium } = useResponsive();
  const isSmallOrMediumDevice = isMobileSmall || isMobileMedium;

  return (
    <div style={{ marginTop: isSmallOrMediumDevice ? "70px" : "100px" }}>
      <Row gutter={[26, 26]} align="middle">
        {/* Column order for small and medium devices */}
        {isSmallOrMediumDevice ? (
          <>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              style={{ display: "flex", alignItems: "center" }}
            >
              <div>
                <span className="salesTitle">Influencers</span>
                <p
                  className="salesPara"
                  style={{
                    fontSize: isSmallOrMediumDevice ? "16px" : "20px",
                    color: "#2c4166",
                    margin: "30px 0px ",
                  }}
                >
                  Email signatures serve as effective means to bolster brand
                  visibility, nurture connections with your audience, and
                  showcase expertise with professionalism and flair.
                </p>
                <p
                  className="salesPara"
                  style={{
                    fontSize: isSmallOrMediumDevice ? "16px" : "20px",
                    color: "#2c4166",
                    margin: "30px 0px ",
                  }}
                >
                  Leveraging email signatures can greatly amplify brand
                  exposure, foster meaningful connections, demonstrate authority
                  in your field, and infuse a sense of individuality into your
                  correspondence.
                </p>
                <Button
                  type="primary"
                  size={isSmallOrMediumDevice ? "small" : "large"}
                >
                  Create Signature
                </Button>{" "}
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <img
                src={infImg}
                width={"90%"}
                height={"90%"}
                style={{ marginLeft: "0px" }}
              />
            </Col>
          </>
        ) : (
          // Column order for large devices
          <>
            <Col xs={24} sm={24} md={12} lg={12}>
              <img
                src={infImg}
                width={"90%"}
                height={"90%"}
                style={{ marginLeft: "0px" }}
              />
            </Col>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              style={{ display: "flex", alignItems: "center" }}
            >
              <div>
                <span className="salesTitle">Influencers</span>
                <p
                  className="salesPara"
                  style={{
                    fontSize: "18px",
                    color: "#2c4166",
                    margin: "30px 0px ",
                  }}
                >
                  Email signatures serve as effective means to bolster brand
                  visibility, nurture connections with your audience, and
                  showcase expertise with professionalism and flair.
                </p>
                <p
                  className="salesPara"
                  style={{
                    fontSize: "18px",
                    color: "#2c4166",
                    margin: "30px 0px ",
                  }}
                >
                  Leveraging email signatures can greatly amplify brand
                  exposure, foster meaningful connections, demonstrate authority
                  in your field, and infuse a sense of individuality into your
                  correspondence.
                </p>
                <Button type="primary" size="large">
                  Create Signature
                </Button>{" "}
              </div>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};

export default SalesAndMarketing;
