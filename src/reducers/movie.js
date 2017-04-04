import {
    RECEIVE_MOVIES_COMING_SOON_SUCCESS,
    RECEIVE_MOVIES_IN_THEATERS_SUCCESS,
    RECEIVE_MOVIES_TOP250_SUCCESS,
    GET_MOVIE_DETAIL_SUCCESS
} from '../constants/';

const initialState = {
    coming_soon: {
        start: 0,
        total: 0,
        movies: []
    }, // 即将上映
    // new_movies: {},  // 新片榜
    in_theaters: {
        start: 0,
        total: 0,
        movies: []
    }, // 正在上映
    // weekly: {},  // 口碑榜
    // us_box: {},  // 北美票房榜
    top250: {
        start: 0,
        total: 0,
        movies: []
    }, // top250
    movieDetail: null
};


export default (state = initialState, action = {}) => {
    switch (action.type) {
        case RECEIVE_MOVIES_TOP250_SUCCESS:
            const top250 = Object.assign({}, state.top250, {
                start: action.top250.start,
                total: action.top250.total,
                movies: [...state.top250.movies, ...action.top250.subjects]
            });
            return Object.assign({}, state, {
                top250
            });
        case RECEIVE_MOVIES_IN_THEATERS_SUCCESS:
            const in_theaters = Object.assign({}, state.in_theaters, {
                start: action.in_theaters.start,
                total: action.in_theaters.total,
                movies: [...state.in_theaters.movies, ...action.in_theaters.subjects]
            });
            return Object.assign({}, state, {
                in_theaters
            });
        case RECEIVE_MOVIES_COMING_SOON_SUCCESS:
            const coming_soon = Object.assign({}, state.coming_soon, {
                start: action.coming_soon.start,
                total: action.coming_soon.total,
                movies: [...state.coming_soon.movies, ...action.coming_soon.subjects]
            });
            return Object.assign({}, state, {
                coming_soon
            });
        case GET_MOVIE_DETAIL_SUCCESS:
            return Object.assign({}, state, {movieDetail: action.movie});
        default:
            return state;
    }
}
