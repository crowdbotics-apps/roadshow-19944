import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps96676Navigator from '../features/Maps96676/navigator';
import Add-Item96675Navigator from '../features/Add-Item96675/navigator';
import Maps96671Navigator from '../features/Maps96671/navigator';
import UserProfile96667Navigator from '../features/UserProfile96667/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps96676: { screen: Maps96676Navigator },
Add-Item96675: { screen: Add-Item96675Navigator },
Maps96671: { screen: Maps96671Navigator },
UserProfile96667: { screen: UserProfile96667Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
