import React from 'react';
import EditCommentModal from "./EditCommentModal";
import CommentItem from "./CommentItem";

const Comments = ({post, setPost}) => {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <EditCommentModal addOrEdit={'Add'}/>
            </div>

            {post.comments.map((item,index)=>
                <div key={index} className='container border border-black rounded'>
                    <CommentItem comment={item} post={post} setPost={setPost}/>
                </div> )}
        </div>
    );
};

export default Comments;