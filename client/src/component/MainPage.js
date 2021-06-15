import React from 'react';

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Card";

import Nav from "react-bootstrap/Nav";
// import Lavel1 from "./Lavel1";
// import Lavel2 from "./Lavel2";
import { Link } from 'react-router-dom';

import './MainPage.css';
export default function MainPage(props) {


  


  return (
     <>
    <Nav>
  <Nav.Item>
    <Nav.Link href="/Lavel1">to enter your details</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/Lavel2">to show your details</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/Lavel3">to show all details</Nav.Link>
  </Nav.Item>
</Nav>

    </>
  )
}