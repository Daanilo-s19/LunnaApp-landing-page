import React from "react";
import "./styles.scss";

function NavbarContainer(props) {
  return (
    <nav
      className='navbar'>
      {props.children}
    </nav>
  );
}

export default NavbarContainer;
