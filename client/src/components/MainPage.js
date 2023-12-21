import React from 'react';

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