import {
	RECEIVE_MOVIES_COMING_SOON_SUCCESS,
	// RECEIVE_MOVIES_NEW_MOVIES_SUCCESS,
	RECEIVE_MOVIES_IN_THEATERS_SUCCESS,
	// RECEIVE_MOVIES_WEEKLY_SUCCESS,
	// RECEIVE_MOVIES_US_BOX_SUCCESS,
	RECEIVE_MOVIES_TOP250_SUCCESS,
	api_movie_coming_soon,
	// api_movie_new_movies,
	api_movie_in_theaters,
	// api_movie_weekly,
	// api_movie_us_box,
	api_movie_top250
} from '../constants/';


export function requestTop250() {
	return dispatch => {
		 fetch(api_movie_top250)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
				})
				.catch((err) => {
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
			const [ top250, in_theaters, coming_soon ] = results;
			dispatch(receiveMoviesTop250Success(top250));
			dispatch(receiveMoviesInTheatersSuccess(in_theaters));
			dispatch(receiveMoviesComingSoonSuccess(coming_soon));
		})
	}
}



export function requestComingSoon() {
	return dispatch => {
		 fetch(api_movie_coming_soon)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
				})
				.catch((err) => {
					console.log(err);
				})
	}
}


export function requestInTheaters() {
	return dispatch => {
		 fetch(api_movie_in_theaters)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
				})
				.catch((err) => {
					console.log(err);
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
