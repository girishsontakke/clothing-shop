import React from "react";
import { CartItemType } from "../../types/models";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

interface Iprops {
  title: string;
  items: CartItemType[];
}

const CollectionPreview: React.FC<Iprops> = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((_item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
