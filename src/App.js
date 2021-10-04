import './App.css';
import React from 'react';
import Header from './components/header/header'
import MainContent from "./components/main-content/main-contents";




const App = (props) => {
  return (
          <div className="app-wrapper">
              <Header />
              <MainContent store={props.store} state={props.state} dispatch={props.dispatch}/>
          </div>
  );
}

export default App;
