import React from "react";

import "./SidebarButton-style.scss";

const SidebarButton = ({ children, selected, ...otherProps }) => {
  return (
    <button
      className={`
      ${selected ? "selected-button" : ""}
      sidebar-button
      `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default SidebarButton;
