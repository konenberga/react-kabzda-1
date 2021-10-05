import React from 'react';
import classes from './aside.modele.css'
import Frends from "./Fends/frends";
import store from "../../../redux/redux-store";
import {connect} from "react-redux";

// const Aside = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                    return(
//                        <div>
//                            <aside>
//                                <Frends frends={store.getState().aside.myFrends}/>
//                            </aside>
//                        </div>
//                    )
//                 }
//             }
//         </StoreContext.Consumer>
//
//     )
// }

let mapStateToProps = (state) => {
    return {
        frends: state.aside.myFrends
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}

const Aside = connect(mapStateToProps, mapDispatchToProps)(Frends)

export default Aside;