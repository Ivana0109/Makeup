import React from "react";
import styles from "./CoverPhotos.module.css";

import Grid from "@mui/material/Unstable_Grid2";
import useIntersectionObserver from "../utils/useIntersectionObserver";

function CoverPhotos() {
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
    <Grid container className={styles.photosBackground} ref={ref}>
      <Grid
        container
        p={4}
        justifyContent="center"
        alignItems="center"
        md={4}
        lg={4}
        xs={12}
      >
        <div className={styles.imageWrap}>
          <img
            src={`${process.env.PUBLIC_URL}/colors.jpg`}
            className={styles.img}
          />
        </div>
      </Grid>
      <Grid
        container
        p={4}
        justifyContent="center"
        alignItems="center"
        md={4}
        lg={4}
        xs={12}
      >
        <div className={styles.imageWrap}>
          <img
            src={`${process.env.PUBLIC_URL}/colors1.jpg`}
            className={styles.img}
          />
        </div>
      </Grid>
      <Grid
        container
        p={4}
        justifyContent="center"
        alignItems="center"
        md={4}
        lg={4}
        xs={12}
      >
        <div className={styles.imageWrap}>
          <img
            src={`${process.env.PUBLIC_URL}/colors2.jpg`}
            className={styles.img}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default CoverPhotos;
