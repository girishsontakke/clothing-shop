import React from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { CartItemType } from "../../types/models";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

interface Iprops extends RouteComponentProps {
  title: string;
  routeName: string;
  items: CartItemType[];
}

const CollectionPreview: React.FC<Iprops> = ({
  match,
  title,
  routeName,
  items,
}) => (
  <div className="collection-preview">
    <Link to={`${match.url}/${routeName}`}>
      <h1 className="title">{title}</h1>
    </Link>
    <div className="preview">
      {items
        .filter((_item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
