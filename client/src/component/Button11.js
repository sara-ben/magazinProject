import React from 'react';
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
    function newRecipe(props) {
        const {createMagazin}=props
    return(
        <button variant="primary" onClick={() => 
            createMagazin({title:'hello', date: new Date()})}>הוספת מגזין</button>
    )
})