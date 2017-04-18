import { SET_COMMENTS } from '../constants/';

const initialState = [];


export default (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_COMMENTS:
            return state = action.comments ;
        default:
            return state;
    }
}







