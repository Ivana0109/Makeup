import React from "react";
import styles from "./DisplayInfo.module.css";
import InfoPhotos from "../Components/InfoPhotos";

import InfoText from "../Components/InfoText";

import BottomInfo from "./BottomInfo";
import PhotoPage from "../Components/PhotoPage";
import MuiModal from "../Components/MuiModal";

function DisplayInfo() {
  return (
    <div>
      <div className={styles.container}>
     
   < MuiModal/>
      </div>  
      <InfoPhotos/>
      <PhotoPage/>
      <InfoText/>
    
      <BottomInfo/>
    </div>
  );
}

export default DisplayInfo;
