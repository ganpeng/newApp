import {
    combineReducers
} from 'redux';

import movie from './movie';
import comment from './comment';

const rootReducer = combineReducers({
    movie,
    comment
});

export default rootReducer;
