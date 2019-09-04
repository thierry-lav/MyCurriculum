import React, { useState, useEffect } from "react";
import { Segment, Transition } from "semantic-ui-react";
import { useScrollY } from "./hooks/useScroll";

function TransitionBody({ scrollAt, children }) {
  const [visible, setVisible] = useState(false);
  const y = useScrollY();

  useEffect(() => {
    if (y >= scrollAt) {
      setVisible(true);
    }
  });

  return (
    <Transition visible={visible} animation="browse" duration={1000}>
      <Segment style={{ padding: "4em 4em" }} secondary vertical>
        {children}
      </Segment>
    </Transition>
  );
}

export default TransitionBody;
