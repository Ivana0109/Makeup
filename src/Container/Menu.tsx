import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import { slide as MobileMenu } from "react-burger-menu";

import useTranslation from "../utils/useTranslate";

function Menu() {
  const translate = useTranslation();

  const mobileMenuStyles = {
    bmBurgerButton: {
      position: "relative",
      width: "36px",
      height: "30px",
    },
    bmBurgerBars: {
      background: "#56baba",
    },
   
    bmBurgerBarsHover: {
      background: "#black",
    },
    bmCrossButton: {
      color: "black",
      height: "74px ",
      width: "74px",
    },

    bmCross: {
      background: "black",
      border: "3px solid black",
    },
    bmMenuWrap: {
      top: "0px",
      position: "fixed",
    },
    bmMenu: {
      background: "white",
      padding: "2.5em 1.5em 4em 4em",
      fontSize: "1.15em",
      overflow: "hidden",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "black",
      padding: "0.8em",
      display: "flex",
      flexDirection: "column",
      gap: "60px",
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
      <div
        className={
          scrollPosition < 40
            ? styles.containerBox
            : styles.containerBoxAfterScroll
        }
        style={{ top: top }}
      >
        
        <div className={styles.logo}>
          {" "}
          IB <div className={styles.logo2}>IVANA BABIĆ MAKEUP</div>
        </div>

        <div className={styles.container}>
          {" "}
          <Link to={"/"} className={styles.underlineButton}>
            {translate("home")}
          </Link>
          <Link to={"/popis"} className={styles.underlineButton}>
            {translate("reservations")}
          </Link>
          <Link to={"/opis"} className={styles.underlineButton}>
            {translate("aboutMe")}
          </Link>
        </div>

        <div className={styles.mobileContainer}>
          <MobileMenu noOverlay right styles={mobileMenuStyles}>
            <Link to={"/"} className={styles.underlineButton}>
              {translate("home")}
            </Link>
            <Link to={"/popis"} className={styles.underlineButton}>
              {translate("reservations")}
            </Link>
            <Link to={"/opis"} className={styles.underlineButton}>
              {translate("aboutMe")}
            </Link>
          </MobileMenu>
        </div>
      
      </div>
    </>
  );
}

export default Menu;
