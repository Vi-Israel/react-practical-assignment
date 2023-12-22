import React, {useState} from 'react';
import {useSelector} from "react-redux";

const Post = ({postData,isEdit}) => {
    const [post,setPost]= useState(postData)
    const [postIsEdit,setPostIsEdit]= useState(isEdit)
    const userName = useSelector(state => state.userName)


    const renderNorm = () =>
    {
        return (
            <div >
               <h3>{post.username}</h3>
                <p>{post.title}</p>
                <p>rating: {post.likes.length-post.dislikes.length}</p>
                <p>Post date and time: {new Date(post.date*1).toLocaleString()}</p>
                <img src={post.imageSrc} alt="post image"/>
                <button disabled={!(userName.name===post.username)} onClick={()=>console.log("click")}>Edit post</button>
                <button disabled={!(userName.name===post.username)} onClick={()=>console.log("click")}>Delete post</button>
                <button  onClick={()=>console.log("click")}>Comment post</button>
                <button  onClick={()=>console.log("click")}>Like</button>
                <button  onClick={()=>console.log("click")}>Dislike</button>


            </div>
        );
    }

    const renderEdit = () =>
    {
        return (
            <div>
                b
            </div>
        )
    }

    return postIsEdit ? renderEdit() : renderNorm();
};

export default Post;