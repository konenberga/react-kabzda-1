import './App.css';
import React from 'react';
import MainContent from "./components/main-content/main-contents";
import HeaderContainer from "./components/header/headerContainer";

const App = () => {
  return (
          <div className="app-wrapper">
              <HeaderContainer />
              <MainContent />
          </div>
  );
}

export default App;
