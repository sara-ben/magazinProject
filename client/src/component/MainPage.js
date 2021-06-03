import React from 'react';
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";

import CreateMagazinImage from "../image/top-view-person-writing-laptop-with-copy-space/top-view-person-writing-laptop-with-copy-space@2x.png";
import goSomewereImage from "../image/top-view-person-writing-laptop-with-copy-space/toMagazin.png";
import  './MainPage.css';
import { Link } from 'react-router-dom';
export default function MainPage(props) {


  // function newUser() {
  //   history.push('/register')
  // }


  return (
    <>
      <div class="d-flex justify-content-center">
        <h1>What do you want to do today?</h1>
      </div>
      <div>

        <div >
          <Card class="crd" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={goSomewereImage} />
            <Card.Body>

              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>




          <Card class="crd" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={CreateMagazinImage} />
            <Card.Body>

              {/* <Button variant="primary">Create Magazin</Button> */}
              <Link variant="link" to="/CreateMagazin" >Create Magazin</Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>

  )
}