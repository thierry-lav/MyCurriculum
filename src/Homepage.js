import React from "react";
import ResponsiveContainer from "./ResponsiveContainer";
import HomepageHeading from "./HomepageHeading";
import "./Homepage.css";

function HomepageLayout() {
  return (
    <ResponsiveContainer>
      <HomepageHeading />
    </ResponsiveContainer>
  );
}

export default HomepageLayout;
