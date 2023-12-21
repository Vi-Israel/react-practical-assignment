import {CHANGE_POSTS} from "../actions/postsAction";

const state={
    posts:[]
}
export const postsReducer=(posts=state,action)=>{
    switch (action.type){
        case CHANGE_POSTS:
            return  {...posts, name: action.payload || posts.name};
        default:
            return posts;
    }
}