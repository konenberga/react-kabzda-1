import React from 'react';
import Profile from "./profile/profile";
import Dialogs from "./dialogs/dialogs";
import {Route} from "react-router-dom";
import Settings from "./settings/settings";
import Music from "./music/music";
import News from "./news/news";




const PageContent = (props) => {
        return (
            <div>
                    <Route path={'/profile'} render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}></Route>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogsPage={props.state.dialogsPage} sendNewMessage={props.sendNewMessage} updateDialogText={props.updateDialogText}/>}></Route>
                    <Route path={'/news'} render={() => <News />} ></Route>
                    <Route path={'/music'} render={() => <Music />}></Route>
                    <Route path={'/setting'} render={() => <Settings />}></Route>
            </div>
    )
}

export default PageContent;