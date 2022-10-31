import React, { useEffect } from "react";
import "./App.css";
//components
import HomePage from "./pages/homepage/homepage.page";
import ShopPage from "./pages/shop/shop.page";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.page";
//firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

//react-router-dom
import { Route, Switch, Redirect } from "react-router-dom";
//redux
import { setCurrentUser, selectCurrentUser } from "./redux/user/userSlice";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout.page";
import { ReduxState, User } from "./types/reduxState";
import { StoreDispatch } from "./redux/store";
import CartContextProvider from "./context/cart/cart.context";

interface Iprops extends User {
  setUser: (user: User) => void;
}

function App(props: Iprops) {
  const { setUser } = props;
  useEffect(() => {
    let unsubscribeFromAuth: null | firebase.Unsubscribe = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef?.onSnapshot((snapshot) => {
          setUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        setUser({ currentUser: userAuth });
      }
    });

    return () => {
      if (unsubscribeFromAuth !== null) {
        unsubscribeFromAuth();
      }
    };
  }, [setUser]);

  const { currentUser } = props;
  return (
    <>
      <CartContextProvider>
        <Header />
      </CartContextProvider>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </>
  );
}
const mapStateToProps = createStructuredSelector<ReduxState, User>({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch: StoreDispatch) => ({
  setUser: (user: User) => dispatch(setCurrentUser(user.currentUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
