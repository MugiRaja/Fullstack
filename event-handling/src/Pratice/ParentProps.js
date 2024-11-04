import React from "react";
import ChildProps from "./ChildProps";

const ParentProps = () => {
  const message = "hello my child";
  return (
    <div>
      <ChildProps message={message} />
    </div>
  );
};

export default ParentProps;
