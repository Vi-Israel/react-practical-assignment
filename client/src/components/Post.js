import React from 'react';

const Post = (children) => {

    return (
        <div className='col-12 col-md-6 col-lg-4 border border-black' >
            {children.children.id} {children.children.title}
        </div>
    );
};

export default Post;