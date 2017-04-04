import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { iconsMap, iconsLoaded } from './utils/iconsUtil';

import { registerScreens } from './screens/';
import store from './store/';

registerScreens(store, Provider);

const createTabs = () => {
    let tabs = [{
            label: '电影',
            icon: iconsMap['ios-person--active'],
            screen: 'Ninja.MoviePage',
            title: '电影'
        },
        {
            label: 'Four',
            icon: iconsMap['ios-people'],
            screen: 'Ninja.SignUpPage',
            title: '注册'
        },
        {
            label: 'Six',
            icon: iconsMap['ios-people'],
            screen: 'Ninja.FirstTabScreen',
            title: '电影列表'
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
