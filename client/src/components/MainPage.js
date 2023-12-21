import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeUserNameAction} from "../redux/actions/userNameAction";
import {changePageAction} from "../redux/actions/pageAction";
import Header from "./Header";
import Posts from "./Posts";
import Paginator from "./Paginator";

const MainPage = () => {


    return (
        <div>
            <Header/>
            <Posts/>
            <Paginator/>
        </div>
    );
};

export default MainPage;