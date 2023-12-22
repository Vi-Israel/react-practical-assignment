import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {base_url} from "../utils/constants";
import {reRender} from "../redux/actions/pageAction";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Post = ({postData, isEdit}) => {
    const [post, setPost] = useState(postData)
    const [newTitle, setNewTitle] = useState("")
    const [postIsEdit, setPostIsEdit] = useState(isEdit)
    const userName = useSelector(state => state.userName)
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleEdit = () => {
        fetch(base_url + `post/${post.id}`,
            {
                method:'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({title: newTitle})}
        )
            .then(response => response.json())
            .then(res => setPost({...post, title: res.result.title}) )

        setShow(false)
    }

    const handleShow = () => setShow(true);


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
                <p>{post.id}</p>
                <p>rating: {post.likes.length - post.dislikes.length}</p>
                <p>Post date and time: {new Date(post.date * 1).toLocaleString()}</p>
                {post.imageSrc ? <img src={post.imageSrc} alt="post image"/> : null}
                <button disabled={!(userName.name === post.username)} onClick={handleShow}>Edit post
                </button>
                <button disabled={!(userName.name === post.username)} onClick={deletePost}>Delete post
                </button>
                <button onClick={() => console.log("click")}>Comment post</button>
                <button onClick={() => console.log("click")}>Like</button>
                <button onClick={() => console.log("click")}>Dislike</button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>title</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={post.title}
                                    onChange={e => setNewTitle(e.target.value)}
                                    autoFocus
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleEdit}>
                            Edit
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }



    return renderNorm();
};

export default Post;