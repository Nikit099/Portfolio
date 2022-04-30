import React, { useEffect } from 'react';
import About from './components/about';
import Board from './components/board';
import Contacts from './components/contacts';
import Head from './components/head';
import Home from './components/home';
import Progects from './components/progects';

function App() {
  useEffect(() => {
    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
            change.target.classList.add('element-show');
          }
        });
      }
      let options = { threshold: [0.5] };
      let observer = new IntersectionObserver(onEntry, options);
      let elements = document.querySelectorAll('.element-animationLeft');
      for (let elm of elements) {
        observer.observe(elm);
      }
}, [])
useEffect(() => {
  function onEntry(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
          change.target.classList.add('element-showRight');
        }
      });
    }
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animationRight');
    for (let elm of elements) {
      observer.observe(elm);
    }
}, [])
useEffect(() => {
  function onEntry(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
          change.target.classList.add('element-showOpasiti');
        }
      });
    }
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animationOpasiti');
    for (let elm of elements) {
      observer.observe(elm);
    }
}, [])


  return (
    <div className="App">
      <Board/>
      <Head/>
      <Home />
      <About/>
     <Progects/>
     <Contacts/>

    </div>
  );
}

export default App;
