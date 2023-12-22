import {
    CHANGE_KEYWORD,
    CHANGE_PAGE,
    CHANGE_PAGE_NUMBER,
    CHANGE_PAGE_NUMBER_TOTAL,
    RERENDER
} from "../actions/pageAction";

const state = {
    type: "auth",
    pageNumber: 1,
    pageNumberTotal: 1,
    keyword: "",
    reRender: 1
}
export const pageReducer = (pageType = state, action) => {
    switch (action.type) {
        case RERENDER:
            return {...pageType, reRender: pageType.reRender+action.payload}
        case CHANGE_PAGE:
            return {...pageType, type: action.payload || pageType.type};
        case CHANGE_PAGE_NUMBER:
            return {...pageType, pageNumber: action.payload || pageType.pageNumber};
        case CHANGE_PAGE_NUMBER_TOTAL:
            return {...pageType, pageNumberTotal: action.payload || pageType.pageNumberTotal};
        case CHANGE_KEYWORD:
            return {...pageType, keyword: action.payload };
        default:
            return pageType;
    }

}