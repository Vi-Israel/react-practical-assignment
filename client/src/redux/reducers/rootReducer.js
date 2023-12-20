import {combineReducers} from "redux";
import {userNameReducer} from "./userNameReducer";
import {pageReducer} from "./pageReducer";

export const rootReducer = combineReducers(
    {
        userName: userNameReducer,
        page: pageReducer
    })