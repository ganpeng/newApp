import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { iconsMap, iconsLoaded } from './utils/iconsUtil';

import { registerScreens } from './screens/';
import store from './store/';


registerScreens(store, Provider);

const createTabs = () => {
  let tabs = [
    {
      label: 'One',
    //   icon: require('../img/one.png'),
      icon: iconsMap['ios-person--active'],
      screen: 'Ninja.FirstTabScreen',
      title: 'Screen One'
    },
    {
      label: 'Two',
    //   icon: require('../img/two.png'),
      icon: iconsMap['ios-people'],
      screen: 'Ninja.SecondTabScreen',
      title: 'Screen Two'
    },
    {
      label: 'Three',
    //   icon: require('../img/two.png'),
      icon: iconsMap['ios-people'],
      screen: 'Ninja.LoginPage',
      title: '登录'
    },
    {
      label: 'Four',
    //   icon: require('../img/two.png'),
      icon: iconsMap['ios-people'],
      screen: 'Ninja.SignUpPage',
      title: '注册'
    }
  ];

  return tabs;
}




iconsLoaded.then(() => {
  startApp();
});

function startApp() {
    Navigation.startTabBasedApp({
        tabs: createTabs(),
        drawer: {
            left: {
                screen: "Ninja.Drawer"
            },
            animationType: 'slide',
            disableOpenGesture: false
        }
     });
}
