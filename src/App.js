import React from 'react';
 import{ Switch, Route} from 'react-router-dom';
import Header from '../src/components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
       <Switch>
       <Route exact path='/' component={Homepage}/>

      
      </Switch> 
   
    
    </div>
  );
}

export default App;
