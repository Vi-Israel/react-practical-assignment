import {CHANGE_PAGE} from "../actions/pageAction";

const state={
    type:"auth"
}
export const pageReducer=(pageType=state,action)=>{
    switch (action.type)
    {
        case CHANGE_PAGE:
            return {...pageType, type: action.payload|| pageType.type};
        default:
            return pageType;
    }

}