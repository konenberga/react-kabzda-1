import React from 'react';
import NavBar from "./navBar/navBar";
import PageContent from "./pageContent/pageContent";
import Aside from "./aside/aside";
import classes from './main-content.module.css'



const MainContent = (props) => {

    return (
        <div className={'conteiner'}>
            <div className={classes.mainContent}>
                <NavBar />
                <PageContent state={props.state} dispatch={props.dispatch} />
                <Aside aside={props.state.aside}/>
            </div>
        </div>
    )
}

export default MainContent;