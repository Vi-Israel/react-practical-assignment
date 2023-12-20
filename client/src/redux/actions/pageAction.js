export const CHANGE_PAGE = 'CHANGE_PAGE';

export const changePageAction = name =>
    ({
        type: CHANGE_PAGE,
        payload: name
    });