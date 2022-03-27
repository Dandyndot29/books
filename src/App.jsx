import React from 'react';
import './App.css';
import Bookslist from './components/booksList';
import Navbar from './components/Navbar'
import Header from './components/Header';
import Footer from './components/footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Bookslist/>
      <Footer/>
     </div>
  );
}

export default App;
