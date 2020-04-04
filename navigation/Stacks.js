import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LoginScreen from '../screens/LoginScreen';
import OrderScreen from '../screens/OrderScreen';
import OverviewDriverScreen from '../screens/OverviewDriverScreen';
import OverviewDisponentScreen from '../screens/OverviewDisponentScreen';
import OverviewHotelScreen from '../screens/OverviewHotelScreen';
import ChatScreen from '../screens/ChatScreen';
import AccountScreen from '../screens/AccountScreen';
import DriverScreen from '../screens/DriverScreen';
import DriverStatusesScreen from '../screens/DriverStatusesScreen';


const LoginStack = {
    screen: LoginScreen,
    path: '/login',
    navigationOptions: {
        title: 'Login',
        tabBarLabel: 'Login',
        tabBarIcon: ({ focused }) => (
            <TabBarIcon
                focused={focused}
                name={
                    Platform.OS === 'ios' ? `ios-log-in` : 'md-log-in'
                }
            />
        ),
    },
};

const OrderStack = {
    screen: OrderScreen,
    path: '/order',
    navigationOptions: {
        title: 'Order',
        tabBarLabel: 'Order',
        tabBarIcon: ({ focused }) => (
            <TabBarIcon
                focused={focused}
                name={
                    Platform.OS === 'ios' ? `ios-car` : 'md-car'
                }
            />
        ),
    },
};


const ChatStack = {
    screen: ChatScreen,
    path: '/chat',
    navigationOptions: {
        title: 'Chat',
        tabBarLabel: 'Chat',
        tabBarIcon: ({ focused }) => (
            <TabBarIcon
                focused={focused}
                name={
                    Platform.OS === 'ios' ? `ios-chatbubbles` : 'md-chatbubbles'
                }
            />
        ),
    },
};

const OverviewDriverStack = {
    screen: OverviewDriverScreen,
    path: '/map',
    navigationOptions: {
        title: 'Overview',
        tabBarLabel: 'Overview',
        tabBarIcon: ({ focused }) => (
            <TabBarIcon
                focused={focused}
                name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
            />
        ),
    },
};
const OverviewDisponentStack = {
    screen: OverviewDisponentScreen,
    path: '/map',
    navigationOptions: {
        title: 'Overview',
        tabBarLabel: 'Overview',
        tabBarIcon: ({ focused }) => (
            <TabBarIcon
                focused={focused}
                name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
            />
        ),
    },
};
const OverviewHotelStack = {
    screen: OverviewHotelScreen,
    path: '/map',
    navigationOptions: {
        title: 'Overview',
        tabBarLabel: 'Overview',
        tabBarIcon: ({ focused }) => (
            <TabBarIcon
                focused={focused}
                name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
            />
        ),
    },
};

const DriverStack = {
    screen: DriverScreen,
    path: '/driver',
    navigationOptions: {
        title: 'Driver',
        tabBarLabel: 'Driver',
        tabBarIcon: ({ focused }) => (
            <TabBarIcon
                focused={focused}
                name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
            />
        ),
    },
};

const DriverStatusesStack = {
    screen: DriverStatusesScreen,
    path: '/drivers',
    navigationOptions: {
        title: 'Drivers',
        tabBarLabel: 'Drivers',
        tabBarIcon: ({ focused }) => (
            <TabBarIcon
                focused={focused}
                name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
            />
        ),
    },
};

const AccountStack = {
    screen: AccountScreen,
    path: '/account',
    navigationOptions: {
        title: 'Account',
        tabBarLabel: 'Account',
        tabBarIcon: ({ focused }) => (
            <TabBarIcon
                focused={focused}
                name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
            />
        ),
    },
};


export { LoginStack, OrderStack, ChatStack, OverviewDriverStack, OverviewDisponentStack,OverviewHotelStack, DriverStack, DriverStatusesStack, AccountStack };