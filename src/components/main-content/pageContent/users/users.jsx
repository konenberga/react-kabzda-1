import React from 'react'
import classes from "./users.module.css";
import * as axios from "axios";
import userPhoto from '../../../../assets/images/userAvatar.png'
import {NavLink} from "react-router-dom";
import {followAPI} from "../../../../api/api";


const Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount + 5; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={classes.pageNumbers}>
                {
                    pages.map(el => <span key={el} onClick={() => {
                        props.onPageChanged(el)
                    }} className={el == props.currentPage && classes.selectedPage}>{el}</span>)
                }

            </div>
            {
                props.users.map(el => <div key={el.id} className={classes.item}>
                    <div>
                        <NavLink to={`profile/${el.id}`}>
                            <div className={classes.imgLogo}>
                                <img src={el.photos.small != null ? el.photos.small : userPhoto} alt=""/>
                            </div>
                        </NavLink>
                        <div className={classes.button}>{
                            el.followed
                                ? <button disabled={props.followingInProgress.some(id => id == el.id)} onClick={() => {
                                    props.toggleFollowingInProgress(true, el.id)
                                    followAPI.unfollow(el.id)
                                        .then(data => {
                                                if (data.resultCode == 0) {
                                                    props.unfollow(el.id)
                                                    props.toggleFollowingInProgress(false, el.id)
                                                }
                                            }
                                        )
                                }
                                }>unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id == el.id)} onClick={() => {
                                    props.toggleFollowingInProgress(true, el.id)
                                    followAPI.follow(el.id)
                                        .then(data => {
                                                if (data.resultCode == 0) {
                                                    props.follow(el.id)
                                                    props.toggleFollowingInProgress(false, el.id)
                                                }
                                            }
                                        )
                                }
                                }>follow</button>
                        }</div>
                    </div>
                    <div className={classes.userInfo}>
                        <div className={classes.fullName}>{el.name}</div>
                        <div className={classes.location}>
                            <p>{'el.location.city'}</p>
                            <p>{'el.location.  country'}</p>

                        </div>
                        <div className={classes.status}>{'el.status'}</div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users