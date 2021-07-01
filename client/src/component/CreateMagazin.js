import React, { useEffect } from 'react';
import Carusela from './carusela/Carusela';
import Button11 from './Button11';
import { connect } from "react-redux";
import {setMagazinId, setMagazinDate, setMagazinTitle, setMagazinPostes, setRecipeproducts,
    createMagazin} from '../redux/action'
    import './CreateMagazin.css';


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
    const month=magazinReducerComponent.date.getMonth();
    // const dateStr=String(magazinReducerComponent.date).getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December" ];

      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    debugger
useEffect(()=>{
    debugger;
    const {createMagazinCrud}=props;
    createMagazinCrud({title:'hello', date: new Date()})
},[])
    return (
        <div>
            <h2 className="title d-flex justify-content-center">{magazinReducerComponent.title}</h2>
            {/* <h3>{String(magazinReducerComponent.date)}</h3> */}
            <h5 className="date d-flex justify-content-center">{
            days[magazinReducerComponent.date.getDay()]+' , '
        + monthNames[magazinReducerComponent.date.getMonth()]+' '
            +magazinReducerComponent.date.getDate()+' '
            +magazinReducerComponent.date.getFullYear()
            }
            </h5>
           
            {/* <h3>{dateStr}</h3> */}
         <Carusela></Carusela>
         <Button11></Button11>
        </div>

    )
    } )



//     var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var d = new Date(dateString);
// var dayName = days[d.getDay()];