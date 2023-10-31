import React from 'react';
import './App.css';
import Header from './View/Header';
import ImageGallery from './View/ImageGallery';


function App() {

  return (
    <div className="App">
      <Header />
      <div className='gallery-Container'>
        <ImageGallery />
      </div>
    </div>
  );
}

export default App;