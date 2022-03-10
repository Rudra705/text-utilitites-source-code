import './App.css';
import Navbar from "./components/Navbar.js"
import TextForm from './components/TextForm';
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch, 
} from "react-router-dom";


function App() {
  return (
    <>
     

      <Router>

      <Navbar title="Text-Utilities" />

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />          
          </Route>
          <Route exact path="/">
            <TextForm heading="Try Text-Utilities. Enter text to analyze." />
          </Route>
          
        </Switch>

      </Router>

    </>

  );
}

export default App;
