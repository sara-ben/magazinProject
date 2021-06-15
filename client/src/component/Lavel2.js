import React from 'react';
import { connect } from "react-redux";
import {actions} from "../redux/action"


const mapStateToProps = (state) => {
  return {
    userComponent: state.userReducer.user,
}}


export default connect(mapStateToProps)(function showUser(props) {

    return (
        <div>
      <p>my name is {props.userComponent.name? props.userComponent.name: '-full name-' }</p>
      <p>I'm {props.userComponent.age? props.userComponent.age: '-age-'} years old,</p>
      <p>I live in {props.userComponent.city? props.userComponent.city: '-city-'}</p>
      <p>my address mail is {props.userComponent.email? props.userComponent.email: '-email-'}</p>
      <p>and my phone number is {props.userComponent.phone? props.userComponent.phone: '-phone-'}</p>
        </div>

    )
    } )



    
    