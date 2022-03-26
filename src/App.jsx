import React from 'react';
import './App.css';
import Bookslist from './components/booksList';
import Navbar from './components/Navbar'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Bookslist/>
     </div>
  );
}

export default App;
