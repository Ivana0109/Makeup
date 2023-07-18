import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import { slide as MobileMenu } from "react-burger-menu";

function Menu() {
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

  const top = scrollPosition < 70 ? 70 - scrollPosition : 0;
  
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
            <button className={styles.button}>POČETNA</button>
          </Link>
          <Link to={"/popis"}>
            <button className={styles.button}>POPIS</button>
          </Link>
        </MobileMenu>
      </div>

      <div className={styles.containerBox} style={{ top: top }}>
        <div style={{ fontSize: "47px" }}>
          {" "}
          MAKE UP <div style={{ fontWeight: "lighter" }}>SPLIT</div>
        </div>
        <div className={styles.container}>
          {" "}
          <Link to={"/"}>
            <button className={styles.button}>POČETNA</button>
          </Link>
          <Link to={"/popis"}>
            <button className={styles.button}>POPIS</button>
          </Link>
          <Link to={"/opis"}>
            <button className={styles.button}>O MENI</button>
          </Link>
        </div>
      </div>
      <div className={styles.menuPadding}></div>
    </>
  );
}

export default Menu;
