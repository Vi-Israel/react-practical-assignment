import React from 'react';

const Post = (children) => {

    return (
        <div>
            {children.children.id} {children.children.title}
        </div>
    );
};

export default Post;