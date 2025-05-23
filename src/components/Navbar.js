import "../styles/navbar.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NavLink } from "react-router";
import smileIcon from "../images/smileIcon.svg";
import arrowLeft from "../images/arrowLeft.svg";
import arrowRight from "../images/arrowRight.svg";
import cursorHome from "../images/cursorHome.svg";

const Navbar = () => {
  let [smileIconHover, setSmileIconHover] = useState(false);
  let menuItems = [
    {
      className: "navbar__iconsWrapper__menu__dot",
      activeClassName: "navbar__iconsWrapper__menu__dotActive",
      to: "/",
      name: "home",
      cursor: cursorHome,
    },
    {
      className: "navbar__iconsWrapper__menu__dot",
      activeClassName: "navbar__iconsWrapper__menu__dotActive",
      to: "/about",
      name: "about",
    },
    {
      className: "navbar__iconsWrapper__menu__dot",
      activeClassName: "navbar__iconsWrapper__menu__dotActive",
      to: "/work",
      name: "work",
    },
    {
      className: "navbar__iconsWrapper__menu__dot",
      activeClassName: "navbar__iconsWrapper__menu__dotActive",
      to: "/contact",
      name: "contact",
    },
  ];

  const MotionLink = motion(NavLink);

  return (
    <div className="navbar">
      <div className="navbar__iconsWrapper">
        <div className="navbar__iconsWrapper__arrowLeft">
          <img src={arrowLeft} alt="arrow pointing left" />
        </div>
        <div
          className="navbar__iconsWrapper__smileIcon"
          onMouseOver={() => setSmileIconHover(true)}
          onMouseOut={() => setSmileIconHover(false)}
        >
          {!smileIconHover ? (
            <img src={smileIcon} alt="smile face in a circle" />
          ) : (
            <AnimatePresence>
              <motion.div
                className="navbar__iconsWrapper__menu"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
              >
                {menuItems.map((item) => (
                  <MotionLink
                    whileHover={{ scale: 1.5 }}
                    to={item.to}
                    className={({ isActive }) =>
                      isActive
                        ? "navbar__iconsWrapper__menu__dotActive"
                        : "navbar__iconsWrapper__menu__dot"
                    }
                  >
                    <motion.div whileHover={{ scale: 1.8 }}></motion.div>
                  </MotionLink>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
        <div className="navbar__iconsWrapper__arrowRight">
          <img src={arrowRight} alt="arrow poiting right" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
