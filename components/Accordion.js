"use client";

import { ChevronDown } from "lucide-react";
import React from "react";

export const Accordion = ({ activeKey, children }) => {
  return <div className="accordion">{children}</div>;
};

export const AccordionToggle = ({
  eventKey,
  onClick,
  className,
  style,
  children,
}) => {
  return (
    <button onClick={onClick} className={className} style={style}>
      <span style={{ flex: 1 }}>{children}</span>
      <ChevronDown
        size={20}
        style={{
          transition: "transform 0.3s ease",
          transform: className.includes("collapsed")
            ? "rotate(0deg)"
            : "rotate(180deg)",
          opacity: 0.7,
        }}
      />
    </button>
  );
};

export const AccordionCollapse = ({ eventKey, activeKey, children }) => {
  const isActive = eventKey === activeKey;

  return (
    <div
      style={{
        height: isActive ? "auto" : 0,
        overflow: "hidden",
        transition: "height 0.3s ease",
      }}
    >
      {children}
    </div>
  );
};
