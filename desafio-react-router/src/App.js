import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function App() {
  return (
   <div className="homepage">
     <p className="titles">Buffay's Gallery</p>
     <br/>
     <Link to="/Gallery" className="link-text">Click to enter!</Link>
   </div>
  );
}

export default App;
