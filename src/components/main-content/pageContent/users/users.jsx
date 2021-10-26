import React from 'react'
import classes from "./users.module.css";
import * as axios from "axios";
import userPhoto from '../../../../assets/images/userAvatar.png'



class Users extends React.Component {

    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
            }
           )



    }

    onPageChanged = (pageNumber)=> {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <=pageCount; i++ ) {
            pages.push(i)
        }


        return (
            <div>
                <div className={classes.pageNumbers}>
                    {
                        pages.map(el => <span onClick={()=>{this.onPageChanged(el)}} className={ el == this.props.currentPage && classes.selectedPage}>{el}</span> )

                    }
                </div>
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
                                <p>{'el.location.  country'}</p>

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