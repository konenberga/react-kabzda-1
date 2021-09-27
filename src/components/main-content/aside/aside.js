import React from 'react';
import classes from './aside.modele.css'
import Frends from "./Fends/frends";

const Aside = (props) => {
    return (
        <div>
            <aside>
                <Frends frends={props.aside.myFrends}/>
            </aside>
        </div>
    )
}

export default Aside;