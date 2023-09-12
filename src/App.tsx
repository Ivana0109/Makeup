import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Menu from "./Container/Menu";
import UpperHeader from "./Container/UpperHeader";
import CoverPage from "./Container/CoverPage";
import AboutMe from "./Container/AboutMe";
import Calendar from "./Container/Calendar";
import { LanguageProvider } from "./utils/useTranslate";
function App() {
  return (
    <LanguageProvider>
    <Router>
      <UpperHeader />
      <Menu />
      <div className={styles.container}></div>
      <Routes>
        <Route path="" element={<CoverPage />} />
        <Route path="popis" element={<Calendar />} />
        <Route path="opis" element={<AboutMe />} />
      </Routes>
    </Router>
    </LanguageProvider>
  );
}

export default App;
