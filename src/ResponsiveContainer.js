import PropTypes from "prop-types";
import React from "react";

import DesktopContainer from "./desktop/DesktopContainer";
import MobileContainer from "./mobile/MobileContainer";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

export default ResponsiveContainer;
