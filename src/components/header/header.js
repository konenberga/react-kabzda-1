import React from 'react';
import classes from './header.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={'conteiner'}>
                <img className="logo-img" src="https://themified.com/friend-finder/images/logo.png" alt="logo"/>


            </div>
        </div>
    )
}

export default Header;