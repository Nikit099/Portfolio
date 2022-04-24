import React from 'react';
import About from './components/about';
import Board from './components/board';
import Contacts from './components/contacts';
import Head from './components/head';
import Home from './components/home';
import Progects from './components/progects';

function App() {
  return (
    <div className="App">
      <Board/>
      <Home />
      <Head/>
      <About/>
     <Progects/>
     <Contacts/>

    </div>
  );
}

export default App;
