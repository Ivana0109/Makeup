import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import { slide as MobileMenu } from "react-burger-menu";
import { Button } from "@mui/material";
import useTranslation from "../utils/useTranslate";

function Menu() {
  const translate=useTranslation()

  const mobileMenuStyles = {
    bmBurgerButton: {
      position: "relative",
      width: "36px",
      height: "30px",
    },
    bmBurgerBars: {
      background: "#3747",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      top: "0px",
      position: "fixed",
    },
    bmMenu: {
      background: "white",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      overflow: "hidden",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const top = scrollPosition < 40 ? 40 - scrollPosition : 0;
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <>
      <div className={styles.mobileContainer}>
        <MobileMenu noOverlay right styles={mobileMenuStyles}>
          <Link to={"/"}>
             {translate("home")}
          </Link>
          <Link to={"/popis"}>
             POPIS
           </Link>
        </MobileMenu>
      </div>

      <div className={scrollPosition<40? styles.containerBox : styles.containerBoxAfterScroll} style={{ top: top }}>
        <div className={styles.logo} >
          {" "}
          MAKE UP <div className={styles.logo}>SPLIT</div>
        </div>
        <div className={styles.container}>
          {" "}
          <Link  to={"/"}  className={styles.underlineButton}>
          {translate("home")}
          </Link>
          <Link to={"/popis"} className={styles.underlineButton}>
          {translate("reservations")}
          </Link>
       <Link to={"/opis"} className={styles.underlineButton}>
       {translate("aboutMe")}
          </Link> 
        </div>
      </div>

    </>
  );
}

export default Menu;
