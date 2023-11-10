import React from 'react';

import './App.scss';
import {Navbar} from "./libs/components/navbar/navbar";
import {Login} from "./libs/components/forms/login";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login/>
    </div>
  );
}

export default App;
