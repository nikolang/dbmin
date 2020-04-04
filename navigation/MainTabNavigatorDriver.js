import { createBottomTabNavigator } from 'react-navigation';
import { LoginStack,OverviewDriverStack, ChatStack, DriverStack, AccountStack } from '../navigation/Stacks';

export default createBottomTabNavigator({
  LoginStack:LoginStack,
  OverviewDriverStack:OverviewDriverStack,
  ChatStack:ChatStack,
  DriverStack:DriverStack,
  //AccountStack:AccountStack
});