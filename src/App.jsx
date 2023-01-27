import { useState } from "react";

import Header from "./components/header/header";
import DesktopHeader from "./components/desktop-header/desktopHeader";
import Home from "./home";
import Desktop from "./desktop";

import { modalsData } from "./mock data/modal-data";

import "./App.css";

function App() {
  const [page, setPage] = useState('home');

  const goToPage = (page) => {
    if(page === 'home')
      setPage('home');
    else if(page === 'desktop')
      setPage('desktop');
  }

  return (
    <div className="App">
      {page === 'home'? <Header page={page} goToPage={goToPage}/>: <DesktopHeader page={page} goToPage={goToPage} />}
      {page === 'home'? <Home />: <Desktop />}
    </div>
  );
}

export default App;
