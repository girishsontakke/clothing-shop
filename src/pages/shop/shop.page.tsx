import React, { useEffect, useState } from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import Collection from "../Collection/collection.page";
import { firestore } from "../../firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCollection } from "../../redux/shop/shopSlice";
import WithSpinner from "../../components/with-spinner/WithSpinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

interface Iprops extends RouteComponentProps {}

const ShopPage: React.FC<Iprops> = ({ match }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const shopData: any = {};
    let unsubscribe = firestore
      .collection("collection")
      .onSnapshot((snapShot) => {
        snapShot.docs.forEach((doc) => {
          const { title } = doc.data();
          shopData[title.toLowerCase()] = {
            id: doc.id,
            routeName: encodeURI(title.toLowerCase()),
            ...doc.data(),
          };
        });
        dispatch(setCollection(shopData));
        setIsLoading(false);
      });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner {...props} isLoading={isLoading} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner {...props} isLoading={isLoading} />
          )}
        />
      </Switch>
    </div>
  );
};
export default ShopPage;
