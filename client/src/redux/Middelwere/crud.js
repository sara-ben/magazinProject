import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { action } from '../action'


export const CreateMagazin = ({ dispatch, getState }) => next => action=> {
    // debugger
    
    if (action.type === 'CREATE_MAGAZIN') {
      alert("crete magazin");
        let magazin =  action.payload;

        // var raw = JSON.stringify({
        //   "name": "cake",
        //   "Instructions": "hhhhhhhhhhhhhhhhhhh"
        // });
        
        var requestOptions = {
            method: 'POST',
              headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
          },
            body: magazin,
            redirect: 'follow'
          };
          
          fetch("http://localhost:4000/newRecipe", requestOptions)
            .then(response => response.json())
            .then((result) => {console.log(result);
        //   dispatch action.השם של הפונקציה לדוגמא עריכת מתרכון
             dispatch(action.setRecipe(result))

          })
            .catch(error => console.log('error', error));
          
  }
   
    return next(action)
}
export const CreatePost = ({ dispatch, getState }) => next => action=> {
  debugger
  
  if (action.type === 'CREATE_POST') {
    alert("create post");
      let post =  action.payload;
      
      var requestOptions = {
          method: 'POST',
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
          body: post,
          redirect: 'follow'
        };
        
        fetch("http://localhost:4000/newRecipe", requestOptions)
          .then(response => response.json())
          .then((result) => {console.log(result);
      //   dispatch action.השם של הפונקציה לדוגמא עריכת מתרכון
           dispatch(action.setRecipe(result))

        })
          .catch(error => console.log('error', error));
        
}
 
  return next(action)
}
