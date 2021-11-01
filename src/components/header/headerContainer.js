import React from 'react';
import Header from "./header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {authAPI} from "../../api/api";


class HeaderComponent  extends React.Component{

    componentDidMount() {
        authAPI.authMe()
            .then(data => {
                let {email, id, login} = data
                this.props.setAuthUserData(email, id, login)
            })
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
        }
}

const HeaderContainer = connect (mapStateToProps, {
            setAuthUserData
})(HeaderComponent)

export default HeaderContainer