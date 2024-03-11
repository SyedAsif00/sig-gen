import React from "react";
import "./index.css";
import useResponsive from "../../hooks/useResponsive";

const BenefitText = () => {
  const { isMobileSmall, isMobileMedium, isTablet, isDesktop } =
    useResponsive();
  const isSmallOrMediumDevice = isMobileSmall || isMobileMedium;
  useResponsive();
  return (
    <div className="benefitText_container">
      <span
        style={{
          fontSize: isSmallOrMediumDevice ? "22px" : "24px",
          fontWeight: "500",
          lineHeight: "1.3",
        }}
      >
        Who can profit from utilizing a no-cost email signature generator?
      </span>
    </div>
  );
};

export default BenefitText;
