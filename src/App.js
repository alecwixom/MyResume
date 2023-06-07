import React from 'react';
import './App.css';
import logo from './images/Logo.png';

function App() {
  return (
    <div className="App">
      <navbar className='navContainer'>
      <img className='nav-logo' src={logo} alt="LogoHere" />
      </navbar>
      <section className='welcomeBox'>
        <h1 className='welcome'>W</h1>
        <h1 className='welcome'>e</h1>
        <h1 className='welcome'>l</h1>
        <h1 className='welcome'>c</h1>
        <h1 className='welcome'>o</h1>
        <h1 className='welcome'>m</h1>
        <h1 className='welcome'>e</h1>
      </section>
    </div>
  );
}

export default App;
