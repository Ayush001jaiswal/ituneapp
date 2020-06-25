import React from 'react';
import './App.css';
import Home from './containers/Home/Home';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
