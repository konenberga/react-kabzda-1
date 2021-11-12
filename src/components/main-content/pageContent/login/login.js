import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div><Field component={"input"} name={'login'} placeholder={'login'}/></div>
                <div><Field component={"input"} name={'password'} placeholder={'password'}/></div>
                <div><Field component={"input"} name={'RememberMe'} type={'checkbox'}/><span> Remember me</span></div>
                <div><button>Login</button></div>
            </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login' // a unique identifier for this form
})(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default Login