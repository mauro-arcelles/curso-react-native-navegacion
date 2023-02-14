import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios'
    ? <TabsIos />
    : <TabsAndroid />;
};


const BottomTabAndroid = createBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      // barStyle={{
      //   backgroundColor: colores.primary
      // }}
      screenOptions={
        ({ route }) => {
          return {
            headerShown: false,
            tabBarActiveTintColor: 'white',
            tabBarStyle: {
              borderTopColor: colores.primary,
              borderTopWidth: 0,
              elevation: 0,
              backgroundColor: colores.primary,
              height: 60
            },
            tabBarLabelStyle: {
              fontSize: 15,
              color: 'white',
              marginBottom: 5
            },
            tabBarIcon: ({ color }) => {
              let iconName: string = '';
              switch (route.name) {
                case 'Tab1Screen':
                  iconName = 'airplane-outline';
                  break;
                case 'TopTabNavigator':
                  iconName = 'reader-outline';
                  break;
                case 'StackNavigator':
                  iconName = 'server-outline';
                  break;
              }
              return <Icon name={iconName} size={20} color={color} />;
            }
          };
        }
      }
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{ title: 'Tab2' }} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
};


const BottomTabIOS = createBottomTabNavigator();

const TabsIos = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={
        ({ route }) => {
          return {
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: {
              borderTopColor: colores.primary,
              shadowColor: 'transparent', // FOR IOS
              elevation: 0
            },
            tabBarLabelStyle: {
              fontSize: 15
            },
            tabBarIcon: ({ color }) => {
              let iconName: string = '';
              switch (route.name) {
                case 'Tab1Screen':
                  iconName = 'airplane-outline';
                  break;
                case 'TopTabNavigator':
                  iconName = 'reader-outline';
                  break;
                case 'StackNavigator':
                  iconName = 'server-outline';
                  break;
              }
              return <Icon name={iconName} size={20} color={color} />;
            }
          };
        }
      }
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{ title: 'Tab2' }} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabIOS.Navigator >
  );
};
