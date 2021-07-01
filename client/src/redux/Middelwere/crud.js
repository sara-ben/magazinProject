import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { action } from '../action'


export const CreateMagazin = ({ dispatch, getState }) => next => action => {
  debugger
  // alert("crete magazin");
  if (action.type === 'CREATE_MAGAZIN') {
    console.log(getState().magazinReducer)
    // let magazin =  action.payload;

    // // var raw = JSON.stringify({
    // //   "name": "cake",
    // //   "Instructions": "hhhhhhhhhhhhhhhhhhh"
    // // });

    // var requestOptions = {
    //     method: 'POST',
    //       headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json"
    //   },
    //     body: magazin,
    //     redirect: 'follow'
    //   };

    //   fetch("http://localhost:4000/newRecipe", requestOptions)
    //     .then(response => response.json())
    //     .then((result) => {console.log(result);
    // //   dispatch action.השם של הפונקציה לדוגמא עריכת מתרכון
    //      dispatch(action.setRecipe(result))

    //   })
    //   .catch(error => console.log('error', error));



    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // var raw = JSON.stringify({
    //   "title": "hello world!!"
    // });

    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow'
    // };

    // fetch("localhost:4000/createMagazin", requestOptions)
    //   .then(response => response.json())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
      const magazine ={ magazine:getState().magazinReducer.magazinDefualt}
    axios.post('http://localhost:4000/createMagazin',magazine)
    .then(result => {console.log("the magazine created")
    //פונקציה שמקבלת אוביקט לאיזה action ללכת
    dispatch({type:'SET_MAGAZIN', payload: result});
  })
      .catch(error => console.log('error', error));
    return next(action)
  }
}
