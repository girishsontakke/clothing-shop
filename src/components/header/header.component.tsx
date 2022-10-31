import { useContext, useState } from "react";
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
import BurgerIcon from "../burger-icon/burger-icon.component";
import useMediaQuery from "../../hooks/useMediaQuery";

interface Iprops extends User {}

const Header: React.FC<Iprops> = ({ currentUser }) => {
  const { hidden } = useContext(CartContext);
  const [expand, setExpand] = useState<boolean>(false);
  const expandNavLinks = () => {
    setExpand((prevExpand) => !prevExpand);
  };
  const isSmall = useMediaQuery("(max-width: 600px)");

  return (
    <div className={`header ${expand && isSmall ? "expand" : ""}`}>
      <BurgerIcon expand={expand} expandNavLinks={expandNavLinks} />
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
        <NavLink className="option checkoutLink" to="/checkout">
          {"Checkout".toUpperCase()}
        </NavLink>
      </div>
      {!hidden ? <CartDropDown /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector<ReduxState, Iprops>({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(Header);
