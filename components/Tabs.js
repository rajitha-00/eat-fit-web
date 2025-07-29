"use client";

import React from "react";

export const Tabs = ({ defaultActiveKey, children, id }) => {
  const [activeTab, setActiveTab] = React.useState(defaultActiveKey);

  const tabs = React.Children.toArray(children).filter(
    (child) => child.type.name === "Tab"
  );

  return (
    <div className="custom-tabs" id={id}>
      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab.props.eventKey}
            className={`tab-button ${
              activeTab === tab.props.eventKey ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab.props.eventKey)}
          >
            {tab.props.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.find((tab) => tab.props.eventKey === activeTab)}
      </div>
      <style jsx>{`
        .custom-tabs {
          margin-top: 2rem;
        }
        .tabs-header {
          display: flex;
          gap: 1rem;
          border-bottom: 2px solid #e5e7eb;
          margin-bottom: 1rem;
        }
        .tab-button {
          padding: 0.75rem 1.5rem;
          border: none;
          background: none;
          font-weight: 500;
          color: #6b7280;
          cursor: pointer;
          position: relative;
          transition: color 0.2s ease;
        }
        .tab-button:hover {
          color: #43a047;
        }
        .tab-button.active {
          color: #43a047;
        }
        .tab-button.active::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: #43a047;
        }
        .tab-content {
          padding: 1rem 0;
        }
      `}</style>
    </div>
  );
};

export const Tab = ({ children }) => {
  return <div className="tab-pane">{children}</div>;
};
