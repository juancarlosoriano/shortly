import React, { useState } from "react";
import { LEFT_LABELS, RIGHT_LABELS } from "../constants";

const NavbarLinkContainer = ({ labels, suffix, children }) => {
  return (
    <ul className={`c-navbar__nav-${suffix}`}>
      {labels.map((label, i) => (
        <NavbarLink label={label} suffix={suffix} key={i} />
      ))}
      {children}
    </ul>
  );
};

const NavbarLink = ({ label, suffix, linkClassName }) => {
  return (
    <li className={`c-navbar__link c-navbar__link--${suffix}`}>
      <a className={linkClassName} href="#home">
        {label}
      </a>
    </li>
  );
};

const NavbarPillButton = ({ label, suffix }) => {
  return (
    <NavbarLink
      label={label}
      suffix={suffix}
      linkClassName="c-navbar__link--pill"
    />
  );
};

const Navbar = () => {
  const [collapse, setCollapse] = useState(true);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setCollapse(!collapse);
    console.log("Navbar collapse button clicked.");
  };

  const navbarClass = () => {
    const baseClass = "l-container c-navbar";
    if (collapse) {
      return clicked ? baseClass + " c-navbar--collapse" : baseClass;
    } else {
      return baseClass + " c-navbar--uncollapse c-navbar__uncollapsed";
    }
  };

  return (
    <nav className={navbarClass()}>
      <div className="c-navbar__logo">Shortly</div>
      <div className="c-navbar__nav">
        <NavbarLinkContainer labels={LEFT_LABELS} suffix="left" />
        <NavbarLinkContainer labels={RIGHT_LABELS} suffix="right">
          <NavbarPillButton label="Sign Up" suffix="right" />
        </NavbarLinkContainer>
      </div>
      <button className="c-navbar__btn-collapse" onClick={handleClick}>
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;
