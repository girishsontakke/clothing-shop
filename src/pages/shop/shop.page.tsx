import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import Collection from "../Collection/collection.page";

interface Iprops extends RouteComponentProps {}

const ShopPage: React.FC<Iprops> = ({ match }) => {
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
