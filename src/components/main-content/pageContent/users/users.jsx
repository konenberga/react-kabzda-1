import React from 'react'
import classes from "./users.module.css";
import * as axios from "axios";
import userPhoto from '../../../../assets/images/userAvatar.png'



class Users extends React.Component {
    constructor(props) {
        super(props)
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUsers(response.data.items))
    }

    render() {
        return (
            <div>
                 {
                    this.props.users.map(el => <div key={el.id} className={classes.item}>
                        <div>
                            <div className={classes.imgLogo}><img
                                src={el.photos.small != null ? el.photos.small : userPhoto} alt=""/></div>
                            <div className={classes.button}>{
                                el.followed
                                    ? <button onClick={() => {
                                        this.props.follow(el.id)
                                    }}>follow</button>
                                    : <button onClick={() => {
                                        this.props.unfollow(el.id)
                                    }}>unfollow</button>
                            }</div>
                        </div>
                        <div className={classes.userInfo}>
                            <div className={classes.fullName}>{el.name}</div>
                            <div className={classes.location}>
                                <p>{'el.location.city'}</p>
                                <p>{'el.location.country'}</p>

                            </div>
                            <div className={classes.status}>{'el.status'}</div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}


export default Users