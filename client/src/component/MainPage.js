import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CreateMagazinImage from "../image/top-view-person-writing-laptop-with-copy-space/top-view-person-writing-laptop-with-copy-space@2x.png";
import goSomewereImage from "../image/top-view-person-writing-laptop-with-copy-space/toMagazin.png";
import pin from "../image/icons/urn_aaid_sc_US_21663399-2003-43d6-b979-82c629554167 (1).png";
import { Link } from 'react-router-dom';
import './MainPage.css';
import { connect } from "react-redux";
import {setMagazinId, setMagazinDate, setMagazinTitle, setMagazinPostes, setRecipeproducts,
    createMagazin} from '../redux/action'

const mapStateToProps = (state) => {
    return {
      recipeReducer: state.recipeReducer,
  }}

const mapDispatchToProps = (dispatch) => (
    {
        setMagazinId: (val) => dispatch(setMagazinId(val)),
        setMagazinDate: (val) => dispatch(setMagazinDate(val)),
        setMagazinTitle: (val) => dispatch(setMagazinTitle(val)),
        setMagazinPostes: (val) => dispatch(setMagazinPostes(val)),
        createMagazin: (val) =>{ debugger; return dispatch(createMagazin(val))},
    }
)







export default connect(mapStateToProps, mapDispatchToProps)
( function MainPage(props) {
  return (
    <>

    <div class="body">
     <br/><br/>
     <hr class="hr"></hr>
      <div class="d-flex justify-content-center">
        <h1>What do you want to do today?</h1>
      </div>
      <div>
     

        <div class="cards" class="d-flex bd-highlight mb-3" class="d-flex justify-content-center" >
          <Card class="crd" id="crd1" style={{ width: '18rem' }}>
            <Card.Img class="pic" variant="top" src={goSomewereImage} />
            <Card.Body class="d-flex justify-content-center" >
              {/* <a>All Magazins</a> */}
              <Button variant="primary">All Magazins</Button>
            </Card.Body>
          </Card>


          {/* <div class="d-flex bd-highlight mb-3">
  <div class="me-auto p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
</div> */}



          <Card class="crd" id="crd2" style={{ width: '18rem' }}>
            <Card.Img class="pic" variant="top" src={CreateMagazinImage} />
            <Card.Body  class="d-flex justify-content-center">
            <Link variant="link" to="/CreateMagazin">Create Magazin</Link>

              {/* <Button variant="primary">Create Magazin</Button> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    </>
  )
})