
export const CHANGE_POSTS = 'CHANGE_POSTS';

export const changePosts = posts =>
    ({
        type: CHANGE_POSTS,
        payload: posts
    });