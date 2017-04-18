import { SET_COMMENTS,api_movie_root } from '../constants/';



function getCommentsById(id) {
    return dispatch => {
        fetch(`${api_movie_root}subject/${id}/comments`)
            .then((res) => res.json())
            .then((data) => {
                dispatch(setComments(data));
            })
    }
}


function setComments(comments) {
    return {
        type: SET_COMMENTS,
        comments
    }
}


