import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import {actions} from "../redux/action"


const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
}}


const mapDispatchToProps = (dispatch) => (
    {
      setId: (val) => dispatch(actions.setId(val)),
      setName: (val) => dispatch(actions.setName(val)),
      setEmail: (val) => dispatch(actions.setEmail(val)),
      allUsers: (u) => dispatch(actions.allUsers(u)),

    }
)


export default connect(mapStateToProps, mapDispatchToProps)(function newUser(props) {


    return (
        <div>
          <h1>All Users</h1>
          {/* <ul>
            {props.users.map(user =>{
              <li>
                <label>
                  user.name
                  user.email
                </label>
              </li>
            }
            )
            
            }
          </ul> */}


{/* {Object.keys(props.allUsers).map((user, i) => (
    <li className="travelcompany-input" key={i}>
        <span className="input-label">email: {user[email]} Name: {user[name]}</span>
    </li>
))}        */}
        </div>

    )
  })


 