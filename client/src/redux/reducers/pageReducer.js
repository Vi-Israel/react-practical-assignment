import {CHANGE_PAGE} from "../actions/pageAction";

const state={
    type:"auth"
}
export const pageReducer=(page=state,action)=>{
    switch (action.type)
    {
        case CHANGE_PAGE:
            return {...page, type: action.payload|| page.type}
    }

}