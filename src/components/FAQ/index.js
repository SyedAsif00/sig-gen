import React from "react";
import { Collapse, Button } from "antd";
import "./index.css"; // Make sure you have the path to your CSS file correct

const { Panel } = Collapse;

const faqs = [
  {
    key: "1",
    question: "What is an email signature?",
    answer:
      "An email signature is a block of text, images (photo, logo), and/or links that is automatically appended to the end of an email message.",
  },
  {
    key: "2",
    question: "What is an email signature maker?",
    answer:
      "An email signature maker is a tool or service that allows you to create a professional email signature easily.",
  },
  {
    key: "3",
    question: "What is an email signature maker?",
    answer:
      "An email signature maker is a tool or service that allows you to create a professional email signature easily.",
  },
  {
    key: "4",
    question: "What is an email signature maker?",
    answer:
      "An email signature maker is a tool or service that allows you to create a professional email signature easily.",
  },
];

const FAQ = () => {
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
          <Button type="primary" size="large">
            Create Signature
          </Button>
        </div>
      </div>
    </>
  );
};

export default FAQ;
