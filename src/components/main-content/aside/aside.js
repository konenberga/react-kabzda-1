// import React from 'react';
import Frends from "./Fends/frends";
import {connect} from "react-redux";


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