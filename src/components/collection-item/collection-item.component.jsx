import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = ({ name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price" role="img" aria-label="currency">
        💲{price}
      </span>
    </div>
  </div>
);

export default CollectionItem;
