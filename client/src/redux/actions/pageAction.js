export const CHANGE_PAGE = 'CHANGE_PAGE';
export const CHANGE_KEYWORD = 'CHANGE_KEYWORD';
export const CHANGE_PAGE_NUMBER = 'CHANGE_PAGE_NUMBER';

export const changePageAction = type =>
    ({
        type: CHANGE_PAGE,
        payload: type
    });
export const changeKeywordAction = word =>
    ({
        type: CHANGE_PAGE,
        payload: word
    });
export const changePageNumberAction = number =>
    ({
        type: CHANGE_PAGE,
        payload: number
    });