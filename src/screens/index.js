import { Navigation } from 'react-native-navigation';


import FirstTabScreen from '../containers/FirstTabScreen/';
import SecondTabScreen from '../containers/SecondTabScreen/';


export function registerScreens() {
  Navigation.registerComponent('Ninja.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('Ninja.SecondTabScreen', () => SecondTabScreen);
}
