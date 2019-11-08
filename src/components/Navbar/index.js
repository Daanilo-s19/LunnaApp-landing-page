import React, { useState } from "react";
import NavbarContainer from "./../NavbarContainer";
import { Link } from "./../../util/router.js";
//import { useAuth } from "./../../util/auth.js";
import "./styles.scss";

function Navbar(props) {
  const [colorButton, setColorButton] = useState(false);
  window.addEventListener("scroll", () => {
    const windowTop = window.pageYOffset;
    windowTop !== 0 ? setColorButton(true) : setColorButton(false);
  });
  return (
    <NavbarContainer>
      <div className="container-navbar">
        <div className="navbar-brand">
          <div className="navbar-item navbar-logo">
            <Link to="/">
              <img className="image" src={props.logo} alt="logo" />
            </Link>
          </div>
          <div
            className={
              colorButton ? "navbar-button scrollButton" : "navbar-button"
            }
          >
            <a href={props.href}>Inscreva-se</a>
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
