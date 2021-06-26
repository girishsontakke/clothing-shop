import React, { useEffect } from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import Collection from "../Collection/collection.page";
import { firestore } from "../../firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCollection } from "../../redux/shop/shopSlice";

interface Iprops extends RouteComponentProps {}

const ShopPage: React.FC<Iprops> = ({ match }) => {
  const dispatch = useDispatch();

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
      });
    return unsubscribe;
  }, [dispatch]);

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
