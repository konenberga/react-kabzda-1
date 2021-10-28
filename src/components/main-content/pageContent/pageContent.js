import React from 'react';
import ProfileContainer from "./profile/profileContainer";
import {Route} from "react-router-dom";
import Settings from "./settings/settings";
import Music from "./music/music";
import News from "./news/news";
import DialogsContainer from "./dialogs/dialogsContainer";
import UsersContainer from "./users/userContainer";




const PageContent = (props) => {
            return (
            <div>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer /*store={props.store}*//>}></Route>
                    <Route path={'/dialogs'} render={() => <DialogsContainer /*store={props.store}*/ />}></Route>
                    <Route path={'/news'} render={() => <News />} ></Route>
                    <Route path={'/music'} render={() => <Music />}></Route>
                    <Route path={'/setting'} render={() => <Settings />}></Route>
                    <Route path={'/users'} render={()=> <UsersContainer />}></Route>
            </div>
    )
}

export default PageContent;