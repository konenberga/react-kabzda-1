import React from 'react'
import classes from "./users.module.css";

const Users = (props) => {

    if(props.users.length == 0) {
        props.setUsers([
            {id:1, followed: true, photo:'https://igorzuevich.com/wp-content/uploads/2017/12/avatarka-v-telegram.png', status: 'status text', fullName: 'Lexa K.', location: {city: 'zaporojhue', country: 'ukraine'}},
            {id:2, followed: false, photo:'https://igorzuevich.com/wp-content/uploads/2017/12/avatarka-v-telegram.png', status: 'status text 222', fullName: 'Denis K.', location: {city: 'moscow', country: 'russia'}},
            {id:3, followed: true, photo:'https://igorzuevich.com/wp-content/uploads/2017/12/avatarka-v-telegram.png', status: 'status text 333', fullName: 'Dimych.', location: {city: 'kiev', country: 'ukraine'}},
            ]
        )
    }
    return (
        <div>
            {
                props.users.map(el => <div key={el.id} className={classes.item}>
                    <div>
                        <div className={classes.imgLogo}><img src={el.photo} alt=""/></div>
                        <div className={classes.button}>{
                            el.followed
                                ? <button onClick={()=>{props.follow(el.id)}}>follow</button>
                                : <button onClick={()=>{props.unfollow(el.id)}}>unfollow</button>
                        }</div>
                    </div>
                    <div className={classes.userInfo}>
                        <div className={classes.fullName}>{el.fullName}</div>
                        <div className={classes.location}>
                            <p>{el.location.city}</p>
                            <p>{el.location.country}</p>

                        </div>
                        <div className={classes.status}>{el.status}</div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users