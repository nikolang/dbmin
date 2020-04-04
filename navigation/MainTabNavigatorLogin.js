import { createBottomTabNavigator } from 'react-navigation';
import { LoginStack } from './Stacks';

export default createBottomTabNavigator({
  LoginStack: LoginStack
});