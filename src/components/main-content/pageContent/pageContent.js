import React from 'react';
import Profile from "./profile/profile";
import Dialogs from "./dialogs/dialogs";
import {Route} from "react-router-dom";
import Settings from "./settings/settings";
import Music from "./music/music";
import News from "./news/news";
import DialogsContainer from "./dialogs/dialogsContainer";




const PageContent = (props) => {
            return (
            <div>
                    <Route path={'/profile'} render={() => <Profile store={props.store}/>}></Route>
                    <Route path={'/dialogs'} render={() => <DialogsContainer store={props.store} />}></Route>
                    <Route path={'/news'} render={() => <News />} ></Route>
                    <Route path={'/music'} render={() => <Music />}></Route>
                    <Route path={'/setting'} render={() => <Settings />}></Route>
            </div>
    )
}

export default PageContent;