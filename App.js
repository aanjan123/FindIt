import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';

import Home from './src/screens/Home';
import Details from './src/screens/Details/';
import LeftMenu from './src/screens/LeftMenu';

import Login from './src/screens/Login/';
import Register from './src/screens/Register/';
import Recover from './src/screens/ForgotPassword/';
import Launch from './src/screens/main';





const screens = createStackNavigator({
    Home: Home,
    Details,

});

const drawer = createDrawerNavigator({
    screens
}, {
        // initialRouteName: 'side',
        contentComponent: LeftMenu,
        drawerPosition: 'left',
        drawerWidth: Dimensions.get('window').width / 1.6
        // headerMode: 'none',

    });



const Main = createStackNavigator({
    Register,
    Recover,
    drawer,
    Login,
    Launch
}, {
        headerMode: 'none',
        initialRouteName: 'Launch'
    });

const App = createAppContainer(Main);

export default App;
