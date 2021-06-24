import React, { useEffect } from 'react';
import Carusela from './carusela/Carusela';
import Button11 from './Button11';
import { connect } from "react-redux";
import {setMagazinId, setMagazinDate, setMagazinTitle, setMagazinPostes, setRecipeproducts,
    createMagazin} from '../redux/action'


const mapStateToProps = (state) => {
    return {
        magazinReducerComponent: state.magazinReducer.magazinDefualt,
  }}

const mapDispatchToProps = (dispatch) => (
    {
        setMagazinId: (val) => dispatch(setMagazinId(val)),
        setMagazinDate: (val) =>{debugger; return dispatch(setMagazinDate(val))},
        setMagazinTitle: (val) => {debugger; return dispatch(setMagazinTitle(val))},
        setMagazinPostes: (val) => dispatch(setMagazinPostes(val)),
        createMagazinCrud: (val) =>{ debugger; return dispatch(createMagazin(val))},
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(
  function CreateMagazin(props) {
    const {magazinReducerComponent}=props;
    // const dateStr=String(magazinReducerComponent.date).getMonth();
    debugger
useEffect(()=>{
    debugger;
    const {createMagazinCrud}=props;
    createMagazinCrud({title:'hello', date: new Date()})
},[])
    return (
        <div>
            <h1>{magazinReducerComponent.title}</h1>
            <h3>{String(magazinReducerComponent.date)}</h3>
            <h3>{magazinReducerComponent.date.getMonth()+'-'
            +magazinReducerComponent.date.getDate()+'-'
            +magazinReducerComponent.date.getFullYear()}</h3>
            
            {/* <h3>{dateStr}</h3> */}
         <Carusela></Carusela>
         <Button11></Button11>
        </div>

    )
    } )