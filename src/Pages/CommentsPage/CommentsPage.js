import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCommentsThunk} from "../../Slices/CommentSlice/CommentSlice";
import Comment from "../../Components/Comment/Comment";

const CommentsPage = () => {

    const {comments} = useSelector(state => state['commentsReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCommentsThunk())
    }, []);


    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}

        </div>
    );
};

export default CommentsPage;