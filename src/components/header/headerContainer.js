import React from 'react';
import Header from "./header";
import * as axios from "axios";
import {connect} from "react-redux";
import {authMe, logout, setAuthUserData} from "../../redux/authReducer";
import {authAPI} from "../../api/api";


class HeaderComponent  extends React.Component{

    componentDidMount() {
        this.props.authMe()
    }


    render() {
        return (
            <>
                <Header {...this.props}/>
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return{
        email: state.authUser.email,
        id: state.authUser.id,
        login: state.authUser.login,
        isAuth: state.authUser.isAuth
        }
}

const HeaderContainer = connect (mapStateToProps, {
            setAuthUserData,
            authMe: authMe,
            logout
})(HeaderComponent)

export default HeaderContainer