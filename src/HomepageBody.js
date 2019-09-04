import React, { useState, useEffect } from "react";
import { Segment, Transition } from "semantic-ui-react";
import { useScrollY } from "./hooks/useScroll";

function HomepageBody() {
  const [visible, setVisible] = useState(false);
  const y = useScrollY();

  useEffect(() => {
    if (y >= 100) {
      setVisible(true);
    }
  }, [y]);

  return (
    <Transition visible={visible} animation="browse" duration={1000}>
      <Segment style={{ padding: "4em 4em" }} secondary vertical>
        Buiding content ...
      </Segment>
    </Transition>
  );
}

export default HomepageBody;
