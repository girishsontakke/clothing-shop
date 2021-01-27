import React from "react";
import "./App.css";
//components
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
//firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
//react-router-dom
import { Route, Switch, Redirect } from "react-router-dom";
//redux
import { setCurrentUser } from "./redux/user/user.action";
import { connect } from "react-redux";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurretUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurretUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurretUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
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
}
const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { setCurretUser: (user) => dispatch(setCurrentUser(user)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
