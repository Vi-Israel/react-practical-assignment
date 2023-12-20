export const CHANGE_USER_NAME = 'CHANGE_USER_NAME';

export const changeUserNameAction = name =>
    ({
        type: CHANGE_USER_NAME,
        payload: name
    });