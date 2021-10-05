import React from 'react';
import classes from './aside.modele.css'
import Frends from "./Fends/frends";
import StoreContext from "../../../StoreContext";
import store from "../../../redux/redux-store";

const Aside = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                   return(
                       <div>
                           <aside>
                               <Frends frends={store.getState().aside.myFrends}/>
                           </aside>
                       </div>
                   )
                }
            }
        </StoreContext.Consumer>

    )
}

export default Aside;