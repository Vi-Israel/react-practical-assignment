import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {base_url} from "../utils/constants";
import {reRender} from "../redux/actions/pageAction";

const EditCommentModal = ({comment, setComment,addOrEdit,post}) => {
    const userName = useSelector(state => state.userName)
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [newComment, setNewComment] = useState(comment?comment.text:"new comment");
    const [id, setId] = useState(comment ? comment.id : 0);

    const handleClose = () => {
        if (addOrEdit === 'Add') {
            fetch(base_url + `comment/${id}`, {method: 'DELETE'})
                .then(() => {
                    dispatch(reRender(1));
                })
        }
        setShow(false)
    };
    const handleEdit = () => {
        fetch(base_url + `comment/${id}`,
            {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({text: newComment})
            }
        )
            .then(response => response.json())
            .then(res => setComment ? setComment(res.result) : null)
            .then(() => {

            setShow(false)

            if (addOrEdit === 'Add') {
                setNewComment("new comment")
                dispatch(reRender(1))

            }
        }).catch()


    }

    const handleShow = () => {
        if (addOrEdit === 'Add') {
            fetch(base_url + `comment/`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({text: "new comment", postId: post.id , username:userName.name} )
            })
                .then(response => response.json())
                .then(res => setId(res.result.id))
        }
        setShow(true)
    };


    return (
        <div>
            <Button disabled={comment ? !(userName.name === comment.username) : false} onClick={handleShow} >{addOrEdit} comment
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{addOrEdit} post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={2}
                                defaultValue={newComment}
                                onChange={e => setNewComment(e.target.value)}
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
                        {addOrEdit}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default EditCommentModal;