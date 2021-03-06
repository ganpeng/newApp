import {
    RECEIVE_MOVIES_COMING_SOON_SUCCESS,
    // RECEIVE_MOVIES_NEW_MOVIES_SUCCESS,
    RECEIVE_MOVIES_IN_THEATERS_SUCCESS,
    // RECEIVE_MOVIES_WEEKLY_SUCCESS,
    // RECEIVE_MOVIES_US_BOX_SUCCESS,
    RECEIVE_MOVIES_TOP250_SUCCESS,
    GET_MOVIE_DETAIL_SUCCESS,
    api_movie_coming_soon,
    // api_movie_new_movies,
    api_movie_in_theaters,
    // api_movie_weekly,
    // api_movie_us_box,
    api_movie_top250,
    api_movie_detail
} from '../constants/';

export function requestTop250(start, precb, endcb) {
    const _start = start || 0;
    precb && precb();
    return dispatch => {
        fetch(`${api_movie_top250}?start=${_start}`)
            .then((res) => res.json())
            .then((data) => {
                dispatch(receiveMoviesTop250Success(data));
                endcb && endcb();
            })
            .catch((err) => {
                endcb && endcb();
                console.log(err);
            })
    }
}

export function requestMoviesData() {
    return dispatch => {
        return Promise.all([
            fetch(api_movie_top250).then((res) => res.json()),
            fetch(api_movie_in_theaters).then((res) => res.json()),
            fetch(api_movie_coming_soon).then((res) => res.json())
        ]).then((results) => {
            const [top250, in_theaters, coming_soon] = results;
            dispatch(receiveMoviesTop250Success(top250));
            dispatch(receiveMoviesInTheatersSuccess(in_theaters));
            dispatch(receiveMoviesComingSoonSuccess(coming_soon));
        })
    }
}



export function requestComingSoon(start, precb, endcb) {
    const _start = start || 0;
    precb && precb();
    return dispatch => {
        fetch(`${api_movie_coming_soon}?start=${_start}`)
            .then((res) => res.json())
            .then((data) => {
                dispatch(receiveMoviesComingSoonSuccess(data));
                endcb && endcb();
            })
            .catch((err) => {
                console.log(err);
                endcb && endcb();
            })
    }
}


export function requestInTheaters(start, precb, endcb) {
    const _start = start || 0;
    precb && precb();
    return dispatch => {
        fetch(`${api_movie_in_theaters}?start=${_start}`)
            .then((res) => res.json())
            .then((data) => {
                dispatch(receiveMoviesInTheatersSuccess(data));
                endcb && endcb();
            })
            .catch((err) => {
                console.log(err);
                endcb && endcb();
            })
    }
}


export function requestWeekly() {
    return dispatch => {
        fetch(api_movie_weekly)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
}


export function requestUsBox() {
    return dispatch => {
        fetch(api_movie_us_box)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
}


export function receiveMoviesTop250Success(top250) {
    return {
        type: RECEIVE_MOVIES_TOP250_SUCCESS,
        top250
    }
}

export function receiveMoviesInTheatersSuccess(in_theaters) {
    return {
        type: RECEIVE_MOVIES_IN_THEATERS_SUCCESS,
        in_theaters
    }
}

export function receiveMoviesComingSoonSuccess(coming_soon) {
    return {
        type: RECEIVE_MOVIES_COMING_SOON_SUCCESS,
        coming_soon
    }
}


export function getMovieDetailSuccess(movie) {
    return {
        type: GET_MOVIE_DETAIL_SUCCESS,
        movie
    }
}


export function getMovieDetailRequest(id) {
    return dispatch => {
        fetch(`${api_movie_detail}${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                dispatch(getMovieDetailSuccess(data));
            })
            .catch((err) => {
                console.log(err);
            })
    }
}


