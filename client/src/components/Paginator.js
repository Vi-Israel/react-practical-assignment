import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changePageNumberAction} from "../redux/actions/pageAction";
import {Pagination} from "react-bootstrap";

const Paginator = () => {
    const pageType = useSelector(state => state.pageType);
    const dispatch = useDispatch();

    return (
        <div className="d-flex justify-content-center">
            <Pagination className="px-4">
                {Array(pageType.pageNumberTotal).fill(0).map((_, index) => {
                    return (
                        <Pagination.Item
                            onClick={() => dispatch(changePageNumberAction(index+1))}
                            key={index + 1}
                            active={index + 1 === pageType.pageNumber}
                        >
                            {index + 1}
                        </Pagination.Item>
                    );
                })}
            </Pagination>


        </div>
    );
};

export default Paginator;