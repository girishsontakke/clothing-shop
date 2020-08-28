import React from "react";
import "./menu-item.styles.scss";

const menuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      className={`menu-item ${size} `}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default menuItem;
