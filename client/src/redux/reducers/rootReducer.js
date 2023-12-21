import {combineReducers} from "redux";
import {userNameReducer} from "./userNameReducer";
import {pageReducer} from "./pageReducer";
import {postsReducer} from "./postsReducer";

export const rootReducer = combineReducers(
    {
        userName: userNameReducer,
        pageType: pageReducer,
        posts:postsReducer
    })