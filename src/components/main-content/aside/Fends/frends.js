import React from 'react'
import classes from './frends.module.css'
import FrendItem from "./frendItem/frendItem";



const Frends = (props) => {
    // debugger;
    let frendItem = props.frends.map(el=> <FrendItem name={el.name} id={el.id} key={el.id}/>)
        return (
        <div className={classes.frendWrapper}>
            {frendItem}
        </div>
    )
}

export default Frends