import React from "react";
import { Responsive } from "semantic-ui-react";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

function DesktopContainer({ children }) {
  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      {children}
    </Responsive>
  );
}

export default DesktopContainer;
