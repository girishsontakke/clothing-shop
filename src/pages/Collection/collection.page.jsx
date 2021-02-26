import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectCollection } from "../../redux/shop/shopSlice";

function Collection({ collections }) {
  return (
    <div>
      <CollectionPreview {...collections} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
