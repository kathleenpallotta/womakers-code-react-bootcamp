import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import art from './img/art.jpg'

function Gallery() {
  return (
    <div className="homepage">
     <p className="titles">"It's an original Buffay!"</p><br/>
     <img src={art} alt="Phoebe Buffay's Artwork"/>
     <p><Link to="/" className="link-text back-home">Take 'em home!</Link></p>
   </div>
  );
}

export default Gallery;
