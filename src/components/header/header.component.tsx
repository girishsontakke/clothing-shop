import { useContext } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { NavLink } from "react-router-dom";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
//redux
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/userSlice";
import { createStructuredSelector } from "reselect";
import { ReduxState, User } from "../../types/reduxState";
import { CartContext } from "../../context/cart/cart.context";

interface Iprops extends User {}

const Header: React.FC<Iprops> = ({ currentUser }) => {
  const { hidden } = useContext(CartContext);
  return (
    <div className="header">
      <NavLink className="logo-container" to="/">
        <Logo className="logo" />
      </NavLink>
      <div className="options">
        <NavLink className="option" to="/">
          {"home".toUpperCase()}
        </NavLink>
        <NavLink className="option" to="/shop">
          {"shop".toUpperCase()}
        </NavLink>
        <NavLink className="option" to="/contact">
          {"contact".toUpperCase()}
        </NavLink>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {"sign out".toUpperCase()}
          </div>
        ) : (
          <NavLink className="option" to="/signin">
            {"Sign in".toUpperCase()}
          </NavLink>
        )}
        <CartIcon />
      </div>
      {!hidden ? <CartDropDown /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector<ReduxState, Iprops>({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(Header);
