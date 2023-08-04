import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styles from "./App.module.css";
import Menu from "./Container/Menu";
import UpMenu from "./Container/UpMenu";

import DisplayInfo from "./Container/DisplayInfo";

import AboutMe from "./Container/AboutMe";
import Calendar from "./Container/Calendar";



function App() {

  
  return (
    <Router>
     
      <UpMenu />
   
      <Menu />
     
      
      <div className={styles.container}></div>
      <Routes>
        <Route path="" element={<DisplayInfo />} />
        <Route path="popis" element={<Calendar/>} />
        <Route path="opis" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
