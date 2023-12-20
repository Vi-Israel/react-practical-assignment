import {CHANGE_USER_NAME} from "../actions/userNameAction";

const state={
    name:""
}
export const userNameReducer=(userName=state,action)=>{
    switch (action.type){
        case CHANGE_USER_NAME:
            return  {...userName, name: action.payload || userName.name};
        default:
            return userName;
    }
}