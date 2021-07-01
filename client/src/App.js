import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import React from 'react'
import MainPage from './component/MainPage';

import CreateMagazin from './component/CreateMagazin';
import EditPost from './component/CreatePost/CreatePost';
import CreatePost from './component/CreatePost/CreatePost';



function App() {

  return (


    <div className="App">
{/* <MainPage/> */}


<Router>
        <Switch>
            <Route exact path="/CreateMagazin"  component={CreateMagazin}/>
            <Route exact path="/"  component={MainPage}/>
            <Route exact path="/EditPost"  component = {EditPost}/>
            <Route exact path="/CreatePost"  component = {CreatePost}/>
        </Switch>
    </Router>‏




    </div>

  );
}





export default App;
