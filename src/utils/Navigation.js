import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import GettingStartedScreen from '../screens/auth/GettingStartedScreen';
import EnterHealthDetailsScreen from '../screens/auth/EnterHealthDetailsScreen';
import PhysicalFactorScreen from '../screens/auth/PhysicalFactorScreen';
import ComorbiditiesScreen from '../screens/auth/ComorbiditiesScreen';
import AllergensScreen from '../screens/auth/AllergensScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';

const defaultNavigationOptions = {
  headerShown: false
};

const AppNavigator = createStackNavigator(
  {
    GettingStarted: GettingStartedScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen,
    EnterHealthDetails: EnterHealthDetailsScreen,
    PhysicalFactor: PhysicalFactorScreen,
    Comorbidities: ComorbiditiesScreen,
    Allergens: AllergensScreen,
    ForgotPassword: ForgotPasswordScreen
  },
  {
    initialRouteName: 'GettingStarted',
    defaultNavigationOptions
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
