import React from "react";
import { Collapse, Button } from "antd";
import "./index.css"; // Make sure you have the path to your CSS file correct
import useResponsive from "../../hooks/useResponsive";

const { Panel } = Collapse;

const faqs = [
  {
    key: "1",
    question: "What is an email signature?",
    answer:
      "An email footer is a segment comprising text, visuals (such as pictures or logos), and/or hyperlinks that gets added at the conclusion of an email.",
  },
  {
    key: "2",
    question: "What is an email signature maker?",
    answer:
      "An email signature generator is a tool or service designed to simplify the process of crafting a polished email signature.",
  },
  {
    key: "3",
    question: "How should an email signature look like?",
    answer:
      "A corporate email signature should convey professionalism, clarity, and readability. Typical components of such a signature encompass the full name, position, contact information, social media profiles, and a compelling call to action.",
  },
  {
    key: "4",
    question: "Is electronic signature and email signature the same thing?",
    answer:
      "An email signature differs from an electronic signature, An electronic signature is a legally accepted method for digitally signing documents or agreements online. It is frequently utilized in business dealings, contracts, and various legal papers.",
  },
];

const FAQ = () => {
  const { isMobileSmall, isMobileMedium, isTablet, isDesktop } =
    useResponsive();

  const isSmallOrMediumDevice = isMobileSmall || isMobileMedium;
  const [activeKey, setActiveKey] = React.useState();

  const onPanelChange = (key) => {
    setActiveKey(activeKey === key ? "" : key);
  };

  return (
    <>
      <div className="faq-container">
        <h1 className="faq-title">FAQs</h1>
        {faqs.map((faq) => (
          <Collapse
            size={isSmallOrMediumDevice ? "small" : "large"}
            key={faq.key}
            className="individual-faq"
            activeKey={activeKey}
            onChange={() => onPanelChange(faq.key)}
          >
            <Panel header={faq.question} key={faq.key}>
              <p>{faq.answer}</p>
            </Panel>
          </Collapse>
        ))}
        <div style={{ marginTop: "50px" }}>
          <Button
            type="primary"
            size={isSmallOrMediumDevice ? "small" : "large"}
          >
            Create Signature
          </Button>
        </div>
      </div>
    </>
  );
};

export default FAQ;
