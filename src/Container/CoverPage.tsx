import React from "react";
import styles from "./CoverPage.module.css";
import CoverPhotos from "../Components/CoverPhotos";

import CoverText from "../Components/CoverText";

import FooterInfoContainer from "./FooterInfoContainer";
import PriceButtons from "../Components/PriceButtons";



function CoverPage() {
  return (
    <div>
      <div className={styles.container}>
      </div>  
      <CoverPhotos/>
      <PriceButtons/>
      <CoverText/>  
      <FooterInfoContainer/>
    </div>
  );
}

export default CoverPage;
