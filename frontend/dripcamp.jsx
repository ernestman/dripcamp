import React from "react";
import ReactDOM from "react-dom";
import {createUser, signIn, signOut} from "./actions/session_actions";
import configureStore from "./store/store";
import Root from "./components/root";
import {allCampgrounds} from "./util/campground_api_util";

import {fetchCampgrounds, fetchCampground} from "./actions/campground_actions";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");


    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.createUser = createUser
    window.signIn = signIn
    window.signOut = signOut

    window.fetchCampgrounds = fetchCampgrounds;    
    window.fetchCampground = fetchCampground;   
    

    ReactDOM.render(<Root store={store}/>, root);
})