import React from 'react';
import {useSelector} from "react-redux";
import MainPage from "./MainPage";
import Authorization from "./Authorization";

const Main = () => {
    const pageType=useSelector(state => state.pageType);


    switch (pageType.type){
        case 'main':return <MainPage/>
        default: return <Authorization/>
    }
};

export default Main;