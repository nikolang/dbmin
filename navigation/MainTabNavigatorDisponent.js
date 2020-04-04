import { createBottomTabNavigator } from 'react-navigation';
import { LoginStack, OrderStack, OverviewDisponentStack, ChatStack, DriverStatusesStack, AccountStack } from '../navigation/Stacks';

export default createBottomTabNavigator({
  LoginStack:LoginStack,
  OrderStack:OrderStack,
  OverviewDisponentStack:OverviewDisponentStack,
  DriverStatusesStack:DriverStatusesStack,
  //AccountStack:AccountStack
});