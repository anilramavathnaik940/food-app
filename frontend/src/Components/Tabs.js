import React, { useState } from "react";
import "./Styles/Tabs.css";

const Tabs = () => {
  // Array of tab objects with label and content
  const tabs = [
    { id: "tab1", label: "Veg", content: "This is the content of Veg Tab." },
    { id: "tab2", label: "Non Veg", content: "This is the content of Non Veg Tab." },
    { id: "tab3", label: "Tiffins", content: "This is the content of Tiffins Tab." },
    { id: "tab4", label: "Snacks", content: "This is the content of Snacks Tab." },
    { id: "tab5", label: "Fast Food", content: "This is the content of Fast Food Tab." },
    { id: "tab6", label: "Coffee", content: "This is the content of Coffee Tab." },
  ];

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tabs-container">
      {/* Tab Buttons */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? "tab-button active" : "tab-button"}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {tabs.map((tab) =>
          activeTab === tab.id ? <div key={tab.id}>{tab.content}</div> : null
        )}
      </div>
    </div>
  );
};

export default Tabs;
