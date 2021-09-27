import './App.css';
import React from 'react';
import Header from './components/header/header'
import MainContent from "./components/main-content/main-contents";
import {BrowserRouter} from "react-router-dom";




const App = (props) => {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header />
              <MainContent state={props.state} addPost={props.addPost}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
