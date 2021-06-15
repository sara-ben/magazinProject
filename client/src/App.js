import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import React from 'react'
import MainPage from './component/MainPage.js';
import Lavel1 from './component/Lavel1';
import Lavel2 from './component/Lavel2';
import Lavel3 from './component/Lavel3';
import Ex from './component/Ex'



function App() {

  return (


    <div className="App">
{/* <MainPage/> */}


<Router>
        <Switch>
            {/* <Route  path="/MainPage"  component={MainPage}/> */}
            <Route  path="/Lavel1"  component={Lavel1}/>
            <Route  path="/Lavel2"  component={Lavel2}/>
            <Route  path="/Lavel3"  component={Lavel3}/>
            <Route path="/example" component={Ex}/>
            <Route  path="/"  component={MainPage}/>

        </Switch>
    </Router>‏




    </div>

  );
}





export default App;
