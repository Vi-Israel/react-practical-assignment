export const CHANGE_PAGE = 'CHANGE_PAGE';

export const changePageAction = type =>
    ({
        type: CHANGE_PAGE,
        payload: type
    });