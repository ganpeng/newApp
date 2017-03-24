import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens/';


registerScreens();

const createTabs = () => {
  let tabs = [
    {
      label: 'One',
      icon: require('../img/one.png'),
      screen: 'Ninja.FirstTabScreen',
      title: 'Screen One'
    },
    {
      label: 'Two',
      icon: require('../img/two.png'),
      screen: 'Ninja.SecondTabScreen',
      title: 'Screen Two'
    }
  ];

  return tabs;
}



Navigation.startTabBasedApp({ tabs: createTabs() });
