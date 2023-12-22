import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import ReactPaginate from "react-paginate";
import {changePageNumberAction} from "../redux/actions/pageAction";

const Paginator = () => {
    const pageType = useSelector(state => state.pageType);
    const dispatch = useDispatch();

    return (
        <div>
            <ReactPaginate pageCount={pageType.pageNumberTotal} onPageChange={(e) => {
                dispatch(changePageNumberAction(e.selected+1))
            }}/>
        </div>
    );
};

export default Paginator;