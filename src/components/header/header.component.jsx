import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";

//redux
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          {"shop".toUpperCase()}
        </Link>
        <Link className="option" to="/contact">
          {"contact".toUpperCase()}
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {"sign out".toUpperCase()}
          </div>
        ) : (
          <Link className="option" to="/signin">
            {"Sign in".toUpperCase()}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
