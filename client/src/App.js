import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import React from 'react'
import MainPage from './component/MainPage';

import CreateMagazin from './component/CreateMagazin';



function App() {

  return (


    <div className="App">
{/* <MainPage/> */}


<Router>
        <Switch>
            <Route  path="/CreateMagazin"  component={CreateMagazin}/>
            <Route  path="/"  component={MainPage}/>

        </Switch>
    </Router>‏




    </div>

  );
}





export default App;
