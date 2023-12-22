import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {base_url} from "../utils/constants";
import {reRender} from "../redux/actions/pageAction";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import EditPostModal from "./EditPostModal";

const Post = ({postData}) => {
    const [post, setPost] = useState(postData)
    const [newTitle, setNewTitle] = useState("")
    const userName = useSelector(state => state.userName)
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);

    const [show, setShow] = useState(false);

    const handleDislike = () => {
        if(post.dislikes.includes(userName.name)){
             post.dislikes.splice(post.dislikes.indexOf(userName.name),1)
            fetch(base_url + `post/${post.id}`,
                {
                    method:'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({dislikes: post.dislikes})}
            )
                .then(response => response.json())
                .then(res => setPost({...post,dislikes: res.result.dislikes}) )
        }else {
            post.dislikes.push(userName.name)
            fetch(base_url + `post/${post.id}`,
                {
                    method:'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({dislikes: post.dislikes})}
            )
                .then(response => response.json())
                .then(res => setPost({...post,dislikes: res.result.dislikes}) )
        }
    };
    const handleLike = () => {
        if(post.likes.includes(userName.name)){
            console.log( post.likes.splice(post.likes.indexOf(userName.name),1))
            fetch(base_url + `post/${post.id}`,
                {
                    method:'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({likes: post.likes})}
            )
                .then(response => response.json())
                .then(res => setPost({...post,likes: res.result.likes}) )
        }else {
            console.log(post.likes.push(userName.name))
            fetch(base_url + `post/${post.id}`,
                {
                    method:'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({likes: post.likes})}
            )
                .then(response => response.json())
                .then(res => setPost({...post,likes: res.result.likes}) )
        }
    };





    useEffect(() => {
        setPost(postData)
    }, [posts.posts]);
    const deletePost = () => {
        fetch(base_url + `post/${post.id}`, {method: 'DELETE'})
            .then(res => {

                dispatch(reRender(1));
            })

    }

    const renderNorm = () => {
        return (
            <div>
                <h3>{post.username}</h3>
                <p>{post.title}</p>
                <p>rating: {post.likes.length - post.dislikes.length}</p>
                <p>Post date and time: {new Date(post.date * 1).toLocaleString()}</p>
                {post.imageSrc ? <img src={post.imageSrc} alt="post image"/> : null}

                <Button disabled={!(userName.name === post.username)} onClick={deletePost}>Delete post
                </Button>
                <Button onClick={() => console.log("click")}>Add comment</Button>
                <Button onClick={() => console.log("click")}>Comments</Button>
                <Button variant={post.likes.includes(userName.name)?'success':"secondary"} onClick={handleLike}>Like</Button>
                <Button  variant={post.dislikes.includes(userName.name)?'danger':"secondary"} onClick={handleDislike}>Dislike</Button>

                <EditPostModal post={post} setPost={setPost} addOrEdit={"Edit"}/>

            </div>
        );
    }



    return renderNorm();
};

export default Post;