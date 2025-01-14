export const CHANGE_PAGE = 'CHANGE_PAGE';
export const CHANGE_KEYWORD = 'CHANGE_KEYWORD';
export const CHANGE_PAGE_NUMBER = 'CHANGE_PAGE_NUMBER';
export const CHANGE_PAGE_NUMBER_TOTAL = 'CHANGE_PAGE_NUMBER_TOTAL';
export const RERENDER = 'RERENDER';
export const reRender = number =>
    ({
        type: RERENDER,
        payload: number
    })
export const changePageAction = type =>
    ({
        type: CHANGE_PAGE,
        payload: type
    });
export const changeKeywordAction = word =>
    ({
        type: CHANGE_KEYWORD,
        payload: word
    });
export const changePageNumberAction = number =>
    ({
        type: CHANGE_PAGE_NUMBER,
        payload: number
    });
export const changePageNumberTotalAction = number =>
    ({
        type: CHANGE_PAGE_NUMBER_TOTAL,
        payload: number
    });