import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {useDispatch, useSelector} from "react-redux";
import {base_url} from "../utils/constants";
import {reRender} from "../redux/actions/pageAction";

const EditPostModal = ({post,setPost,addOrEdit}) => {
    const userName = useSelector(state => state.userName);
    const [show, setShow] = useState(false);
    const [newTitle, setNewTitle] = useState(post?post.title:"");
    const [id,setId]=useState(post?post.id:0);
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleEdit = () => {
        fetch(base_url + `post/${id}`,
            {
                method:'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({title: newTitle})}
        )
            .then(response => response.json())
            .then(res =>setPost?setPost({...post, title: res.result.title}):null )

        setShow(false)
        dispatch(reRender(1))
    }

    const handleShow = () => {
        if(addOrEdit==='Add'){
            fetch(base_url + `post/`,{
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({title: "new post", username: userName.name})})
                .then(response => response.json())
                .then(res=>setId(res.result.id))
                .then(()=>setShow(true))
        }else
        setShow(true)};

    return (
        <div>
            <Button disabled={post?!(userName.name === post.username):false} onClick={handleShow}>{addOrEdit} post
            </Button>
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
                                defaultValue={post?post.title:""}
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
                        {addOrEdit}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default EditPostModal;