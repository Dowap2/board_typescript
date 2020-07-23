import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Home from './Home'
import DetailPost from './DetailPost'
import './App.css'
import logo from './ICON/logo.png'

function App() {
  const href:string = window.location.href
  const path:Array<string> = href.split('/');
  if(path[3] === ""){
    window.location.pathname="/home";
  }

  return (
    <div className="App">
      <header className="header">
        <div className="logo__box">
          <img src={logo} className="logo"/>
        </div>
      </header>
      <Router>
        <Route path="/home" component={Home}/>
        <Route path="/post" component={DetailPost}/>
      </Router>
    </div>
  );
}
export default App;
