import {base_url} from "../../utils/constants";
import {changePageNumberTotalAction} from "./pageAction";

export const CHANGE_POSTS = 'CHANGE_POSTS';

export const changePosts = posts =>
    ({
        type: CHANGE_POSTS,
        payload: posts
    });

export const getPostsByPage= number=>{
    return dispatch=>{
    fetch(base_url+`post/page/${number}`)
        .then(response=>response.json())
        .then(data=> {
            dispatch(changePosts(data.result))
            dispatch(changePageNumberTotalAction(data.totalPages))
        })
        .catch(()=>console.log("Error in posts"))
}}
export const getPostsByKeyword= keyWord=>{
    return dispatch=>{
    fetch(base_url+`post/search/${keyWord}`)
        .then(response=>response.json())
        .then(data=> {
            dispatch(changePosts(data.result))
            dispatch(changePageNumberTotalAction(data.totalPages))
        })
        .catch(()=>console.log("Error in posts"))
}}