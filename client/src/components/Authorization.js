import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {changeUserNameAction} from "../redux/actions/userNameAction";
import {changePageAction} from "../redux/actions/pageAction";

const Authorization = () => {

    const [login, setLogin] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <input type={"text"} value={login}
                   onChange={e=>setLogin(e.target.value)}/>
            <button onClick={()=> {
                dispatch(changeUserNameAction(login));
                dispatch(changePageAction('main'))
            }}>LogIn</button>
        </div>
    );
};

export default Authorization;