import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/formsControls/FormsControls";
import {requiredFields} from "../../../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../../../redux/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field
                component={Input}
                validate={[requiredFields]}
                name={'email'}
                placeholder={'login'}
            /></div>
            <div><Field
                component={Input}
                name={'password'}
                placeholder={'password'}
            /></div>
            <div><Field
                component={Input}
                name={'rememberMe'}
                type={'checkbox'}
                />
                <span> Remember me</span>
            </div>
            <div>
                <button >Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login' // a unique identifier for this form
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }


    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
        debugger
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth:state.authUser.isAuth
    }
}

export default connect(mapStateToProps, {
    login: login
}) (Login)