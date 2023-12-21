import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeUserNameAction} from "../redux/actions/userNameAction";
import {changeKeywordAction, changePageAction} from "../redux/actions/pageAction";

const Header = () => {
    const userName = useSelector(state => state.userName)
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState('')
    return (
        <div>
            <h2>{userName.name}</h2>
            <button onClick={() => {
                dispatch(changeUserNameAction(''));
                dispatch(changePageAction('auth'))
            }}>LogOut
            </button>
            <input type={"text"} value={keyword}
                   onChange={e => setKeyword(e.target.value)}
                   onKeyDown={(e) => {
                       if (e.key === 'Enter')
                           dispatch(changeKeywordAction(keyword))

                   }}/>

        </div>
    );
};

export default Header;