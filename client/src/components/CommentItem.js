import React, {useState} from 'react';
import EditCommentModal from "./EditCommentModal";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import {base_url} from "../utils/constants";
import {reRender} from "../redux/actions/pageAction";

const CommentItem = ({commentData,post,setPost}) => {

    const userName = useSelector(state => state.userName)
    const dispatch = useDispatch();
    const [comment,setComment]= useState(commentData);
    const [likes,setLikes]= useState(comment.likes);
    const [disLikes,setDisLikes]= useState(comment.dislikes);

    const deleteComment = () => {
        fetch(base_url + `comment/${comment.id}`, {method: 'DELETE'})
            .then(() => {

                dispatch(reRender(1));
            })

    }
    const handleCommentDislike = () => {
        if(disLikes.includes(userName.name)){
            disLikes.splice(disLikes.indexOf(userName.name),1)
            fetch(base_url + `comment/${comment.id}`,
                {
                    method:'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({dislikes: disLikes})}
            )
                .then(response => response.json())
                 .then(res => setDisLikes( res.result.dislikes) )
        }else {
            disLikes.push(userName.name)
            fetch(base_url + `comment/${comment.id}`,
                {
                    method:'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({dislikes: disLikes})}
            )
                .then(response => response.json())
                .then(res => setDisLikes( res.result.dislikes) )
        }
    };
    const handleCommentLike = () => {
        if(likes.includes(userName.name)){
            likes.splice(likes.indexOf(userName.name),1)
            fetch(base_url + `comment/${comment.id}`,
                {
                    method:'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({likes: likes})}
            )
                .then(response => response.json())
                .then(res => setLikes( res.result.likes) )
        }else {
            likes.push(userName.name)
            fetch(base_url + `comment/${comment.id}`,
                {
                    method:'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({likes: likes})}
            )
                .then(response => response.json())
                .then(res => setLikes( res.result.likes) )
        }
    };
    return (
        <div>
            <h5>{comment.username}</h5>
            <p>{comment.text}</p>
            <h5>rating: {likes.length - disLikes.length}</h5>
            <p>Comment date and time: {new Date(comment.date * 1).toLocaleString()}</p>
            <EditCommentModal comment={comment} setComment={setComment} post={post} setPost={setPost} addOrEdit={"Edit"}/>

            <Button disabled={!(userName.name === comment.username)} onClick={deleteComment}>Delete comment
            </Button>
            <Button variant={likes.includes(userName.name)?'success':"secondary"} onClick={handleCommentLike}>Like</Button>
            <Button variant={disLikes.includes(userName.name)?'danger':"secondary"} onClick={handleCommentDislike}>Dislike</Button>


        </div>
    );
};

export default CommentItem;