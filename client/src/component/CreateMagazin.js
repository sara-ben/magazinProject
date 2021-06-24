import React from 'react';
import Carusela from './carusela/Carusela';
import Button11 from './Button11';
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

export default connect(mapStateToProps, mapDispatchToProps)(

  function CreateMagazin(props) {

    return (
        <div>
            <h1>{setMagazinTitle}</h1>
         <Carusela></Carusela>
         <Button11></Button11>
        </div>

    )
    } )