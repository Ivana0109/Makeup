import React from "react";
import styles from "./CoverText.module.css";
import { Grid } from "@mui/material";
import useIntersectionObserver from "../utils/useIntersectionObserver";
function CoverText() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  };

  // IMAGE ANIMATION

  let revealCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      let container = entry.target;

      if (entry.isIntersecting) {
        console.log(container);
        container.classList.add(styles.animating);
        return;
      }

      if (entry.boundingClientRect.top > 0) {
        container.classList.remove(styles.animating);
      }
    });
  };

  const ref = useIntersectionObserver(revealCallback, options);
  return (
    <div className={styles.container}>
      <Grid container justifyContent="center" alignItems={"center"} p={10}>
        <Grid
          container
          xs={12}
          md={6}
          justifyContent="center"
          alignItems="center"
          className={styles.h3}
        >
          Individualnim pristupom uzimam u obzir vaš ton kože, kako bih odredila
          savršen stil šminkanja za vas.
        </Grid>

        <Grid container xs={12} md={6} justifyContent="center" ref={ref}>
          {" "}
          <div className={styles.imageWrap}>
            <img
              src={`${process.env.PUBLIC_URL}/beige.png`} alt=""
              className={styles.img}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default CoverText;
