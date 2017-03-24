import {
	RECEIVE_MOVIES_COMING_SOON_SUCCESS,
	RECEIVE_MOVIES_IN_THEATERS_SUCCESS,
	RECEIVE_MOVIES_TOP250_SUCCESS,
} from '../constants/';

const initialState = {
	movies:[
		{
			id: 1,
			name: '谍影虫虫'
		}
	],
	coming_soon: {},   // 即将上映
	// new_movies: {},  // 新片榜
	in_theaters: {},  // 正在上映
	// weekly: {},  // 口碑榜
	// us_box: {},  // 北美票房榜
	top250: {}  // top250
};


export default (state = initialState, action = {}) => {
	switch(action.type) {
		case RECEIVE_MOVIES_TOP250_SUCCESS:
			return Object.assign({}, state, {top250: action.top250});
		case RECEIVE_MOVIES_IN_THEATERS_SUCCESS:
			return Object.assign({}, state, {in_theaters: action.in_theaters});
		case RECEIVE_MOVIES_COMING_SOON_SUCCESS:
			return Object.assign({}, state, {coming_soon: action.coming_soon});
		default:
			return state;
	}
}
