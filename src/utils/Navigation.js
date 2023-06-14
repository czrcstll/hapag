import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import SignInScreen from '../screens/SignInScreen';
import GettingStartedScreen from '../screens/GettingStartedScreen';
import EnterHealthDetailsScreen from '../screens/EnterHealthDetailsScreen';
import PhysicalFactorScreen from '../screens/PhysicalFactorScreen';
import ComorbiditiesScreen from '../screens/ComorbiditiesScreen';
import AllergensScreen from '../screens/AllergensScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const defaultNavigationOptions = {
  headerShown: false
};

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    SignIn: SignInScreen,
    GettingStarted: GettingStartedScreen,
    EnterHealthDetails: EnterHealthDetailsScreen,
    PhysicalFactor: PhysicalFactorScreen,
    Comorbidities: ComorbiditiesScreen,
    Allergens: AllergensScreen,
    ForgotPassword: ForgotPasswordScreen
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
