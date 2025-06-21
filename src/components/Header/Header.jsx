import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Row } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "../Header/Header.css";
import { AuthContext } from "../../context/Authcontext";
import { motion } from "motion/react";
import { notifySuccess } from "../../Shared/utils/toast";

const nav_links = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/tours", display: "Tours" },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    notifySuccess("Successfully Logged Out");
    navigate("/");
  };

  const stickyHeaderFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky_header");
    } else {
      headerRef.current.classList.remove("sticky_header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeaderFunc);
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo">
              <Link to="/">
                <motion.img
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.5 }}
                  src={logo}
                  alt="Tour logo"
                />
              </Link>
            </div>

            {/* Navigation Menu */}
            <div
              className={`navigation ${isMenuOpen ? "show_menu" : ""} `}
              onClick={() => toggleMenu()}
              ref={menuRef}
            >
              <ul className="menu align-items-start">
                {nav_links.map((item, index) => (
                  <motion.li
                    className="nav_item"
                    key={index}
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive ? "active_link" : ""
                      }
                      onClick={() => setIsMenuOpen(true)} // Close on link click
                    >
                      {item.display}
                    </NavLink>
                  </motion.li>
                ))}
                {user && (
                  <motion.button
                    className="btn btn-dark d-block d-lg-none mt-5"
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.2, color: "black" }}
                    onClick={logout}
                  >
                    Logout
                  </motion.button>
                )}
              </ul>
            </div>

            {/* Right Side Auth/Buttons */}
            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex flex-row align-items-center gap-3">
                {user ? (
                  <>
                    <span className="username mb-0">{user.username}</span>
                    <motion.button
                      className="btn btn-dark d-none d-lg-block"
                      onClick={logout}
                      whileHover={{ scale: 1.1, color: "black" }}
                    >
                      Logout
                    </motion.button>
                  </>
                ) : (
                  <>
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <Link
                        to="/login"
                        className="btn secondary_btn d-none d-sm-block"
                      >
                        Login
                      </Link>
                    </motion.div>
                    <motion.div
                      whileTap={{ scale: 0.8 }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <Link
                        to="/register"
                        className="btn primary_btn"
                        whileTap={{ scale: 0.8 }}
                        whileHover={{ scale: 1.2 }}
                      >
                        Register
                      </Link>
                    </motion.div>
                  </>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <span className="mobile_menu d-lg-none" onClick={toggleMenu}>
                <i className="ri-menu-3-fill"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
