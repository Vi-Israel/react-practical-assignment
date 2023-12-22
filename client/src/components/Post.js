import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {base_url} from "../utils/constants";
import {reRender} from "../redux/actions/pageAction";

const Post = ({postData, isEdit}) => {
    const [post, setPost] = useState(postData)
    const [postIsEdit, setPostIsEdit] = useState(isEdit)
    const userName = useSelector(state => state.userName)
    const dispatch = useDispatch();
    const posts=useSelector(state => state.posts);


    useEffect(() => {
        setPost(postData)
    }, [posts.posts]);
    const deletePost = () => {
        fetch(base_url+`post/${post.id}`,{method:'DELETE'})
            .then(res=> {

                dispatch(reRender(1));
            })

    }

    const renderNorm = () => {
        return (
            <div>
                <h3>{post.username}</h3>
                <p>{post.title}</p>
                <p>{post.id}</p>
                <p>rating: {post.likes.length - post.dislikes.length}</p>
                <p>Post date and time: {new Date(post.date * 1).toLocaleString()}</p>
                {post.imageSrc ? <img src={post.imageSrc} alt="post image"/> : null}
                <button disabled={!(userName.name === post.username)} onClick={() => setPostIsEdit(true)}>Edit post
                </button>
                <button disabled={!(userName.name === post.username)} onClick={deletePost}>Delete post
                </button>
                <button onClick={() => console.log("click")}>Comment post</button>
                <button onClick={() => console.log("click")}>Like</button>
                <button onClick={() => console.log("click")}>Dislike</button>


            </div>
        );
    }

    const renderEdit = () => {
        return (
            <div>
                b
            </div>
        )
    }

    return postIsEdit ? renderEdit() : renderNorm();
};

export default Post;