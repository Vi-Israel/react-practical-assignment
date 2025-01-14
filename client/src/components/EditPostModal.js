import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {useDispatch, useSelector} from "react-redux";
import {base_url} from "../utils/constants";
import {reRender} from "../redux/actions/pageAction";

const EditPostModal = ({post, setPost, addOrEdit}) => {
    const userName = useSelector(state => state.userName);
    const [show, setShow] = useState(false);
    const [newTitle, setNewTitle] = useState(post ? post.title : "new post");
    const [file, setFile] = useState(null);
    const [id, setId] = useState(post ? post.id : 0);
    const dispatch = useDispatch();

    const handleClose = () => {
        if (addOrEdit === 'Add') {
            fetch(base_url + `post/${id}`, {method: 'DELETE'})
                .then(() => {

                    dispatch(reRender(1));
                })
        }
        setShow(false)
    };
    const handleEdit = () => {
        fetch(base_url + `post/${id}`,
            {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({title: newTitle})
            }
        )
            .then(response => response.json())
            .then(res => setPost ? setPost({...post, title: res.result.title}) : null)
            .then(() => {
                if(file){
                const formData = new FormData();
                formData.append("picture", file)
                fetch(base_url + `post/${id}/picture`, {
                    method: 'POST',
                    body: formData
                }).then(response => response.json())
                    .then(res => setPost ? setPost({...post, imageSrc: res.result.imageSrc}) : null)
                    .then(()=>{
                        if (addOrEdit === 'Add') {
                            dispatch(reRender(1))
                        }
                    })
                    .catch()}
            }).then(() => {

            setShow(false)
            setFile(null)
            if (addOrEdit === 'Add') {
                setNewTitle("new post")
                dispatch(reRender(1))

            }
        }).catch()


    }

    const handleShow = () => {
        if (addOrEdit === 'Add') {
            fetch(base_url + `post/`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({title: "new post", username: userName.name})
            })
                .then(response => response.json())
                .then(res => setId(res.result.id))
                .then(() => setShow(true))
        }
        setShow(true)
    };

    return (
        <div>
            <Button disabled={post ? !(userName.name === post.username) : false} onClick={handleShow}>{addOrEdit} post
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{addOrEdit} post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={2}
                                defaultValue={newTitle}
                                onChange={e => setNewTitle(e.target.value)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload picture</Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={e => setFile(e.target.files[0])}/>
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

export default EditPostModal;