import React from 'react';
import Header from "./header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";


class HeaderComponent  extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                let {email, id, login} = response.data.data
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
        email: state.auth.email,
        id: state.auth.id,
        login: state.auth.login,
        }
}

const HeaderContainer = connect (mapStateToProps, {
            setAuthUserData
})(HeaderComponent)

export default HeaderContainer