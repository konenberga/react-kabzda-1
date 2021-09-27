import React from 'react';
import classes from './post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg" alt=""/>
            <span>{props.textPost}</span>
            <span>like {props.likeCount}</span>
        </div>
    )
}

export default Post