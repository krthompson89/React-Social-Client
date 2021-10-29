import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import CreatePost from "../pages/createPost";
import Feed from "../pages/feed";
import Profile from "../pages/profile";
import Search from "../pages/search";
import Event from "../pages/event";
import Login from "../pages/login";
import Register from "../pages/register";
import Friends from "../pages/friends";
import Chat from "../pages/chat";
import Settings from "../pages/settings";
import ProfilePage from "../pages/ProfilePage";
import EditProfilePage from "../pages/EditProfilePage";
import TestPage from "../pages/testPage";
export default function MainRouter(props: any) {

    const [loggedIn, setLoggedIn] = useState(true);

    const history = useHistory();

    const doLogout = () => {

        setLoggedIn(false)
        history.push("/")
    }

    const doLogin = () => {

        setLoggedIn(true)
        history.push("/")
    }
    let toReturn = <></>;
    if (loggedIn) {
        toReturn =
            <div>
                <Switch>
                    <Route exact path="/create_post">
                        <CreatePost />
                    </Route>
                    <Route exact path="/search">
                        <Search />
                    </Route>
                    <Route exact path="/event">
                        <Event />
                    </Route>
                    <Route exact path="/chat">
                        <Chat />
                    </Route>
                    <Route exact path="/settings">
                        <Settings />
                    </Route>
                    <Route exact path="/friends">
                        <Friends />
                    </Route>
                    <Route exact path="/profile" component={ProfilePage}>
                        <ProfilePage />
                    </Route>
                    <Route exact path="/editProfile" component={EditProfilePage}>
                        <EditProfilePage />
                    </Route>
                    <Route exact path="/logout">
                        {doLogout}
                    </Route>
                    {/* <Route path="/" component={TestPage}>
                        <TestPage />
                    </Route> */}
                    <Route path="/">
                        <Feed />
                    </Route>
                </Switch>
            </div>
    }
    else {
        toReturn =
            <div>
                <Switch>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/create_post">
                        <CreatePost />
                    </Route>
                    <Route path="/login">
                        <Login />
                        {/* {doLogin} */}
                    </Route>
                    <Route path="/">
                        <Login />
                    </Route>
                </Switch>
            </div>
    }
    return (
        <>
            {toReturn}
        </>
    )
}