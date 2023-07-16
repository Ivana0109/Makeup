import React from "react";
import styles from "./DisplayInfo.module.css";
import InfoPhotos from "../Components/InfoPhotos";
import Modal from "../Components/Modal";
import InfoText from "../Components/InfoText";

import BottomInfo from "./BottomInfo";
import PhotoPage from "../Components/PhotoPage";

function DisplayInfo() {
  return (
    <div>
      <div className={styles.container}>
      <Modal buttonText={"UPIŠI PODATKE"}/>
     
      </div>  
      <InfoPhotos/>
      <PhotoPage/>
      <InfoText/>
    
      <BottomInfo/>
    </div>
  );
}

export default DisplayInfo;
