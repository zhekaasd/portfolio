import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Working from "./Working/Working";
import Contacts from "./Contacts/Contacts";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";

function App() {
  return (
      <div className="App">
        <Header />
        <Main />
        <Projects />
        <Skills />
        <Working />
        <Contacts />
        <Footer />
      </div>
  );
}

export default App;