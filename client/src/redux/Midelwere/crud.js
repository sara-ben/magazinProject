import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { actions } from '../action'


export const newUser = ({ dispatch, getState }) => next => action => {
    debugger
    if (action.type === "NEW_USER") {
        console.log(getState().userReducer)
    
        
//         var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   body:getState().userReducer.user,

//   redirect: 'follow'
// };

fetch("http://localhost:4000/newUser", {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
 }).then((response) => response.json())
  .then((result) => {console.log(result)
          dispatch(actions.setUser(result))
  })

  .catch(error => console.log('error', error));
   
    return next(action)
}



 }

 export const allUsers = ({ dispatch, getState }) => next => action => {
  debugger
  if (action.type === "ALL_USERS") {
  
      var raw = "";

      var requestOptions = {
        method: 'GET',
        body: raw,
        redirect: 'follow'
      };
      
      fetch("http://localhost:4000/getAllUsers", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));



}


// export const newUser = ({ dispatch, getState }) => next => action => {
//       debugger
//       if (action.type === "NEW_USER") {
//           // console.log(getState().recipeReducer.recipe)
      
          
//           var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
  
//   // var raw = JSON.stringify({
//   //   "name": "sara Gil",
//   //   "age": 21,
//   //   "email": "sg@",
//   //   "phone": "05484"
//   // });
  
//   var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     body:JSON.stringify(getState().userReducer.user.currentUser),
//     redirect: 'follow'
//   };
  
//   const newUser =()=>{
//     const url=`http://localhost:5000/getAllUsers`;
//     axios.get(url).then(response=>{
//         setUsers(response.data.users);
//     })
//     .catch((error)=>{console.log(error)})
// }
  
  
  
//    }
  
   }
