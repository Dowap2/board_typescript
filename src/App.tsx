import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Home from './Home'
import DetailPost from './DetailPost'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home" component={Home}/>
        <Route path="/post" component={DetailPost}/>
      </Router>
    </div>
  );
}
export default App;
