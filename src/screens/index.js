import {
    Navigation
} from 'react-native-navigation';


import FirstTabScreen from '../containers/FirstTabScreen/';
import SecondTabScreen from '../containers/SecondTabScreen/';
import LoginPage from '../containers/LoginPage/';
import SignUpPage from '../containers/SignUpPage/';
import MoviePage from '../containers/MoviePage/';
import MovieDetailPage from '../containers/MovieDetailPage/';
import MovieList from '../components/MovieList/';
import Drawer from '../components/Drawer/';


export function registerScreens(store, Provider) {
    Navigation.registerComponent('Ninja.FirstTabScreen', () => FirstTabScreen, store, Provider);
    Navigation.registerComponent('Ninja.SecondTabScreen', () => SecondTabScreen, store, Provider);
    Navigation.registerComponent('Ninja.LoginPage', () => LoginPage, store, Provider);
    Navigation.registerComponent('Ninja.SignUpPage', () => SignUpPage, store, Provider);
    Navigation.registerComponent('Ninja.MoviePage', () => MoviePage, store, Provider);
    Navigation.registerComponent('Ninja.MovieDetailPage', () => MovieDetailPage, store, Provider);
    Navigation.registerComponent('Ninja.MovieList', () => MovieList, store, Provider);
    Navigation.registerComponent('Ninja.Drawer', () => Drawer);
}
