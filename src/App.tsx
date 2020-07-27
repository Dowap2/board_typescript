import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
    <Router>
      <div className="App">
        <header className="header">
        <Link to="/home">
          <div className="logo__box">
            <img src={logo} alt="logo" className="logo"/>
          </div>
        </Link>
        </header>
          <Route path="/home" component={Home}/>
          <Route path="/post" component={DetailPost}/>
      </div>
    </Router>
  );
}
export default App;
