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
          md={4}
          justifyContent="center"
          alignItems="center"
          className={styles.h3}
          p={2}
        >
          Enjoy the world of makeup, where artistry meets individuality. Here,
          makeup isn't just about enhancing beauty; it's about crafting a unique
          masterpiece that mirrors your inner radiance.
        </Grid>
        <Grid
          container
          xs={12}
          md={4}
          justifyContent="center"
          alignItems="center"
          className={styles.h3}
          p={2}
        >
          My approach is as unique as you are. I consider your skin tone, the occasion, and your personal wishes to curate the perfect makeup style exclusively for you.

        </Grid>
        

        <Grid container xs={12} md={4} justifyContent="center" ref={ref}>
          {" "}
          <div className={styles.imageWrap}>
            <img
              src={`${process.env.PUBLIC_URL}/colors3.jpg`}
              alt=""
              className={styles.img}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default CoverText;
