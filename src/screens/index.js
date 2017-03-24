import { Navigation } from 'react-native-navigation';


import FirstTabScreen from '../containers/FirstTabScreen/';
import SecondTabScreen from '../containers/SecondTabScreen/';
import LoginPage from '../containers/LoginPage/';
import Drawer from '../components/Drawer/';


export function registerScreens(store, Provider) {
  Navigation.registerComponent('Ninja.FirstTabScreen', () => FirstTabScreen, store, Provider);
  Navigation.registerComponent('Ninja.SecondTabScreen', () => SecondTabScreen, store, Provider);
  Navigation.registerComponent('Ninja.LoginPage', () => LoginPage, store, Provider);
  Navigation.registerComponent('Ninja.Drawer', () => Drawer);
}
