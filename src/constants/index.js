export const api_root = 'https://api.douban.com/v2/';
export const api_movie_root = `${api_root}movie/`;
export const api_movie_coming_soon = `${api_movie_root}coming_soon`;  // 即将上映
export const api_movie_new_movies = `${api_movie_root}new_movies`;  // 新片榜
export const api_movie_in_theaters = `${api_movie_root}in_theaters`;  // 正在上映
export const api_movie_weekly = `${api_movie_root}weekly`;  // 口碑榜
export const api_movie_us_box = `${api_movie_root}us_box`;  // 北美票房榜
export const api_movie_top250 = `${api_movie_root}top250`;  // top250

export const RECEIVE_MOVIES_COMING_SOON_SUCCESS = 'RECEIVE_MOVIES_COMING_SOON_SUCCESS';
export const RECEIVE_MOVIES_NEW_MOVIES_SUCCESS = 'RECEIVE_MOVIES_NEW_MOVIES_SUCCESS';
export const RECEIVE_MOVIES_IN_THEATERS_SUCCESS = 'RECEIVE_MOVIES_IN_THEATERS_SUCCESS';
export const RECEIVE_MOVIES_WEEKLY_SUCCESS = 'RECEIVE_MOVIES_WEEKLY_SUCCESS';
export const RECEIVE_MOVIES_US_BOX_SUCCESS = 'RECEIVE_MOVIES_US_BOX_SUCCESS';
export const RECEIVE_MOVIES_TOP250_SUCCESS = 'RECEIVE_MOVIES_TOP250_SUCCESS';
