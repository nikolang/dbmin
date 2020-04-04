import { createBottomTabNavigator } from 'react-navigation';
import { LoginStack, OrderStack, OverviewHotelStack, ChatStack, AccountStack } from '../navigation/Stacks';

export default createBottomTabNavigator({
  LoginStack:LoginStack,
  OrderStack:OrderStack,
  OverviewHotelStack:OverviewHotelStack,
});