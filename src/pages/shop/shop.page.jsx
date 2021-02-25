import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route, Switch } from "react-router-dom";
import Collection from "../Collection/collection.page";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </Switch>
    </div>
  );
};
export default ShopPage;
