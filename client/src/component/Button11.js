import React from 'react';
import {createMagazin} from '../redux/action'


export default function Button11(props){
    return(
    <button variant="primary" onClick={() => createMagazin({title:'hello', date: new Date()})}>הוספת מגזין</button>
    )
}