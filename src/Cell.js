import React from "react";

import "./Cell.css";

const Cell = props => {
  const handleclick = () => {
    props.flipSurroundingCells();
  };
  let classes = "cell" + (props.isLit ? "cell-lit" : "");
  return <td className={classes} onClick={handleclick} />;
};

export default Cell;
