import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import {actions} from "../redux/action"


const mapStateToProps = (state) => {
  return {
    userComponent: state.userReducer.user,
}}


const mapDispatchToProps = (dispatch) => (
    {
      setId: (val) => dispatch({type:"SET_ID" ,payload: val}),
      setName: (val) => dispatch({type:"SET_NAME" ,payload: val}),
      setEmail: (val) => dispatch({type:"SET_EMAIL" ,payload: val}),
      setCity: (val) => dispatch({type:"SET_CITY" ,payload: val}),
      setPhone: (val) => dispatch({type:"SET_PHONE" ,payload: val}),
      setAge: (val) => dispatch({type:"SET_AGE" ,payload: val}),
      setUser: (u) => dispatch({type:"NEW_USER" ,payload: u}),
      allUsers: (u) => dispatch({type:"ALL_USERS" ,payload: u}),
      // changeFirstName: (fName) => dispatch({ type: "SET_FIRST_NAME_WITH_DOLAR", payload: fName }),

    }
)


export default connect(mapStateToProps, mapDispatchToProps)(function newUser(props) {


    return (
        <div>

<Form>
  <Form.Group >
<Form.Label>full name</Form.Label>
<Form.Control
id="fullName"
type="text"
 placeholder="Enter name"
 value={props.userComponent.name}
 onChange={(e) =>props.setName(e.target.value)}
 />
  {/* <input id="firstName" value={props.userComponent.firstName} onChange={(e) => { props.changeFirstName(e.target.value) }} /> */}
</Form.Group>

<Form.Group >
<Form.Label>age</Form.Label>
<Form.Control
 placeholder="Enter age"
 // value={props.userComponent.age}
 onChange={(e) =>props.setAge(e.target.value)}
 />
</Form.Group>

<Form.Group >
<Form.Label>city</Form.Label>
<Form.Control
 placeholder="Enter city"
 // value={props.userComponent.city}
 onChange={(e) =>props.setCity(e.target.value)}
 />
</Form.Group>

<Form.Group >
<Form.Label>Email address</Form.Label>
<Form.Control
//  type="email"
 placeholder="Enter email"
 // value={props.userComponent.email}
 onChange={(e) =>props.setEmail(e.target.value)}      />
</Form.Group>

<Form.Group >
<Form.Label>phone</Form.Label>
<Form.Control
type="password"
 placeholder="Enter phone number"
 // value={props.userComponent.phone}
 onChange={(e) =>props.setPhone(e.target.value)}
 />
</Form.Group>



<Button onClick={props.setUser} variant="primary" type="submit"> Submit</Button>
</Form>


        </div>

    )
  })


