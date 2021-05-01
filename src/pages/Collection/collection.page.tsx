import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectCollection } from "../../redux/shop/shopSlice";
import { CollectionType } from "../../types/models";
import { ReduxState } from "../../types/reduxState";

interface Iprops extends RouteComponentProps {
  collection: CollectionType;
}

const Collection: React.FC<Iprops> = ({ collection }) => {
  return (
    <div>
      <CollectionPreview items={collection.items} title={collection.title} />
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
