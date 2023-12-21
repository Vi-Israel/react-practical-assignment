import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPostsByKeyword, getPostsByPage} from "../redux/actions/postsAction";
import Post from "./Post";

const Posts = () => {
    const pageType=useSelector(state => state.pageType);
    const posts=useSelector(state=>state.posts)
    const dispatch = useDispatch();

    useEffect(() =>
    {
        pageType.keyword?dispatch(getPostsByKeyword( pageType.keyword)) :dispatch(getPostsByPage(pageType.pageNumber))

    }, [pageType.keyword,pageType.pageNumber])
    return (
        <div className="container ">
        <div className="row">

            {posts.posts.map((item,index)=>
            <Post key={index} >{item}</Post>)}

        </div>
        </div>
    );
};

export default Posts;