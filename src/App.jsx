import React from 'react';
import './App.css';
import Bookslist from './components/booksList';
import Navbar from './components/Navbar'
import Header from './components/Header';



function App() {
  return (
    <div className="App">
      <Navbar/>

      <Header/>
      
      <Bookslist/>
     </div>
  );
}

export default App;
