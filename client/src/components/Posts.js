import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPostsByPage} from "../redux/actions/postsAction";
import Post from "./Post";

const Posts = () => {
    const pageType=useSelector(state => state.pageType);
    const posts=useSelector(state=>state.posts)
    const dispatch = useDispatch();

    useEffect(() =>
    {
        dispatch(getPostsByPage(pageType.pageNumber))

    }, [pageType.keyword,pageType.pageNumber])
    return (
        <div>

            {posts.posts.map((item,index)=>
            <Post key={index} >{item}</Post>)}
        </div>
    );
};

export default Posts;