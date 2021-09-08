import React from 'react';
// import{ Switch, Route} from 'react-router-dom';
import Header from '../src/components/header/header.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Switch>
        <Route exact>

      
      </Switch> */}
    {/* <img src={logo}alt="logo"/> */}
    <h1>WELCOME TO FRUITIEST</h1>
      <button>GET STARTED</button>
    </div>
  );
}

export default App;
