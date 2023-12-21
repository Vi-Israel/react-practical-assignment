import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeUserNameAction} from "../redux/actions/userNameAction";
import {changePageAction} from "../redux/actions/pageAction";

const Header = () => {
    const userName=useSelector(state => state.userName)
    const dispatch = useDispatch();

    return (
        <div>
            <h2>{userName.name}</h2>
            <button onClick={()=>{
                dispatch(changeUserNameAction(''));
                dispatch(changePageAction('auth'))
            }}>LogOut</button>
        </div>
    );
};

export default Header;