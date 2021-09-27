import './App.css';
import React from 'react';
import Header from './components/header/header'
import MainContent from "./components/main-content/main-contents";





const App = (props) => {
  return (
          <div className="app-wrapper">
              <Header />
              <MainContent state={props.state} addPost={props.addPost}/>
          </div>
  );
}

export default App;
