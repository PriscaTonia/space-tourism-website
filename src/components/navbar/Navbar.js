import { StyledNav, Line, Nav, NavCont } from "./Navbar.styled";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import { ReactComponent as Hamburger } from "../../assets/svgs/icon-hamburger.svg";
import { ReactComponent as Close } from "../../assets/svgs/icon-close.svg";
import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive");
  };

  const navLinks = [
    { to: "", title: "Home", className: "home" },
    { to: "dest", title: "Destination", className: "dest" },
    { to: "crew", title: "Crew", className: "crew" },
    { to: "tech", title: "Technology", className: "tech" },
  ];

  return (
    <StyledNav
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
    >
      <Link to="/">
        <Logo />
      </Link>
      <Line></Line>
      <NavCont ref={navRef}>
        <Nav>
          {navLinks.map(({ title, to, className }, i) => (
            <NavLink
              to={`/${to}`}
              onClick={showNavBar}
              className={({ isActive }) =>
                isActive ? `${className} activeClassName` : className
              }
              key={i}
            >
              {title}
            </NavLink>
          ))}

          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <Close />
          </button>
        </Nav>
      </NavCont>
      <button className="nav-btn" onClick={showNavBar}>
        <Hamburger />
      </button>
    </StyledNav>
  );
};

export default Navbar;
