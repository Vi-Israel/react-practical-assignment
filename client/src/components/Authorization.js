import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {changeUserNameAction} from "../redux/actions/userNameAction";
import {changePageAction} from "../redux/actions/pageAction";
import Button from "react-bootstrap/Button";

const Authorization = () => {

    const [login, setLogin] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <input type={"text"} value={login}
                   onChange={e => setLogin(e.target.value)}/>
            <Button onClick={() => {
                if (login) {
                    dispatch(changeUserNameAction(login));
                    dispatch(changePageAction('main'))
                }
            }}>LogIn
            </Button>
        </div>
    );
};

export default Authorization;