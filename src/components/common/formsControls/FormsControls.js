import React from "react";
import classes from "./FormsControls.module.css"


export const Textarea = ({input, meta, ...props}) => {
    return (
        <div>
            <textarea className={meta.touched && meta.error && classes.error} {...input} {...meta} {...props} name={'newPostText'}/>
            { (meta.touched && meta.error && classes.error)? <span className={classes.textError}>{meta.error}</span> : null}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    return (
        <div>
            <input className={meta.touched && meta.error && classes.error} {...input} {...meta} {...props} name={'newPostText'}/>
            { (meta.touched && meta.error && classes.error)? <span className={classes.textError}>{meta.error}</span> : null}
        </div>
    )
}