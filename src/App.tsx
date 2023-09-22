import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Menu from "./Container/Menu";
import UpperHeader from "./Container/UpperHeader";
import CoverPage from "./Container/CoverPage";

import Calendar from "./Container/Calendar";
import { LanguageProvider } from "./utils/useTranslate";
import { ReservationFormProvider } from "./utils/ReservationFormContext";
function App() {
  return (
    <ReservationFormProvider>
      <LanguageProvider>
        <Router>
          <UpperHeader />
          <Menu />
          <div className={styles.container}></div>
          <Routes>
            <Route path="" element={<CoverPage />} />
            <Route path="popis" element={<Calendar />} />
        
          </Routes>
        </Router>
      </LanguageProvider>
    </ReservationFormProvider>
  );
}

export default App;
