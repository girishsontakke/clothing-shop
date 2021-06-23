import CollectionPreview from "../collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { selectShopCollection } from "../../redux/shop/shopSlice";
import { connect } from "react-redux";
import "./collection-overview.styles.scss";
import { CollectionType } from "../../types/models";
import { ReduxState } from "../../types/reduxState";

interface Iprops {
  collections: CollectionType[];
}

const CollectionOverview: React.FC<Iprops> = ({ collections }) => (
  <div className="collection-overview">
    {Object.values(collections).map(({ id, title, routeName, items }) => (
      <CollectionPreview
        key={id}
        items={items}
        title={title}
        routeName={routeName}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector<ReduxState, Iprops>({
  collections: selectShopCollection,
});

export default connect(mapStateToProps)(CollectionOverview);
