import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import CollectionItem from "../../components/collection-item/collection-item.component"
import { selectCollection } from "../../redux/shop/shopSlice";
import { CollectionType } from "../../types/models";
import { ReduxState } from "../../types/reduxState";
import "./collection.styles.scss";

interface Iprops extends RouteComponentProps {
  collection: CollectionType;
}

const Collection: React.FC<Iprops> = ({ collection }) => {
  const {title, items } = collection;
  return (
    <div className="collection-page">
      <div className="title">{title}</div>
      <div className="items">
        {
          items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>

    </div>
  );
};

const mapStateToProps = (
  state: ReduxState,
  ownProps: RouteComponentProps<{ collectionId: string }>
) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)!,
});

export default connect(mapStateToProps)(Collection);
