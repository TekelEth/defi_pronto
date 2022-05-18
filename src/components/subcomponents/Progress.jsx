import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function Progress({ completed, maxCompleted }) {
  return (
    <ProgressBar
      completed={completed}
      maxCompleted={maxCompleted}
      width={"100%"}
      height={10}
      className="w-full mb-8"
      bgColor="#E74141"
      isLabelVisible={false}
      baseBgColor="#000000"
    />
  );
}

export default Progress;
